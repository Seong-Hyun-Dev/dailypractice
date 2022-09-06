// 문제파악 실패...
function solution(priorities, location) {
    let tmpArr = [...priorities];
    let tfArr = new Array(priorities.length).fill(true);
    let newArr = [];
    let loopCount = priorities.length;
    let biggestValue = 0;
    let biggestValueIndex = 0;
    while(loopCount--){
        // console.log(tmpArr);
        // * 배열에서 가장 큰 값 찾아서 제거 및 배열 출력
        // ** 배열에서 가장 큰 값 찾아서 값과 인덱스를 저장
        for(let i=tmpArr.length; i>=0; i--){ // *** 배열의 크기만큼 루프를 돈다.
            if(tfArr[i] && tmpArr[i]>biggestValue){ // *** 임시변수에 가장 큰 값을 저장한다.
                biggestValue = tmpArr[i]; // *** 남겨진 배열에서 가장 큰 값을 저장한다.
                biggestValueIndex = i; // *** 남겨진 배열에서 가장 큰 값의 인덱스를 저장한다.
            }
        }
        // ** 새로운 배열에 인덱스를 저장 - 문제점 : 새로운 배열이 만들어지기 때문에, 인덱스가 보존되지 않는다.
        newArr.push(biggestValueIndex);
        // ** 배열에서 가장 큰 값을 제거하는 대신 true/false배열에 저장
        // *** 새로운 배열에 저장된 인덱스는 false로 바꿔서 false인 경우에는 순회를 하지 않는다
        tfArr[biggestValueIndex] = false;
        
        // * 배열의 크기가 0이면 종료, 아니라면 변수 초기화
        if(loopCount === 0){
            break;
        }
        else{
            biggestValue = 0;
            biggestValueIndex = 0;
        }
    }
    
    console.log(newArr);
}