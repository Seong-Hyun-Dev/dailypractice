// 1.문제분석 
//  1)문제를 논리적 최소단위로 분해
//  2)프로세스 정의 + 예외사항 체크
//  3)예외사항 정의
// 2.프로그래밍


// 필요한 정보 : ( // 공백문자 : 32 // 대문자 A : 65 / Z : 90 // 소문자 a : 97 / z : 122 )
function solution(s, n) {
    //문자열을 배열로 변환
    let tmpArr = [...s];
    // 유니코드로 변환
    tmpArr = tmpArr.map(chr=>chr.charCodeAt(0));
    // 예외사항 3가지
    //  예외1) 유니코드가 32이면 유니코드 덧셈 nono
    //  예외2) 대소문자 일때 처리 => 두가지 경우 : 대문자일때 예외 / 소문자일때 예외 
    let dividedNum;
    tmpArr.map((uniValue)=>{
        // 하드코딩
        if(65<=uniValue&&uniValue<=90){
            dividedNum = uniValue + n;
            if(dividedNum > 90) return ((dividedNum-90) % 26) + 64;
            else return dividedNum;
        } else if(97<=uniValue&&uniValue<=122){
            dividedNum = uniValue + n;
            if(dividedNum > 122) return ((dividedNum-122) % 26) + 96;
            else return dividedNum;
        }
    })
    
    return tmpArr.map(v=>{
        return String.fromCharCode(v);
    })
}