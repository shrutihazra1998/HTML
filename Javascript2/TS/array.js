var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr1 = [12, 34, 5];
var arr2 = [4, 7, 8];
var arr3 = __spreadArrays(arr1, arr2);
for (var _i = 0, arr3_1 = arr3; _i < arr3_1.length; _i++) {
    var i = arr3_1[_i];
    console.log(i);
}
var stud = { name: "Riya", age: 9 };
var details = { hobby: 'Singing', city: 'Kol' };
var newstud = __assign({}, stud);
console.log(newstud);
for (var j in newstud) {
    console.log(j, newstud[j]);
}
