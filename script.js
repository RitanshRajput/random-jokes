
let setup = document.getElementById("setup") ;
let punchline = document.getElementById("punchline") ;
let btn = document.getElementById("btn") ;
const url = "https://official-joke-api.appspot.com/random_joke" ;

const generateJokes = () => {
  fetch(url)
  .then((response) => response.json()) 
  .then((data) => {
    // console.log(data);
    setup.innerHTML = data.setup ;
    punchline.innerHTML = `=> ${data.punchline }`;
  })
} ;

btn.addEventListener('click', generateJokes)
window.addEventListener("load", generateJokes) ;