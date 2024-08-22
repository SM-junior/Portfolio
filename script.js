
// document.querySelector('body').style.background = 'white'
document.querySelector('body').style.background = '#dfe6e9'
// document.querySelector('body').style.color = '#ffff'


const myDiv = document.getElementById("nav");
const menu = document.querySelector('.menu');
menu.style.padding = '5px 10px'
menu.style.borderRadius = '5px'

//clicking menu....
function toggle(e) {
    document.querySelector('.menu-items').classList.toggle('hidden')
    e.stopPropagation()
}

document.addEventListener('click', () => {
    if (!document.querySelector('.menu-items').classList.contains('hidden')) {
        document.querySelector('.menu-items').classList.add('hidden')
    }
})

//hiding nav.......
function x() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 767) {
        myDiv.style.display = 'none'
        menu.style.display = 'block'
    } else {
        myDiv.style.display = 'flex'
        menu.style.display = 'none'
    }
}
x()

window.addEventListener('resize', x);
menu.addEventListener('click', toggle)

//Text typing effect...........
const text = "Front-End React Developer";
const typingText = document.getElementById('title');
// let index = 0;

// function type() {
//     if (index < text.length) {
//         typingText.textContent += text.charAt(index)
//         index++;
//         setTimeout(type, 80); // Adjust the speed by changing the timeout value
//     } else {
//         setTimeout(() => {
//             index = 0;
//             typingText.textContent = '';
//             type()
//         }, 1000);
//     }
// }
// type()


let index = 0;
function logCharacters() {
    typingText.textContent += text[index]
    index++;

    if (index === text.length + 1) {
        index = 0; // Reset index to start over
        typingText.textContent = ''
        logCharacters()
    }
}

setInterval(logCharacters, 100);