(function(window){
	
	'use strict'
	
	/**
	 * Shims
	 */
	
	function getTextContent(elem) {
		if ((elem.textContent) && (typeof (elem.textContent) != "undefined")) {
				return elem.textContent;
		} else {
				return elem.innerText;
		}
	}
	
	/*
	Options
	*/
	
	var defaultOptions = {
		content: 'body',
		start: 'h2',
		depth: 6
	};
	
	
	/**
	 * Constructor
	 */
	 
	function Toc(options){
		
		this.options = this.extend({}, defaultOptions, options);
		
		this.obj = document.querySelector(this.options.content);
		
		this.options.start = this.options.start.substr(1);
		
		this.traverse();
	}
	
	/**
	 * Traverse
	 */
	 
	Toc.prototype.traverse = function(){
			
			var html = '',
					tagNumber = 0,
					txt = '',
					id = '',
					previous = this.options.start,
					start = this.options.start,
					depth = this.options.depth,
					i = 0,
					srcTags = 'h'+ this.options.start,
					element = '';
					
			
			while(depth > 1){
				start ++;
				srcTags = srcTags + ", h" + start,
				depth --;
			}
			
			
			var found = this.obj.querySelectorAll(srcTags);
			
			for (var j = 0; j < found.length; j++ ){
				
				element = found[j];
				
				/* Get the tag number of the element - 2, 3, 4, 5, 6 */
				tagNumber = element.tagName.substr(1);
				
				/* Text of the element */
				
				txt = getTextContent(element);
				
				/* Get and Set ID Attribute */
				id = element.getAttribute('id') || txt.replace(/[^a-z0-9]+/ig, "-");        
				element.setAttribute("id", id);
				
				/* Build UL */
				
				switch(true){
					case (tagNumber > previous):
						html += "<ul><li><a href=\"#"+ id + "\">" + txt + "</a>";
						previous = tagNumber;
						break;
						
					case (tagNumber == previous):
						html += "</li><li><a href=\"#"+ id + "\">" + txt +  "</a>";
						break;
						
					case (tagNumber < previous):
						while(tagNumber != previous) {
							html += "</ul></li>";
							previous--;
						}
						html += "<li><a href=\"#"+ id + "\">" + txt + "</a>";
						break;
				}
				
			}
			
			
			/* corrects our last item, because it may have some opened ul's */
			
			while(tagNumber != this.options.start) {
				html += "</ul>";
				tagNumber--;
			}

			var fhtml = document.createElement('ul');
			fhtml.innerHTML = html;
			
			this.obj.insertBefore(fhtml,this.obj.firstChild);
	};
	
	
	/**
	 * Shims
	 */
	
	function getTextContent(elem) {
		if ((elem.textContent) && (typeof (elem.textContent) != "undefined")) {
				return elem.textContent;
		} else {
				return elem.innerText;
		}
	}
	
	/*
	 * Extend
	 */
	 
	 Toc.prototype.extend = function(){
		 if (arguments.length > 1) {
			 var master = arguments[0];
			 for (var i = 1, l = arguments.length; i < l; i++) {
				 var object = arguments[i];
				 for (var key in object) {
					 master[key] = object[key];
				 }
			 }
		 }
		 return master;
	 };
	
	
	return window.Toc = Toc;
		

})(window, undefined)