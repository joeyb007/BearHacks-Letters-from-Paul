// Variable declaratations, onloads, and event listeners
import { WORDS, goal1, goal10, goal11, goal12, goal13, goal14, goal15, goal16, goal17, goal2, goal3, goal4, goal5, goal6, goal7, goal8, goal9 } from "./words.js";
import { GUESSES } from "./words.js";
const input = document.querySelectorAll('input');
const button = document.querySelectorAll('button');
const row2 = document.querySelectorAll('.row2')
const alerts = document.querySelector("#alertList");
const finalPopup = document.querySelector("#finalPopup");
const fTopic = document.querySelector("#fTopic")
let all = document.getElementsByTagName("*");
let i = 0;
let j = 0
let row = 0;
let guess = '';
let lim = true;
let popup = false;
let answer = WORDS[Math.floor(Math.random() * WORDS.length)];
let temp = answer;
let topic = ""
let mode = "dark"
window.onload = function firstSelection(){
  focusUpdate();
  clx();
}
const back = document.querySelector("#back");
const back2 = document.querySelector("#back2");

back.addEventListener('click', function() {
    window.location.href = 'Main.html';
})

back2.addEventListener('click', function() {
    window.location.href = 'Main.html';
})

for(let i=1; i<18; i++){
  if(eval(`goal${i}.includes(answer)`)){
    topic = i
    break;
  }
}

switch(topic){
  case 1:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal1'>No Poverty</a>"
    break;
  case 2:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal2'>Zero Hunger</a>"
    break;
  case 3:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal3'>Good Health and Well-Being</a>"
    break;
  case 4:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal4'>Quality Education</a>"
    break;
  case 5:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal5'>Gender Equality</a>"
    break;
  case 6:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal6'>Clean Water and Sanitation</a>"
    break;
  case 7:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal7'>Affordable and Clean Energy</a>"
    break;
  case 8:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal8'>Decent Work and Economic Growth</a>"
    break;
  case 9:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal9'>Industry, Innovation and Infrastructure</a>"
    break;
  case 10:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal10'>Reduced Inequalities</a>"
    break;
  case 11:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal11'>Sustainable Cities and Communities</a>"
    break;
  case 12:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal12'>Responsible Consumption and Production</a>"
    break;
  case 13:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal13'>Climate Action</a>"
    break;
  case 14:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal14'>Life Below Water</a>"
    break;
  case 15:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal15'>Life On Land</a>"
    break;
  case 16:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal16'>Peace, Justice and Strong Institutions</a>"
    break;
  case 17:
    fTopic.innerHTML = "Your Topic Was <a href='https://sdgs.un.org/goals/goal17'>Partnerships For The Goals</a>"
    break;
}

document.addEventListener("keydown", letterType);
document.addEventListener("click", clx);

function letterType() {
  if(i-(row*5) < 5){
    focusUpdate();
  }

  if((/[a-zA-Z]/).test(event.key) && event.key.length == 1 && i-(row*5) < 5){
    input[i].classList.add('typeAnimation');
    input[i].value = ''
    i++
  } else if(event.key == 'Backspace' && i-(row*5) > 0){ 
    i--
    focusUpdate()
    input[i].classList.remove('typeAnimation')
  }else if(event.key.length == 1 && (/[a-zA-Z]/).test(event.key) == false){
    input[i].blur()
  } else if(event.key == 'Enter' && i-(row*5) == 5){
    if(lim){
      lim = false;
      enter();
    }
  }
}
// essentially, ensures that clicks on 
function clx(){
  for(let j=0;j<button.length;j++){
    button[j].addEventListener('click', function(){
      if(i-(row*5) < 5 && popup == false){
        focusUpdate();
      }
      if(button[j].innerHTML == '⌫'){
        if(i-(row*5) > 0){
          i--
          focusUpdate()
          input[i].value = ''
          input[i].classList.remove('typeAnimation')
        }
      } else if(button[j].innerHTML == 'enter'){
        if(lim){
          lim = false;
          enter();
        }
      }else if(button[j].id == "darkLight"){
        if(mode == "light"){
          for(let o = 0; o<all.length; o++){
        all[o].classList.remove("light");
          }
          mode = "dark"
        } else {
          for(let o = 0; o<all.length; o++){
            all[o].classList.add("light");
          }
          mode = "light"
        }
      }else if(button[j].id == "reset"){
        gameReset()
      }else if(button[j].id == "x"){
        finalPopup.classList.add("off");
        finalPopup.classList.remove("on");
      }else{
        if(i-(row*5) < 5){
          input[i].classList.add('typeAnimation');
          input[i].value = button[j].innerHTML
          i++
        }
      }
      document.removeEventListener("click", clx);
    });
  }
}

