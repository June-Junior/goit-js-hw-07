const inputInterfaceEl = document.querySelector("#controls");
const inputRef = inputInterfaceEl.querySelector("input");
const btn = inputInterfaceEl.querySelectorAll("button");

// const btnPlus = document.querySelector("#controls>button[data-action="render"]");


const btnCreate = btn[0];
const btnReset = btn[1]; 

const boxesRef = document.querySelector("#boxes");

console.log(inputInterfaceEl);
console.log(inputRef);
console.log(btn);
console.log(btnCreate);
console.log(btnReset);
console.log(boxesRef);

// const interfaceObject = {
//     value: 0,
//     // render() {
//     //     this.value = inputRef.value;
        
//     // },
//     destroy() {
//         this.value = "0";
//         inputRef.value = "0";
//     },
// };
btnCreate.addEventListener('click', createBoxes);

btnReset.addEventListener('click', destroy); 
// () {

    // interfaceObject.destroy();
    // console.log(interfaceObject);
    // console.log(interfaceObject.value);
    // counterValue.textContent = counterEl.value;
// })
// inputRef.addEventListener('input', function () {
//     const inputCurrentValue = `${inputRef.value}`;
//     console.log(inputCurrentValue);
//     // counterValue.textContent = counterEl.value;
// })
function destroy() {
    inputRef.value = "0";
    boxesRef.innerHTML = "";
}
function createBoxes(amount) {
       amount = inputRef.value;
    console.log(amount);
    let boxesRefWidth = 30;
    let boxesRefHeigth = 30; 
    const anyBoxesArr = [];
    for (let i = 0; i < amount; i += 1) {
        let anyBox = document.createElement("div");
        console.log(anyBox.attributes);
       anyBox.style.width = boxesRefWidth + [i] * 10 + "px";
       anyBox.style.height = boxesRefHeigth + [i] * 10 + "px";
       

    console.log(boxesRef);    
    anyBox.style.backgroundColor = randomColor();
    console.log(anyBoxesArr);
    anyBoxesArr.push(anyBox); 
    }
    console.log(anyBoxesArr);
    boxesRef.append(...anyBoxesArr);
} 

function randomColor() {
    let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }





    //   btnCreate.addEventListener('click', function() {

    //     interfaceObject.render();
    //     console.log(interfaceObject);
    //     console.log(interfaceObject.value);
    //     // counterValue.textContent = counterEl.value;
    // })     