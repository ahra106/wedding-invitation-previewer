
function confetti() {
    document.getElementById("column2").style.backgroundImage = 
    "url('./images/confetti.jpg')";
}

  function floral() {
    document.getElementById("column2").style.backgroundImage = 
    "url('./images/floral.jpg')";
  }

  function chalkboard() {
    document.getElementById("column2").style.backgroundImage = 
    "url('./images/chalkboard.jpg')";
  }

  /*First name*/

const jsTextBlockf = document.getElementById('js-text-block-f'),
jsTextInputf = document.getElementById('js-text-value-f');

if (jsTextInputf.value.length === 0) {
  jsTextBlockf.innerHTML = '  ';
}

jsTextInputf.addEventListener('input', () => {
  jsTextBlockf.setAttribute('data-text', jsTextInputf.value);

  jsTextBlockf.innerHTML = jsTextBlockf.getAttribute('data-text');

  if (jsTextInputf.value.length === 0) {
    jsTextBlockf.innerHTML = '  ';
  }
});

/*Second name*/
const jsTextBlocksecond= document.getElementById('js-text-block-second'),
jsTextInputsecond = document.getElementById('js-text-value-second');

if (jsTextInputsecond.value.length === 0) {
  jsTextBlocksecond.innerHTML = '  ';
}

jsTextInputsecond.addEventListener('input', () => {
  jsTextBlocksecond.setAttribute('data-text', jsTextInputsecond.value);

  jsTextBlocksecond.innerHTML = jsTextBlocksecond.getAttribute('data-text');

  if (jsTextInputsecond.value.length === 0) {
    jsTextBlocksecond.innerHTML = '  ';
  }
});

    /*Last name*/

    const jsTextBlocklast= document.getElementById('js-text-block-last'),
    jsTextInputlast= document.getElementById('js-text-value-last');
  
    if (jsTextInputlast.value.length === 0) {
      jsTextBlocklast.innerHTML = '  ';
    }
  
    jsTextInputlast.addEventListener('input', () => {
      jsTextBlocklast.setAttribute('data-text', jsTextInputlast.value);
  
      jsTextBlocklast.innerHTML = jsTextBlocklast.getAttribute('data-text');
  
      if (jsTextInputlast.value.length === 0) {
        jsTextBlocklast.innerHTML = '  ';
      }
    });

    /*Date*/

    const jsTextBlockdate= document.getElementById('js-text-block-date'),
    jsTextInputdate= document.getElementById('js-text-value-date');
  
    if (jsTextInputdate.value.length === 0) {
      jsTextBlockdate.innerHTML = '  ';
    }
  
    jsTextInputdate.addEventListener('input', () => {
      jsTextBlockdate.setAttribute('data-text', jsTextInputdate.value);
  
      jsTextBlockdate.innerHTML = jsTextBlockdate.getAttribute('data-text');
  
      if (jsTextInputdate.value.length === 0) {
        jsTextBlockdate.innerHTML = '  ';
      }
    });
    /*Venue*/
    const jsTextBlockvenue= document.getElementById('js-text-block-venue'),
    jsTextInputvenue= document.getElementById('js-text-value-venue');
  
    if (jsTextInputvenue.value.length === 0) {
      jsTextBlockvenue.innerHTML = '  ';
    }
  
    jsTextInputvenue.addEventListener('input', () => {
      jsTextBlockvenue.setAttribute('data-text', jsTextInputvenue.value);
  
      jsTextBlockvenue.innerHTML = jsTextBlockvenue.getAttribute('data-text');
  
      if (jsTextInputvenue.value.length === 0) {
        jsTextBlockvenue.innerHTML = '  ';
      }
    });
