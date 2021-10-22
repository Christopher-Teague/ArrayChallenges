function alwaysHungry(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        var yes = 0;
        if (arr[i] === "food") {
            yes += 1;
            console.log("yummy")
            }
        }
    if (yes == 0) {
    console.log("I'm hungry")
    }
}


alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
