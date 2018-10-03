var Big1;
var Big2;

function large(Arr){
    if (Arr.length == 0 || Arr.length == 1)
        return "none";


    if (Arr[0] > Arr[1]){
        Big1 = Arr[0];
        Big2 = Arr[1];
    } else {
        Big1 = Arr[1];
        Big2 = Arr[0];
    }

    for (var i=2; i<Arr.length; i++){
        if (Arr[i] > Big1){
            Big2 = Big1;
            Big1 = Arr[i];
            continue;
        }

        if (Arr[i] > Big2){
            Big2 = Arr[i];
        }
    }

    return(Big2);
}

var Arr = [1, 3, 4, 5, 0, 2];

console.log(large(Arr));
