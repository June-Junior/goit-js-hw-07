const fontSizeControllerRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
console.log(fontSizeControllerRef.id);

fontSizeControllerRef.setAttribute("min", "0");
fontSizeControllerRef.setAttribute("max", "200");
fontSizeControllerRef.setAttribute("step", "5");
fontSizeControllerRef.setAttribute("value", "65");

// fontSizeControllerRef.innerHTML = 'min="1" max="100" value="30" step="5"';
console.log(fontSizeControllerRef);

console.log(fontSizeControllerRef.value);

console.log(textRef);
console.log(textRef.textContent);
console.log(textRef.innerText);
console.log(textRef.innerHTML);
console.log(textRef.textContent);
console.log(typeof(textRef));

fontSizeControllerRef.addEventListener('input', onSliderDrag);
console.log(fontSizeControllerRef.getAttribute("value"));
function onSliderDrag() {
    console.log(`${fontSizeControllerRef.value}px`);
      
    textRef.style.fontSize = `${fontSizeControllerRef.value}px`;

    console.log(textRef.style.fontSize);
    // textRef.textContent.fontsize.value = `${fontSizeControllerRef.value}px`;
    // console.log(textRef.textContent.fontsize.value);
    // console.log(textRef.textContent.fontsize);
    // console.log(textRef.textContent);
    // console.log(textRef);
    // textRef.attributes;
    // console.log(textRef.attributes);
    // textRef.getAttribute("id");
    // console.log(textRef.getAttribute("id"));
}
