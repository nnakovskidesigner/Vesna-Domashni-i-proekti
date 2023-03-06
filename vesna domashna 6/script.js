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