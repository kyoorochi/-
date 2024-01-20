/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 */

/*  문제 출제
 *
 *   ☘️당신의 운을 시험해 보세요☘️
 * - n은 내가 정하는 수 1~9까지의 숫자만 넣어주세요.
 * - 1~9번 중 랜덤으로 행운의 숫자를 출력합니다.
 * - 콘솔에 1~10회차의 각 행운의 숫자를 비교해 당첨 여부를 표시합니다. ex) 1회차 행운의 숫자 : 2 당첨!
 * - 총 당첨 횟수와 배팅금액을 곱해주세요.
 * - 최종 금액을 콘솔에 표시해주세요. ex) 당첨금은 30000원 입니다.
 *
 *  *❗️ 제한 조건 ❗️
 * - 랜덤 숫자는 정수 입니다.
 * 
 * Math 패키지를 이용하시면 됩니다.
 * m = 10000 (당첨금)
 * 두번 당첨 되었다면 result = 20000
 * 
 */

function question(n, m) {
    // 여기에서 코드 작성해주세요!
    let result;
    n = [1, 3, 5, 7, 9, 8, 6, 4, 2] // 1 ~ 9 까지의 숫자를 넣고...
    m = 10000; // 위에 말했듯이 당첨금으로 표현
    let rdnumber = 0;
    let count = 0; // 횟수 세는건가?
    for(let i = 0; i < 10; i++) { // 0이 1로 표현되니 시작점이 0, 9번 돌리면서, 카운트를 하나씩 더한다
        rdnumber = Math.floor(Math.random()*10); // 위에 선언한 rdnumber는 0 ~ 1 사이의 숫자를 랜덤으로 뽑고, 10을 곱한 수인데 floor를 썼기에 소수점 이하는 버린다.
        if(n[i] == rdnumber) { // n 리스트 안에 있는 i번째 숫자와 rdnumber의 숫자가 같을때
            console.log(`${i+1}회차 ♣행운의 숫자♣ : ${rdnumber} 당첨!`) // 위에서 말했듯이 0부터 시작하니 1회차 하려면 1을 더한걸로 표현
            count ++; // 당첨이기에 카운트에 1을 더한다
        } else {
            console.log(`${i+1}회차 ♣행운의 숫자♣ : ${rdnumber} 낙첨... ㅠㅠ`)
        }
    }
    result = m * count // 결과는 당첨금에 횟수를 곱한다.
    console.log(`총 당첨횟수 ${count}, 총 당첨금은 ${result}원 입니다.`)
}

question(4, 10000);
// JS는 언제나 어렵다.. 머리에서는 바로 출력이 안되고, 구글링이나 다른데서 따와서 짜깁기..
// 언제쯤 머리에서 파바박! 하며 나올까.. ㅠㅠ