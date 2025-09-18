//SnowFlakes Animation
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

// Theme Change codes
var icon = document.getElementById("icon");
const body=document.body;
icon.onclick=function(){
  document.body.classList.toggle("light-theme");
  

  if(document.body.classList.contains("light-theme")){
    icon.src="./images/dark.png";
  }else{
    icon.src="./images/light.jpeg";
  }

  if(document.body.classList.contains("light-theme")){
    localStorage.setItem('theme', 'light')
  }else{
    localStorage.setItem('theme', 'dark')
  }
  
}
function getTheme(){
  let theme=localStorage.getItem('theme')
  if(theme==='light'){
    body.classList.add('light-theme')
  }
}
getTheme()

//project-card first
const hiddenText = document.getElementById("hidden");
const readMore = document.getElementById("read-more");
readMore.addEventListener('click', () => {
  console.log("clicked one")
  hiddenText.style.display="block";
  readMore.textContent="Show Less";
  if(readMore.textContent="Show Less"){
    readMore.addEventListener('click', () =>{
    hiddenText.style.display = "none";
    readMore.textContent = "Read More";
  });
  }
});

//projects-card second
const hiddenTextTwo = document.getElementById("hidden-two");
const readMoreTwo = document.getElementById("read-more-two");
readMoreTwo.addEventListener('click', () => {
  console.log("clicked one")
  hiddenTextTwo.style.display="block";
  readMoreTwo.textContent="Show Less";
  if(readMoreTwo.textContent="Show Less"){
    readMoreTwo.addEventListener('click', () =>{
    hiddenTextTwo.style.display = "none";
    readMoreTwo.textContent = "Read More";
  });
  }
});

// Navbar Scroll Effect
document.addEventListener("scroll", () => {
  const navBar = document.querySelector("nav");
  if(window.scrollY > 0){
    navBar.classList.add("scrolling"); 
  }else{
    navBar.classList.remove("scrolling");
  }
  
  console.log("window scrolling")
});

//Form Validaton and Error Inline-Message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const formMessage = document.getElementById("formMessage");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  nameError.textContent="";
  emailError.textContent="";
  formMessage.textContent="";

  const namePattern=/^[a-zA-Z]/;
  if (!name.match(namePattern)) {
    nameError.textContent = "⚠ Please Enter You Name Properly";
    nameError.style.color = "red";
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "⚠ Please enter a valid email address.";
    emailError.style.color = "red";
    return;
  };
  formMessage.textContent = "✅ Thank you! Your message has been sent.";
  formMessage.style.color = "green";

  document.getElementById("contactForm").reset();
   
  console.log("Contact Form")
  console.log("Name :", name);
  console.log("Email Id :", email);
  console.log("Message :", message);

  document.getElementById("contactForm").reset();

});