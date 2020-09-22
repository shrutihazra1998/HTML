function sumof() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var sum = 0;
    array.forEach(function (i) { sum += i; });
    console.log("sum of the numbers", sum);
}
sumof(1, 2, 3);
sumof(10, 10, 10, 10, 10);
