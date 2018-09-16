let x = [-3,5,1,3,2,10];
let value = 1;
let max = x[0];
let index = 0;

function searchinArr() {
    for(var i = 0; i < x.length; i++){
        if(value === x[i]){
            console.log("Value " + x[i] + " found at " + i);
        }
    }
}

function searchBig() {
    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
            index = i;
        }
    }
    console.log("max: " + max + " at position " + index);
}