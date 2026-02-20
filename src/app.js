import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let rd1 = Math.floor(Math.random() * who.length);
  let rd2 = Math.floor(Math.random() * action.length);
  let rd3 = Math.floor(Math.random() * what.length);
  let rd4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML = who[rd1] + " " + action[rd2] + " " + what[rd3] + " " + when[rd4];
  }

