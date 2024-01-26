// 크롤링한 데이터를 아래와 같은 형태의 객체 배열로 가정합니다.
// 추후 데이터베이스에 있는 데이터를 쿼리문으로 불러 올 수 있게 쿼리르 작성해 볼 수 있음
const data = [
    { gen: "공용", category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { gen: "공용", category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { gen: "남성", category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { gen: "여성", category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    // ...
];

const dataTable = document.getElementById('data-table');

data.forEach((item) => {
    const row = dataTable.insertRow(); // body 부분에 표를 건든것처럼 문구부분은 가운데 정렬, 금액만 우측정렬 해보려고 건드려봄.
    row.insertCell(0).innerHTML = `<div class="text-center">${item.gen}</div>`; // 20240126 - 성별부분 추가
    row.insertCell(1).innerHTML = `<div class="text-center">${item.category}</div>`;
    row.insertCell(2).innerHTML = `<div class="text-center">${item.brand}</div>`;
    row.insertCell(3).innerHTML = `<div class="text-center">${item.product}</div>`;
    row.insertCell(4).innerHTML = `<div class="text-end">${item.price}</div>`;
});

// 시계 추가
setInterval(function(){
    const nowDate = document.getElementById("clock")
    
    const now = new Date();
    
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let dayOfWeek = now.getDay() // 요일 배출하기. 0은 일요일, 6은 토요일
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    // 숫자가 한 자리일 때 앞에 0을 추가하는 함수를 써서 표현
    const padNumber = (number) => (number < 10 ? '0' : '') + number

    // 요일 배열
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']
        
    clock.textContent = `(${year}-${padNumber(month)}-${padNumber(day)} ${daysOfWeek[dayOfWeek]} / ${padNumber(hour)}:${padNumber(min)}:${padNumber(sec)})`;
    
}, 1000)