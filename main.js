var faveShows = [];
for (var i = 0; i < 4; i++) {
    var userInput = prompt('What is your # ' + (i + 1) + ' favorite show?');
    faveShows.push(userInput)
}
faveShows.forEach(function (arrayElement) {
    console.log(arrayElement.toLowerCase())
}

var arrayLogger = function(arr) {
    for (var i = 0; i < arr.length; i++) 
    { console.log(arr[i])
    } console.log('*********')
} 