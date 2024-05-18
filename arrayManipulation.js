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

// Task 2
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

//var inputArray = [1, 2, 3, 4, 5];
// var processedArray = processArray(inputArray);
// var inputStrings = ["apple", "banana", "orange", "grape", "melon"];
// var modifiedStrings = formatArrayStrings(inputStrings, processedArray);
// console.log(modifiedStrings);


// task 3
function createUserProfile(names,modifiedNames) {
    var userProfile = [];

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var modifiedName = modifiedNames[i];
    
    var userProfile ={
        originalName : name ,

        modifiedName :modifiedName,
        id: i + 1
        }
        
        userProfiles.push(userProfile);
    }
    return userProfiles;
}
// e.g
// var name = ["john","Alice" ,Bobbie "TroY"];
// var modifiedName = ["JOHN,"Alice","BOBBIE",TROY"];
// var profile = createUserProfiles(names,modifiedNames);
// console.log(profiles);