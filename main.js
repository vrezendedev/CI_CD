//Aud Conf
let scooby01 = document.getElementById("scooby01");
scooby01.volume = 0.07;

let scooby02 = new Audio('./resources/scooby02.mp3');
scooby02.volume = 0.07;
document.getElementById("scooby_pic_01").addEventListener("click", ()=>{scooby02.play();});

let scooby03 = new Audio('./resources/scooby03.mp3');
scooby03.volume = 0.07;
document.getElementById("scooby_pic_02").addEventListener("click", ()=>{scooby03.play();});

let scooby04 = new Audio('./resources/scooby04.mp3');
scooby04.volume = 0.15;
document.getElementById("scooby_pic_03").addEventListener("click",()=>{scooby04.play();});


const auds = [new Audio('./resources/scoobyA1.mp3'), new Audio('./resources/scoobyA2.mp3'), new Audio('./resources/scoobyA3.mp3'),
new Audio('./resources/scoobyA4.mp3'),new Audio('./resources/scoobyA5.mp3'),new Audio('./resources/scoobyA6.mp3'),new Audio('./resources/scoobyA7.mp3') ]

let scoobyvid01 = document.getElementById("scooby_vid_01");
scoobyvid01.volume = 0.1;

const mysteryMachine = document.getElementById("mysteryImg");

document.getElementById("mysteryImg").addEventListener("click", ()=>{
    let random = Math.trunc((Math.random() * auds.length)) + 1;
    auds[random].volume = 0.15;
    if(random == 6){
        auds[random].volume = 0.05;
    }
    auds[random].play();
})

//Old Bot Anim
// let mov = -150;

// setInterval(()=>{
//     let pos = mysteryMachine.getBoundingClientRect();
//     if(pos.right > 1850){
//         mysteryMachine.style.transform= `translate(-1750px, 0)`;
//         mov = -150;
//     } else{
//         mysteryMachine.style.transform= `translate(${mov}px, 0)`
//         mov += 3.5;
//     }
// }, 15)

//Logo Conf (Anim + Audio)
let hero = document.getElementById("hero");
document.getElementById("hero").addEventListener("click", ()=>{scooby01.play();});
let heroSizeX = 18;
let heroSizeY = 12; 
let inc = true;

setInterval(()=>{
    if(heroSizeX == 18){
        inc = false;
    }else{
        if(heroSizeX == 14){
            inc = true;
        }
    }

    if(inc == true){
        heroSizeX += 0.25;
        heroSizeY += 0.25;
        hero.style.maxWidth = `${heroSizeX}rem`;
        hero.style.maxHeight = `${heroSizeY}rem`;
    } else{
        heroSizeX -= 0.25;
        heroSizeY -= 0.25;
        hero.style.maxWidth = `${heroSizeX}rem`;
        hero.style.maxHeight = `${heroSizeY}rem`;
    }
}, 40);

let j = 0;

const intervalForChange = setInterval(change, 150)

function change(){
    document.body.style.filter = `grayscale(${j}%)`;
    j++;
    if(j > 99){
        let rip = document.createElement('p');
        rip.classList.add("fScooby")
        rip.innerText = "F Scooby";
        mysteryMachine.appendChild(rip)
        clearInterval(intervalForChange)
    }
}
//npx tailwindcss -i main.css -o ./dist/output.css --watch