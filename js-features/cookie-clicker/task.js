const cookie = document.getElementById("cookie");
const cookieCounter = document.getElementById("clicker__counter");

let counter = 0;

cookie.onclick = function() {
  counter += 1;
  cookieCounter.textContent = counter;
  cookie.style.width = "250px"; 
  cookie.style.height = "150px"; 

  setTimeout(() => {
    cookie.style.width = "200px";
    cookie.style.height = "128px";
  }, 100); 
};
