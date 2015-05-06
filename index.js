// index.js
function _once (func) {
    var invoked = false;
    var result;
    function inneronce () {
        if (!invoked) {
            invoked = true;
            result = func();
            return result;
        }
        return result;
    }
    return inneronce;
}

function _memoize (func1, func2) {
    var cache = {};
    return function (arg){
        var key = arg;
        if (func2){
            key = func2(arg);
        }
        if (cache.hasOwnProperty(key)){
            return cache[key];
        }
        cache[key] = func1(arr);
        return cache[key];
    };
}

function _bind (func, argv){
    return function(){
        return func.apply(argv);
    };
}

var _ = {
  // ...
  once: _once,
  memoize: _memoize,
  bind: _bind
};

module.exports = _;
