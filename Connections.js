// Variable declarations
let boxes = document.getElementsByClassName("word")
const alerts = document.querySelector("#alertList");
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const box6 = document.getElementById("box6")
const box7 = document.getElementById("box7")
const box8 = document.getElementById("box8")
const box9 = document.getElementById("box9")
const box10 = document.getElementById("box10")
const box11 = document.getElementById("box11")
const box12 = document.getElementById("box12")
const box13 = document.getElementById("box13")
const box14 = document.getElementById("box14")
const box15 = document.getElementById("box15")
const box16 = document.getElementById("box16")
const darkLight = document.querySelector("#darkLight")
const xb = document.querySelector("#x")
const finalPopup = document.querySelector("#finalPopup")
const reset = document.querySelector("#reset")
let purple = document.getElementById("purple")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let yellow = document.getElementById("yellow")
const submit = document.getElementById("submit")
let group1
let group2
let group3
let group4
let g1count = 0
let g2count = 0
let g3count = 0
let g4count = 0
let g1Int
let g2Int
let g3Int
let g4Int
let guess
let correctgroups = 0
let row = 0
UNIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
groupIntegers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let mode = 'dark'
let all = document.getElementsByTagName("*");
const back = document.querySelector("#back");
const back2 = document.querySelector("#back2");

back.addEventListener('click', function() {
    window.location.href = 'Main.html';
})

back2.addEventListener('click', function() {
    window.location.href = 'Main.html';
})

darkLight.addEventListener('click', function() {
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
})

xb.addEventListener('click', function() {
  finalPopup.classList.remove("on");
  finalPopup.classList.add("off");
})

reset.addEventListener('click', function() {
  window.location.reload()
})

let noPoverty = ["Social Protection", "Economic Growth", "Employment", "Microfinance"];

let zeroHunger = ["Food Security", "Sustainable Agriculture", "Nutrition", "Rural Development"];

let healthAndWellbeing = ["Universal Health Coverage", "Mental Health", "Vaccines", "Maternal Health"];

let qualityEducation = ["Inclusive Education", "Literacy", "Early Childhood Development", "Teacher Training"];

let genderEquality = ["Women's Rights", "Gender Parity", "Eliminating Violence", "Reproductive Health"];


let sanitation = ["Water Management", "Sanitation", "Hygiene", "Water Quality"];


let affordableAndCleanEnergy = ["Renewable Energy", "Energy Efficiency", "Access to Energy", "Sustainable Power"];

let decentWorkAndEconomicGrowth = ["Employment Opportunities", "Economic Diversification", "Labor Rights", "Sustainable Tourism"];

let industryInnovationAndInfrastructure 
= ["Sustainable Infrastructure", "Industrialization", "Innovation", "Research and Development"];

let reducedInequality = ["Social Inclusion", "Economic Inequality", "Equal Opportunity", "Policy for Inclusion"];


let sustainableCitiesAndCommunities = ["Urban Planning", "Affordable Housing", "Public Transport", "Green Spaces"];

let responsibleConsumptionAndProduction = ["Sustainable Consumption", "Waste Reduction", "Resource Efficiency", "Corporate Sustainability"];

let ClimateAction = ["Climate Change Mitigation", "Resilience", "Adaptation", "Carbon Emissions"];

let lifeBelowWater = ["Marine Conservation", "Ocean Health", "Sustainable Fishing", "Marine Pollution"];

let lifeOnLand = ["Biodiversity", "Forestry", "Desertification", "Land Degradation"];

let peaceJusticeAndStrongInstitutions = ["Rule of Law", "Human Rights", "Anti-Corruption", "Institutional Development"];


let partnershipsForTheGoals = ["Global Cooperation", "Multi-Stakeholder Partnerships", "Financial Resources", "Technology Transfer"]
;

let UNGroups = [noPoverty, zeroHunger, healthAndWellbeing,qualityEducation, genderEquality,sanitation, affordableAndCleanEnergy, decentWorkAndEconomicGrowth, industryInnovationAndInfrastructure, reducedInequality, sustainableCitiesAndCommunities, responsibleConsumptionAndProduction, ClimateAction, lifeBelowWater, lifeOnLand, peaceJusticeAndStrongInstitutions, partnershipsForTheGoals]
let UNGroupsStrings = ['No Poverty', 'Zero Hunger', 'Health and Wellbeing', 'Quality Education', 'Gender Equality','Sanitation', 'Affordable and Clean Energy', 'Decent Work and Economic Growth', 'Industry Innovation and Infrastructure', 'Reduced Inequality', 'Sustainable Cities and Communities', 'Responsible Consumption and Production', 'Climate Action', 'Life Below Water', 'Life on Land', 'Peace, Justice, and Strong Institutions', 'Partnerships for the Goals']

