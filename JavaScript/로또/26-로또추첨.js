const todaySpan = document.querySelector('#today')
const numbersDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

// 날짜추가하기
const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `

let lottoNumbers = []

function paintNumber(number){
    const eachNumDiv = document.createElement('div')
    eachNumDiv.classList.add('eachnum')
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.append(eachNumDiv)
}

//클릭하면 랜덤숫자 6개가 배열에 추가된다.
drawButton.addEventListener('click', function(){
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1
        
        if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn)
            paintNumber(rn)
        }        
    }    
})

resetButton.addEventListener('click', function(){
    lottoNumbers.splice(0, 6)
    numbersDiv.innerHTML = ''
})