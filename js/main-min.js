document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".btn-select"),t=document.querySelector(".btn-start"),r=document.querySelector(".btn-submit"),n=document.querySelector(".sec-intro"),o=document.querySelector(".sec-quiz"),c=document.querySelector(".sec-result"),i=document.querySelector("#quizForm"),a=document.querySelector(".form-msj"),s='<div class="intro-content wrap response-box"><h1>Gracias por tu participación e interés.</h1><p>El programa de <strong>Breathe SoCal</strong> solamente está disponible para residentes del condado de <strong>Los Ángeles</strong>.</p><p>Para información sobre otros programas para pacientes con asma en California, <strong><a href="https://rampasthma.org/wp-content/uploads/2023/08/AHVP-directory-by-county-Dec-2023-final.pdf" target="_blank">haz clic aquí</a></strong>.</p></div>';function d(e){for(var t=document.getElementsByName(e),r=0;r<t.length;r++)if(t[r].checked)return t[r].value;return""}e.forEach((function(e){e.addEventListener("click",(function(){var t=this.querySelector('input[type="radio"]');t&&!t.checked&&(console.log("Radio clicked:",t.value),function(e,t){for(var r=[],n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&r.push(n),n=n.nextSibling;r.forEach((function(e){e.classList.remove(t)}))}(e,"selected"),this.classList.add("selected"),t.checked=!0)}))})),t.addEventListener("click",(function(){n.classList.add("hidden"),o.classList.remove("hidden"),setTimeout((function(){o.classList.add("fade-in")}),10)})),r.addEventListener("click",(function(e){e.preventDefault(),function(){var e={},t=["entry.366340186","entry.1824880050","entry.543187456","entry.535492766","entry.363822585"];if(e["entry.366340186"]=d("entry.366340186"),e["entry.1824880050"]=d("entry.1824880050"),e["entry.543187456"]=d("entry.543187456"),e["entry.535492766"]=d("entry.535492766"),e["entry.363822585"]=document.getElementsByName("entry.363822585")[0].value.trim(),e["entry.1234359850"]="Not required",e["entry.1617082906"]=document.getElementsByName("entry.1617082906")[0].value.trim(),!function(e,t){for(var r=0;r<t.length;r++){var n=t[r];if(!e[n]||""===e[n].trim())return!1}return!0}(e,t))return void(a.innerHTML='<div class="form-alert"><p>Por favor complete los campos requeridos</p>');if(!function(e){if(""===e.trim())return!0;return/^\d{10}$/.test(e.replace(/[-\s()+]/g,""))}(e["entry.1617082906"]))return void(a.innerHTML='<div class="form-alert"><p>Por favor introduzca un número válido</p>');"No"==e["entry.366340186"]&&(c.innerHTML=s);$.ajax({type:"POST",url:"https://docs.google.com/forms/u/2/d/e/1FAIpQLSeBYON1DHXFrHNEz-kCAsr_gKA-UYip5FF1aN7qLGPG0BCS7Q/formResponse",data:e,contentType:"application/x-www-form-urlencoded",complete:function(e){o.classList.add("hidden"),c.classList.remove("hidden"),setTimeout((function(){c.classList.add("fade-in")}),10),i.reset()},error:function(e,t,r){console.error("Error:",r)}})}()}))}));