function groupMaker(){
  g1Int = Math.floor(Math.random() * UNIntegers.length)
  group1 = UNGroups[g1Int];
  UNIntegers.splice(g1Int,1);
  g2Int = Math.floor(Math.random() * UNIntegers.length)
  group2 = UNGroups[g2Int];
  UNIntegers.splice(g2Int,1);
  g3Int = Math.floor(Math.random() * UNIntegers.length)
  group3 = UNGroups[g3Int];
  UNIntegers.splice(g3Int,1);
  g4Int = Math.floor(Math.random() * UNIntegers.length)
  group4 = UNGroups[g4Int];
  UNIntegers.splice(g4Int,1);
  possibleGroups = [group1, group2, group3, group4];
  for(let i = 0; i < 4; i++){
    boxes[i].innerHTML = group1[i];
  }
  for(let i = 4; i < 8; i++){
    boxes[i].innerHTML = group2[i-4];
  }
  for(let i = 8; i < 12; i++){
    boxes[i].innerHTML = group3[i-8];
  for(let i = 12; i < 16; i++){
    boxes[i].innerHTML = group4[i-12]
  }
  for(let i = 0; i<16 ; i++){
    boxes[i].style.order = Math.floor(Math.random()* 16);
  }
  }
}
groupMaker();
for(let i = 0; i < 16; i++){
  boxes[i].addEventListener("click", () => {
if(boxes[i].classList.contains("selected")){
    boxes[i].classList.remove("selected");
    }
    else if(document.getElementsByClassName("selected").length < 4) {
      boxes[i].classList.add("selected");
    }
  })
}


function winfunction(){
  finalPopup.classList.add("on");
  finalPopup.classList.remove("off");
}

function shakeFunction(){
  for(let i = 0; i < boxes.length; i++){
  boxes[i].classList.remove("selected");
  }
}

submit.addEventListener("click", () => {
  guess = document.getElementsByClassName("selected")
  if(guess.length == 4){
  for(let i = 0; i < guess.length; i++){
    if(group1.includes(guess[i].innerHTML)){
      g1count++
    }
    else if(group2.includes(guess[i].innerHTML)){
      g2count++
    }
    else if(group3.includes(guess[i].innerHTML)){
      g3count++
    }
    else if(group4.includes(guess[i].innerHTML)){
      g4count++
      }
  }
  if (g1count == 3 || g2count == 3 || g3count == 3 || g4count == 3){
    let alert = document.createElement("div")
    alerts.prepend(alert)
    setTimeout(alertRemove, 1999)
  }
  if(g1count == 4){
    box1.style.display = 'none'
    box2.style.display = 'none'
    box3.style.display = 'none'
    box4.style.display = 'none'
    purple.innerHTML = UNGroupsStrings[g1Int]
    purple.style.display = 'flex'
    correctgroups++
  } 
  else if(g2count == 4){
    box5.style.display = 'none'
    box6.style.display = 'none'
    box7.style.display = 'none'
    box8.style.display = 'none'
    blue.innerHTML = UNGroupsStrings[g2Int]
    blue.style.display = 'flex'
    correctgroups++
  }
  else if(g3count == 4){
    box9.style.display = 'none'
    box10.style.display = 'none'
    box11.style.display = 'none'
    box12.style.display = 'none'
    green.innerHTML = UNGroupsStrings[g3Int]
    green.style.display = 'flex'
    correctgroups++
  }
  else if(g4count == 4){
    box13.style.display = 'none'
    box14.style.display = 'none'
    box15.style.display = 'none'
    box16.style.display = 'none'
    yellow.innerHTML = UNGroupsStrings[g4Int]
    yellow.style.display = 'flex'
    correctgroups++
  }
  g1count = 0
  g2count = 0
  g3count = 0
  g4count = 0
  shakeFunction();
  if(correctgroups == 4){
    winfunction();
  }
  }
})

function alertRemove(){
  alerts.removeChild(alerts.lastChild)
}