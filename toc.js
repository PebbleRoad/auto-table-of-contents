(function(window){
  
  'use strict'
  
  var toc = {};
  
  /*
   * Initialize Table of Contents
   */
   
  toc.init = function(options){
    
    var content = document.querySelector('body'),
        targets = content.querySelectorAll(options.target),
        ul = document.createElement('ul');
            
    for(var i = 0; i< targets.length; i++){
       var li = document.createElement('li'),
           id = targets[i].getAttribute('id') ||
                targets[i].textContent.replace(/[^a-z0-9]+/ig, "-"),
           text = targets[i].innerHTML,
           anchor = document.createElement('a');
           anchor.setAttribute('href','#'+id);    
      
      anchor.appendChild(document.createTextNode(text));
      targets[i].setAttribute('id', id);
      
      li.appendChild(anchor);
      ul.appendChild(li);                
    }
    
    document.body.insertBefore(ul, document.body.firstChild);
  }

  return window.toc = toc;
    

})(window, undefined)