function* foo(x) {
    var y = 2 * ((yield x + 1));
    // yield y = 2 * ((x + 1));

    var z = yield (y / 3);
    // yield z =  (y / 3);

    return (x + y + z);
}

var a = foo(5);
console.log(a.next(),a.next(),a.next())