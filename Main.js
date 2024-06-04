const darkLight = document.querySelector("#darkLight")
let mode = 'dark'
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