let minutes = 0;
let seconds = 0;
let centisecs = 0;
const appendTens = document.getElementById('centisecs');
const appendSeconds = document.getElementById('seconds');
const appendMinutes = document.getElementById('minutes');
const buttonStart = document.getElementById('stbutton');
const buttonStop = document.getElementById('spbutton');
const buttonReset = document.getElementById('rsbutton');
let intervalId;

buttonStart.onclick = function(){
    clearInterval(intervalId)
    intervalId = setInterval(operateTimer, 10)
}

buttonStop.onclick = function(){
    clearInterval(intervalId)
}

buttonReset.onclick = function(){
    clearInterval(intervalId)
    centisecs = 0; seconds = 0; minutes = 0;
    appendTens.textContent = '00'
    appendSeconds.textContent = '00'
    appendMinutes.textContent = '00'
}

// 10ms 마다 시간에 대한 숫자가 증가하도록 만드는 함수식
function operateTimer(){
    centisecs++;
    //두 자리 숫자가 나오게 하려면 이렇게 코드 짠다는데 이 부분은 복습이 필요할 거 같다.
    appendTens.textContent = centisecs > 9 ? centisecs : '0' + centisecs
    if(centisecs > 99){
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
        centisecs = 0
        appendTens = '00'
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
        seconds = 0
        appendSeconds.textContent = "00"
    }
}
// 콘솔로그창을 띄워보니 Uncaught TypeError: Assignment to constant variable 이라고
// 뜨는데 뭐가 문제인지 모르겠다.. ㅠㅠ