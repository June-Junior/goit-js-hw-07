const counterValue = document.querySelector("#value");
const counterEl = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};
const btn = document.querySelectorAll("button");

const btnDecrement = btn[0];
const btnIncrement = btn[1];

btnDecrement.addEventListener('click', function () {

    counterEl.decrement();
    console.log(counterEl);
    counterValue.textContent = counterEl.value;
})
btnIncrement.addEventListener('click', function () {

    counterEl.increment();
    console.log(counterEl);
    counterValue.textContent = counterEl.value;
})

console.log(btn);
console.log(btnDecrement);
console.log(btnIncrement);
console.log(counterValue);
console.log(counterEl);

// const counterEl = document.querySelector("#counter");
// console.log(document);
// const btnIncrement = btn.dataset.action="increment";
// const btnDecrement = btn.dataset.action="decrement";


// console.log(btnIncrement);
// console.log(typeof(btnIncrement));
// console.log(btnDecrement);
// console.log(typeof(btnDecrement));


// const btn = document.querySelector("button[data-action="decrement"]");