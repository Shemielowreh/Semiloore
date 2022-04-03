const box1 = document.querySelector('.box1');
const body = document.querySelector('body');
const btnOne = document.querySelector('.btn1');



btnOne.addEventListener('click', ()=> {
    body.classList.toggle('bg-primary');
})

// function bgRed(box) {
//     box.style.backgroundColor = 'Red';
// };

// bgRed(body);

// const bgYellow = function () {
//     box1.style.backgroundColor = 'yellow';
// };

// bgYellow(box1); 

// let name = prompt("What is your name? : ");
// console.log(typeof(name));
// // name.parseInt;
// console.log(name+2);