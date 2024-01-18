setInterval(function(){
    const nowDate = document.getElementById("nowDate")
    
    const now = new Date();
    
    let year    = now.getFullYear()
    let month   = now.getMonth() + 1
    let day     = now.getDate()
    let hour    = now.getHours()
    let min     = now.getMinutes()
    let sec     = now.getSeconds()
        
    nowDate.textContent = `현재날짜와 시간 : ${year}년 ${month}월 ${day}일  ${hour}시 ${min}분 ${sec}초`
    
}, 1000)