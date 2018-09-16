let x = [-3,5,1,3,2,10];
let value = 1;
for(var i = 0; i < x.length; i++){
    if(value === x[i]){
        console.log("Value " + x[i] + " found at " + i);
    }
}