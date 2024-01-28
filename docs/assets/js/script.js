const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-circle")[0];

let isPlay = false;
let secCounter = 0;
let min;
let sec;
let centiSec;
let centiCounter = 0;
let minCounter= 0;
let lapItem = 0;
let isReset = false;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
    // clearButton.classList.remove("hidden");
    // lapButton.classList.toggle("hidden");
    // resetButton.classList.toggle("hidden");
}

const play = () => {
    
    if(!isPlay && !isReset) {
        playButton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        min =  setInterval(() => {
                //   if(secCounter === 60){
                //     secCounter = 0;
                //   }
                  minute.innerHTML = `${++minCounter} :`;
              }, 60*1000);
        sec = setInterval(() => {
                  if(secCounter === 60){
                    secCounter = 0;
                  }
                  second.innerHTML = `&nbsp;${++secCounter} :`;
              }, 1000);
        isPlay = true;
        centiSec = setInterval(() => {
                  if(centiCounter === 100){
                    centiCounter = 0;
                  }
                  centiSecond.innerHTML = `${++centiCounter}`;
              }, 10);
        isPlay = true;
        isReset=true;
    } else {
        playButton.innerHTML = 'Play';
        // playSec();
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg");
    }
    toggleButton();
}

// const playSec = () => {
//     setInterval(() => {
//         second.innerHTML = sec++;
//     },1000);
// }


const reset = () => {
/*  isReset = true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML = '&nbsp;0 :';
    centiSec.innerHTML = '&nbsp;0';
    minute.innerHTML='0 : ';
*/
    playButton.innerHTML = 'Play';
    clearInterval(min);
    clearInterval(sec);
    clearInterval(centiSec);
    isPlay = false;
    isReset = false;
    bg.classList.remove("animation-bg")

    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    
    // reset the minCounter, secCounter, and centiCounter to zero.
    minCounter = 0;
    secCounter = 0;
    centiCounter = 0;
    
    /*reset the innerHTML of the minute, 
    second, and centiSecond elements to show zero values. */
    minute.innerHTML = '0 :';
    second.innerHTML = '&nbsp 0 :';
    centiSecond.innerHTML = '&nbsp; 0';
    
    
    // also hide the lap-clear-button since there are no laps to clear.
    clearButton.classList.remove("hidden");
    
    // clear the laps and set lapItem back to zero.
    laps.innerHTML = '';
    lapItem = 0;
    // Create a new clearButton
    const newClearButton = document.createElement("button");
    newClearButton.className = "lap-clear-button hidden";
    newClearButton.textContent = "Clear All";
    newClearButton.addEventListener("click", clearAll);

    // Append the new clearButton to the laps container
    laps.appendChild(newClearButton);

     // Also, remove the "hidden" class from the clearButton if it exists
     clearButton.classList.remove("hidden");
}

const lap = () => {
    // clearButton.classList.remove("hidden");
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class" , "number" );
    timeStamp.setAttribute("class", "time-stamp");
    
    number.innerText = `${++lapItem}`;
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearAll = () => {
/*    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem = 0; */

    laps.innerHTML = '';
    lapItem = 0;
    /*check if there are any lap items present 
    in the laps container using laps.querySelector(".lap-item"). */
    /*if(!laps.querySelector(".lap-item")) {
        // If there are no lap items, hide the clearButton.
        clearButton.classList.add("hidden");
    }*/

    clearButton.classList.add("hidden");
    

    // Create a new clearButton
    const newClearButton = document.createElement("button");
    newClearButton.className = "lap-clear-button hidden";
    newClearButton.textContent = "Clear All";
    newClearButton.addEventListener("click", clearAll);

    // Append the new clearButton to the laps container
    laps.appendChild(newClearButton);

}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);