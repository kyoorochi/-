class Calculator {
//class를 선언한다
    constructor(displayElement) { 
    //생성자 함수를 통해 displatElement의 초기상태를 지정하기 위한 책상정리를 한다.
        this.displayElement = displayElement
        //this는 인스턴스 자신을 가리키는 참조변수다.
        //Calculator클래스의 안에 있는 인스턴스 변수 displayElement에 displayElement를 담는다
        this.displayContent = ''
        //Calculator클래스의 안에 있는 인스턴스 변수 displayContent에 빈 문자열을 담는다
    }
    //appendNumber 메서드(작업) 추가. 
    appendNumber(number) {
    //+= 는 복합대입연산자인데, this.displayContent = this.displayContent + number와 같은 의미를 가진다.
    // 문자열(String)에 +기호를 쓴 경우 덧셈을 하라는 것이 아니라 문자열을 잇는다는 것이다. ex) 10 + 1 = 101
        this.displayContent += number
    }

    //this.displayContent = this.displayContent + operator 의 의미다.
    appendOperator(operator) {            
        this.displayContent += operator
    }

    //updateDisplay 메서드(작업)추가.
    //this.displayElemnet의 값(value)에 this.displayContent를 담는다.
    updateDisplay() {
        this.displayElement.value = this.displayContent
    }
    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }
    compute() {
        this.displayContent = eval(this.displayContent
            //"\u00D7" 는 ×, "\u00F7"는 ÷를 의미한다.
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        )        
    }
}
    
const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
const calculator = new Calculator(displayElement)
//new 함수를 통해 Calculator라는 객체를 만든다.
// 이 객체에는 위에서 정의한 것과 같이 displayElement와 displayContent가 세팅되어 있다.


// arrow함수 forEach문은 다음과 같다.
// 리스트.forEach(원소=>함수(원소)); 
// 리스트 내의 각 원소를 함소 안에 차례로 넣는다.

buttons.forEach(button => {
// 대상객체.addEventListener('이벤트명', fuction 함수명(event){}) = ‘이벤트만들기’)
// 화살표 함수는 function 키워드 대신 화살표를 사용하여 간략하게 함수를 선언하는 것이다.
// 매개변수가 없는 경우 ()=>{…} 처럼 사용할 수 있다.-->
    button.addEventListener('click', () => {
    // data-type은 html코드에서 요소별로 부여했었다. button.dataset.type 부분은 button의 데이터타입을 가져오는 것이고,
    //케이스별로 분류하여 'operator', 'ac', 'equals'와 비교하여 일치여부 판단하고 콘솔 로그에 표시한다.-->
        switch (button.dataset.type) {
            case 'operator':
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })      
})

// 계산기 보면 결과값 출력 이후에 숫자 누르면 나왔던 결과값은 지우고 가던데 이건 어떻게 하는지 6개월 뒤에 만들어봐야 할듯..
// 3*2 = 6으로 끝나고는 숫자 3을 누르면 63으로 바뀌는 부분이라.. 음..