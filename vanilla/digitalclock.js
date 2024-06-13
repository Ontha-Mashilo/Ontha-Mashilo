//use a setInterval function to run the clock every second
setInterval(() => {

  //use the new Date() object to get the current date and time
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  
  //get the current time to display on the webpage
  let currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = currentTime;

}, 1000);