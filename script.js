const paragraph1 = document.querySelector(".paragraph1");

function handleClick1() {
  paragraph1.textContent = "paragraf1";
}

paragraph1.addEventListener("click", handleClick1);

//newline

const paragraph2 = document.querySelector(".paragraph2");

function handleClick2() {
  paragraph2.textContent = "paragraf2";
}

paragraph2.addEventListener("click", handleClick2);

//newline

const link1 = document.querySelector(".link1");

function handleClick3() {
  link1.textContent = "First Link";
}

link1.addEventListener("click", handleClick3);

//newline

const firsth1 = document.querySelector(".firsth1");

function handleClick4() {
  firsth1.textContent = "First h1";
}

firsth1.addEventListener("click", handleClick4);

//newline

const thirdparagraph = document.querySelector(".thirdparagraph");

function handleClick5() {
  thirdparagraph.textContent = "third paragraph"
}

thirdparagraph.addEventListener("click", handleClick5);

//newline

const secondh11 = document.querySelector(".secondh11");

function handleClick6() {
  secondh11.textContent = "second h1";
}

secondh11.addEventListener("click", handleClick6);

//newline

const thirdh1 = document.querySelector(".thirdh1");

function handleClick7() {
  thirdh1.textContent = "third h1";
}

thirdh1.addEventListener("click", handleClick7);

//newline

const link2 = document.querySelector(".link2");

function handleClick8() {
  link2.textContent = "link 2";
}

link2.addEventListener("click", handleClick8);

//newline

const prazenDIV = document.querySelector(".prazenDIV");

function handleClick9() {
  prazenDIV.textContent = "link 2";
}

link2.addEventListener("click", handleClick9);

//emptydivs below

const emptyDIV = document.getElementById('prazenDIV')

emptyDIV.style.backgroundColor = "#3f51b5";
emptyDIV.style.color = "#f4f4f4";
emptyDIV.style.height = "60px";
emptyDIV.style.width = "180px";
emptyDIV.style.padding = "20px";

emptyDIV.addEventListener('click', function() {
  emptyDIV.textContent = "Thank you";
  emptyDIV.style.backgroundColor = "#d94a38";
});

document.body.appendChild(div);


    
