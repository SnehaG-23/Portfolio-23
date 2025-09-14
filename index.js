 function createSnowFlakes(){
  const divD = document.createElement("div");
  divD.classList.add("snowflake")
  divD.textContent="❄️" ;
  const navigation =document.querySelector(".navigation");
  navigation.appendChild(divD);

  divD.style.fontSize = Math.random() * 20 + 10 +"px";
  divD.style.left = Math.random() * window.innerWidth + "px";
  
  divD.style.animationDuration = Math.random() * 5 + 5  + "s", + (Math.random() * 3 +2) + "s";
  divD.style.animationDelay=Math.random() * 5 + "s";
  

  setTimeout(() =>{
    divD.remove()
  }, 20000);

  console.log("Hello");
  
}
setInterval(createSnowFlakes, 200);