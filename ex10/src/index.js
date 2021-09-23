// Only change code below this line
    
function mySplice(arr1, arr2, n) {
    var newArr1 = arr2.slice();
    var newArr2 = arr1.slice();
    newArr1.splice(n, 0, ...newArr2.reverse());
    return newArr1;
}

// Only change code above this line


console.log(mySplice(['b','c'],['a','d'], 1));     // Change this line
module.exports = mySplice;