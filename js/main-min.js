!function(){const e=document.querySelectorAll(".btn-select"),t=document.querySelector(".btn-start"),n=document.querySelector(".btn-submit"),c=document.querySelector(".sec-intro"),s=document.querySelector(".sec-quiz"),i=document.querySelector(".sec-result");e.forEach((function(e){e.addEventListener("click",(function(){!function(e,t){for(var n=[],c=e.parentNode.firstChild;c;)1===c.nodeType&&c!==e&&n.push(c),c=c.nextSibling;n.forEach((function(e){e.classList.remove(t)}))}(e,"selected"),this.classList.add("selected")}))})),t.addEventListener("click",(function(){c.classList.add("hidden"),s.classList.remove("hidden"),setTimeout((function(){s.classList.add("fade-in")}),10)})),n.addEventListener("click",(function(){s.classList.add("hidden"),i.classList.remove("hidden"),setTimeout((function(){i.classList.add("fade-in")}),10)}))}();