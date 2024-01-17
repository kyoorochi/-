// 제출 이벤트를 받는다. (이벤트 핸들링)
const form = document.getElementById('form')

// 제출된 입력 값들은 참조한다.
form.addEventListener('submit', function(event){
    event.preventDefault() // 기존기능 차단.(새로고침 방지)

    let userId = event.target.id.value   
    let userPw1 = event.target.pw1.value   
    let userPw2 = event.target.pw2.value   
    let userName = event.target.name.value   
    let userPhone = event.target.phone.value   
    let userEmail = event.target.email.value   
    let userPosition = event.target.position.value   
    let userGender = event.target.gender.value   
    let userIntro = event.target.intro.value

    // 입력값에 문제가 있는 경우 이를 감지한다.
    if(userId.length < 7){
        alert('아이디가 너무 짧습니다. 7자 이상 입력해주세요')
        return
    }

    if(userPw1 !== userPw2){
        alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.')
        return
    }

    // 가입 환영 인사를 제공한다.
    document.body.innerHTML = ''
    document.write(
        `<p>${userId}님 환영합니다!<br>
        회원가입시 입력하신 내역은 아래와 같습니다.<br><br>
        아이디 : ${userId}<br>
        성명 : ${userName}<br>
        전화번호 : ${userPhone}<br>
        원하시는 직무 : ${userPosition}<br><br>
        잘 따라오시면 되어요. 화이팅!<br>
        <img src='https://thumb.mt.co.kr/06/2020/10/2020100610502800555_1.jpg/dims/resize/1200/crop/1200x630!/optimize/'></p>`)
})

/* 과제
회원가입을 완료하면 나타나는 환영인사를 다음과 같이 만들어보자.

userID님 환영합니다.
회원가입시 입력하신 내역은 다음과 같습니다.
아이디 : userID
이름 : userName
전화번호 : userPhone
원하시는 직무 : userPosition
*/