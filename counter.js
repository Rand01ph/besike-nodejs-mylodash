function makeCounter(n) {
    var value = n;
    function increment(){
        value += 1;
        return value;
    }
    function decrement(){
        value -= 1;
        return value;
    }
    return [increment, decrement];
}
