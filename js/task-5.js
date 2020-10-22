const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
console.log(inputRef);
console.log(outputRef);
console.log(outputRef.textContent);

inputRef.addEventListener('input', onInputMod);

function onInputMod(eventAction) {

    if (eventAction.currentTarget.value === '') {
        return outputRef.textContent = 'незнакомец';
    };
    outputRef.textContent = eventAction.currentTarget.value;
    return outputRef;
}
