function reverse(arr) {
    var reversed = [];
    for (var i = arr.length-1 ; i>=0 ; i--) {
        reversed.push(arr[i]);
    }
    return reversed;   
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]