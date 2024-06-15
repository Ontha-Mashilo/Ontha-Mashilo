//assign universal variables
const clock = document.getElementById("clock");
let timer = null;
let startTime = 0;
let passedTime = 0;
let running = false;


function start(){
  
  //if statement to start the clock when the start button is pressed
  if(!running){
    startTime = Date.now() - passedTime;
    timer = setInterval(update, 10);
    running = true;
  }
  
};

function stop(){
  
  //if statement to pause the clock when the stop button is pressed
  if(running){
    clearInterval(timer);
    passedTime = Date.now() - startTime;
    running = false;
  }
};

function reset(){
  //Resetting the clock when the reset button is pressed
  clearInterval(timer);
  startTime = 0;
  passedTime = 0;
  running = false;
  clock.textContent = `00:00:00:00`;

  
};

function update(){

  //calculate the elapsed time since the push of the start button
  let currentTime = Date.now();
  passedTime = currentTime - startTime;

  //get clock values to be displayed in hh/mm/ss/msms format by converting ms into hours, minutes and seconds
  let hours = Math.floor(passedTime / (1000 * 60 * 60));
  let mins = Math.floor(passedTime / (1000 * 60) % 60);
  let secs = Math.floor(passedTime / 1000 % 60);
  let milisecs = Math.floor(passedTime % 1000 / 10);

  //add zeros to the timer
  hours = String(hours).padStart(2, "0");
  mins = String(mins).padStart(2, "0");
  secs = String(secs).padStart(2, "0");
  
  clock.textContent = `${hours}:${mins}:${secs}:${milisecs}`;
}