// Task 1
function processArray(numbers){
var processedArray = [];

for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (num % 2 === 0) {
        processedArray.push(num * num);
    }else{
        processedArray.push(num *3);
    }
 }

 return processedArray;
}

function formatArrayString(strings,numbers) {
    var modifiedString = [];

    for (var i = 0; i < strings.length; i++) {
        var str  = strings[i];
        var num = numbers[i];

        if (num % 2 === 0) {
        modifiedString.push(str.toUpperCase());  
    }
    else{
        modifiedString.push(str.toLowerCase());
    }
}
    return modifiedString;
}