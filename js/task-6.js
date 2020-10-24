const inputValidationRef = document.querySelector("#validation-input");

console.log(inputValidationRef);
console.log(inputValidationRef.textContent);

inputValidationRef.addEventListener('blur', onInputMod);

function onInputMod() {
    const defaultInputLength = Number(inputValidationRef.getAttribute('data-length'));
    const currentInputLength = inputValidationRef.value.length;
    console.log(defaultInputLength);
    console.log(currentInputLength);
    if (currentInputLength === defaultInputLength) {
        console.log("yes");
        inputValidationRef.classList.add('valid');
        inputValidationRef.classList.remove('invalid')
    }   else {
        inputValidationRef.classList.add('invalid');
        inputValidationRef.classList.remove('valid');
    }
}
