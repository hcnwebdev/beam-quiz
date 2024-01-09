document.addEventListener('DOMContentLoaded', function() {
  // Elements

  const radioEls = document.querySelectorAll('.btn-select'),
        btnStart = document.querySelector('.btn-start'),
        btnSubmit = document.querySelector('.btn-submit'),
        secIntro = document.querySelector('.sec-intro'),
        secQuiz= document.querySelector('.sec-quiz'),
        secResult = document.querySelector('.sec-result'),
        quizForm = document.querySelector("#quizForm"),
        formMsj = document.querySelector('.form-msj');

  const noQualMsj = '<div class="intro-content wrap response-box">' +
  '<h1>Gracias por tu participación e interés.</h1>' +
  '<p>El programa de <strong>Breathe SoCal</strong> solamente está disponible para residentes del condado de <strong>Los Ángeles</strong>.</p>' +
  '</div>';


  // Select siblings and remove class
  function removeMultipleClass(element,classToRemove) {

    var siblings = [];
    var sibling = element.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType ===1 && sibling !== element) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling
    }

    siblings.forEach( function(el) { el.classList.remove(classToRemove); });
  }

// Radio buttons
  radioEls.forEach(function(radioEl) {
    radioEl.addEventListener('click', function() {
      // Find the input within the clicked div
      var radioInput = this.querySelector('input[type="radio"]');

      // Check if the radioInput is found
      if (radioInput && !radioInput.checked) {
        console.log('Radio clicked:', radioInput.value);
        removeMultipleClass(radioEl, 'selected');
        this.classList.add('selected');
        radioInput.checked = true;
      }
    });
  });

  btnStart.addEventListener('click', function(){
    secIntro.classList.add('hidden');
    secQuiz.classList.remove('hidden');
    setTimeout(function() {
      secQuiz.classList.add("fade-in");
    }, 10);
  });

  btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    submitForm();
  });




// FORM -----------------------------------------------------------------------

/*

Form URL: https://docs.google.com/forms/u/1/d/e/1FAIpQLSeBYON1DHXFrHNEz-kCAsr_gKA-UYip5FF1aN7qLGPG0BCS7Q/formResponse

Inputs:
¿Vives en el condado de Los Ángeles?      > entry.366340186
¿Ha sido diagnosticado con asma?          > entry.1824880050
¿Estás dispuesto a participar en...?      > entry.543187456
¿Estás dispuesto a completar 4 encuestas? > entry.535492766
Tu nombre                                 > entry.363822585
Tu email                                  > entry.1234359850
Tu teléfono                               > entry.1617082906


*/


function getValueFromRadio(radioGroupName) {
    var radioGroup = document.getElementsByName(radioGroupName);

    for (var i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            return radioGroup[i].value;
        }
    }

    return ''; // Return an empty string if none are checked
}


// Helper function to check if required fields are filled
function areRequiredFieldsFilled(data, requiredFields) {
    for (var i = 0; i < requiredFields.length; i++) {
        var fieldName = requiredFields[i];
        if (!data[fieldName] || data[fieldName].trim() === '') {
            return false;
        }
    }
    return true;
}

// Email Validation helper
function isValidEmail(email) {
    // Regular expression for a basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone number validation
function isValidPhoneNumber(phoneNumber) {
    // If the phone number is empty, consider it valid
    if (phoneNumber.trim() === "") {
      return true;
    }

    // Regular expression for a basic phone number validation
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber.replace(/[-\s()+]/g, ""));
}


// Use this function in your submitForm function
function submitForm() {
    var data = {},
        requiredFields = ['entry.366340186', 'entry.1824880050', 'entry.543187456', 'entry.535492766', 'entry.363822585', 'entry.1234359850'];

    // Radio elements set
    data['entry.366340186'] = getValueFromRadio('entry.366340186'); // in LA
    data['entry.1824880050'] = getValueFromRadio('entry.1824880050'); // Asthma
    data['entry.543187456'] = getValueFromRadio('entry.543187456'); // Participate
    data['entry.535492766'] = getValueFromRadio('entry.535492766'); // Survey

    // Text input data
    data['entry.363822585'] = document.getElementsByName('entry.363822585')[0].value.trim(); // Name
    data['entry.1234359850'] = document.getElementsByName('entry.1234359850')[0].value.trim(); // Email
    data['entry.1617082906'] = document.getElementsByName('entry.1617082906')[0].value.trim(); // Phone

    // Check for required fields and email format
    if (!areRequiredFieldsFilled(data, requiredFields)) {
      formMsj.innerHTML = '<div class="form-alert"><p>Por favor complete los campos requeridos</p>';
        return;
    } else if (!isValidEmail(data['entry.1234359850'])) {
      formMsj.innerHTML = '<div class="form-alert"><p>Por favor introduzca un email válido</p>';
        return;
    } else if (!isValidPhoneNumber(data['entry.1617082906'])) {
      formMsj.innerHTML = '<div class="form-alert"><p>Por favor introduzca un número válido</p>';
        return;
    }

    // Set the end message if user doesn't qualify
    if (data['entry.366340186'] == 'No') { secResult.innerHTML = noQualMsj; }

    $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSeBYON1DHXFrHNEz-kCAsr_gKA-UYip5FF1aN7qLGPG0BCS7Q/formResponse',
        data: data,
        contentType: 'application/x-www-form-urlencoded',
        complete: function(response) {
            secQuiz.classList.add('hidden');
            secResult.classList.remove('hidden');
            setTimeout(function() {
                secResult.classList.add('fade-in');
            }, 10);
            quizForm.reset();
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            // Handle error
        }
    });
}


});
