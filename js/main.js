(function(){
  // Elements

  const radioEls = document.querySelectorAll('.btn-select'),
        btnStart = document.querySelector('.btn-start'),
        btnSubmit = document.querySelector('.btn-submit'),
        secIntro = document.querySelector('.sec-intro'),
        secQuiz= document.querySelector('.sec-quiz'),
        secResult = document.querySelector('.sec-result');


  // Select siblings and remove class
  function removeMultipleClass(element,classToRemove) {

    var siblings = [];
    var sibling = element.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType ===1 && sibling !== element) { siblings.push(sibling); }
      sibling = sibling.nextSibling
    }

    siblings.forEach( function(el) { el.classList.remove(classToRemove); });
  }

  radioEls.forEach(function(radioEl) {
    radioEl.addEventListener('click', function(){
      //e.preventDefault();
      removeMultipleClass(radioEl,'selected');
      this.classList.add('selected');
    })
  });

  btnStart.addEventListener('click', function(){
    secIntro.classList.add('hidden');
    secQuiz.classList.remove('hidden');
    setTimeout(function() {
      secQuiz.classList.add("fade-in");
    }, 10);
  });

  btnSubmit.addEventListener('click', function(){
    secQuiz.classList.add('hidden');
    secResult.classList.remove('hidden');
    setTimeout(function() {
      secResult.classList.add("fade-in");
    }, 10);
  });




})();