function focusUpdate(){
  input[i].focus();
}

function enter(){
  for(let j = row*5; j < 5+(row*5); j++){
    guess += input[j].value.toLowerCase();
  }
  if(GUESSES.includes(guess)){
    for(let j = 0; j < 5; j++){
      if(input[j+(row*5)].value.toLowerCase() == answer.charAt(j)){
        temp = temp.replace(input[j+(row*5)].value, '0');
      }
    }
    animate()
  }else {
    lim = true;
    let alert = document.createElement("div")
    alerts.prepend(alert)
    row2[row].classList.add("shakeAnimation")
    setTimeout(reset2,500)
    setTimeout(alertRemove, 1999)
  }
  if(guess != answer){
    guess = '';
  }
}

function reset2(){
  row2[row].classList.remove("shakeAnimation")
}

function alertRemove(){
  alerts.removeChild(alerts.lastChild)
  
}

function animate(){
    input[j+(row*5)].classList.add("flipAnimation");
    if(input[j+(row*5)].value.toLowerCase() == answer.charAt(j)){
      input[j+(row*5)].classList.add('correctLetter');
    } else{
      input[j+(row*5)].classList.add('wrong');
    }
    if(temp.includes(input[j+(row*5)].value.toLowerCase()) && input[j+(row*5)].value.toLowerCase() != answer.charAt(j)){
      input[j+(row*5)].classList.replace('wrong','wrongSpot');
      temp = temp.replace(input[j+(row*5)].value.toLowerCase(), '0');
    }
  j++
   if(j < 5){
    setTimeout(animate,500);
  } else {
    temp = answer;
    setTimeout(reset,300);
    for(let j = 0; j < 5; j++){
      if(input[j+(row*5)].value.toLowerCase() == answer.charAt(j)){
      for(let k = 0; k < button.length; k++){
        if(button[k].innerHTML == input[j+(row*5)].value.toLowerCase()){
          button[k].classList.remove('wrong');
          button[k].classList.remove('wrongSpot');
          button[k].classList.add('correctLetter');
        }
      }
      temp = temp.replace(input[j+(row*5)].value.toLowerCase(), '0');
      } else{
      for(let k = 0; k < button.length; k++){
        if(button[k].innerHTML == input[j+(row*5)].value.toLowerCase()){
          if(button[k].classList.contains('correctLetter') == false && button[k].classList.contains('wrongSpot') == false){
            button[k].classList.add('wrong');
          }
        }
      }
      }
      if(temp.includes(input[j+(row*5)].value.toLowerCase())){
      for(let k = 0; k < button.length; k++){
        if(button[k].innerHTML == input[j+(row*5)].value.toLowerCase()){
          if(button[k].classList.contains('correctLetter') == false){
          button[k].classList.replace('wrong','wrongSpot');
          }
        }
      }
      temp = temp.replace(input[j+(row*5)].value.toLowerCase(), '0');
      }
    }
    temp = answer;
    j = 0;
  }
}

function reset(){
  for(let j = 0; j < 5; j++){
    input[j+(row*5)].classList.remove('flipAnimation');
  }
  lim = true;
  row++
  if(i>29){
    let alert2 = document.createElement("span");
    alert2.innerHTML = answer;
    alerts.prepend(alert2);
    setTimeout(alertRemove, 3999);
    setTimeout(Popup, 2000);
  } else if(guess == answer) {
    setTimeout(Popup, 200);
  }
}

function Popup(){
  popup = true;
  finalPopup.classList.replace("off","on");
}

function gameReset(){
  finalPopup.classList.replace("on","off");
  answer = WORDS[Math.floor(Math.random() * WORDS.length)];
  i = 0;
  j = 0
  row = 0;
  guess = '';
  lim = true;
  popup = false;
  temp = answer;
  for(let k = 0; k <input.length; k++){
    input[k].value = "";
    input[k].classList.remove("wrong", "wrongSpot", "correctLetter", "flipAnimation", "typeAnimation");
  }
  for(let k = 0; k <button.length; k++){
    button[k].classList.remove("wrong", "wrongSpot", "correctLetter");
  }
}
