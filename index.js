const sumRange = (a, b) => {
    const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    if (!arr.includes(a) && !arr.includes(b) ) return 0;
    let sum = 0;
    let _a = arr.indexOf(a);
    let _b = arr.indexOf(b) == -1 && b > arr[arr.length - 1] ? arr.length - 1 : arr.indexOf(b);
    if (!isPositive(a) || !isPositive(b)) return -1;
    while (_a <= _b){
        sum = arr[_a] + sum;
        _a++;
    }
    return sum;
}

const isPositive = (x) => {
    return Math.sign(x) == -1 ? false : true;
}


console.log(sumRange(110, 120));

let arr = [5,3,6,3,96,33,78,35, 99, 2];

const max = (x) => {
    if(x == null || x.length == 0) return -1;
    let max = x[0];
    for(let i = 0; i < x.length; i++){
        if (x[i] > max) max = x[i];
    }
    return max;
}




const min = (y) => {
    if(y == null || y.length == 0) return -1; // return if paramter is not given or in an empty array
    let min = y[0]; // set first value as the lowest before looping (Starting point)
    for(let j = 0; j < y.length; j++){ 
        if (y[j] < min) min = y[j]; // set the next lower value as the current lowest
        console.log(min);
        
    }
    return min;


    }

    // console.log(min(arr));
    
