const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
const main = document.querySelector('main');

btn.addEventListener("click", function() {

    
    let hexColor = "#";

    for(let i = 0; i < 6; i++) {
        hexColor += colorArr[gettheNumber()];
        
    }
        color.textContent = hexColor;
        main.style.backgroundColor = hexColor;
        
});

function gettheNumber() {
    return Math.floor(Math.random() * colorArr.length);
}