(function(window){
  
  'use strict'
  
  var toc = {};

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
   * Initialize Table of Contents
   */
   
  toc.init = function(options){
    
    var content = document.querySelector(options.content),
        targets = content.querySelectorAll(options.target),
        ul = document.createElement('ul');

    for(var i = 0; i< targets.length; i++){
       var li = document.createElement('li'),
           id = targets[i].getAttribute('id') || getTextContent(targets[i]).replace(/[^a-z0-9]+/ig, "-"),
           text = targets[i].innerHTML,
           anchor = document.createElement('a');
           anchor.setAttribute('href','#'+id);    
      
      anchor.appendChild(document.createTextNode(text));
      targets[i].setAttribute('id', id);
      
      li.appendChild(anchor);
      ul.appendChild(li);                
    }
    
    content.insertBefore(ul, document.body.firstChild);
  }

  return window.toc = toc;
    

})(window, undefined)