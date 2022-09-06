const arr = [1,1,5,124,400,510,1004,2876,8712];

// function binarySearch(arr,target){
//     let first = 0;
//     let last = arr.length - 1;
//     let mid = Math.floor((first + last) / 2);
//     // 짝수일때 (0+5)/2 = 2.5 = 2
//     //[0,1,*2,3,4,5] 
//     // 홀수일때 (0+6)/2 = 3
//     //[0,1,2,*3,4,5,6] 
//     while(true){
//         if(arr[mid] > arr[target]) {
//             last = mid - 1;
//             mid = Math.floor((first + last)/2);
//         } else if(arr[mid] < arr[target]) {

//         } else {

//         }
//     }
// }

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right)/2);
    while(left < right){
        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid]<target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right)/2);
    }
    return -1;
}