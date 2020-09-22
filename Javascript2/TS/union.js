var printVal = function (val) {
    if (typeof (val) == 'string') {
        console.log('welcome' + val);
    }
    if (typeof (val) == 'number') {
        console.log('your score:' + val);
    }
};
printVal('Shruti');
printVal(10);
