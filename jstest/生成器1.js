function  *f(){
    var x= yield 1;
    var y= yield 2;
}
function *g () {
    var a = yield 3;
    yield *f();
    var b = yield 4;
}
for(let v of g()){
    console.log(v)
}


console.log('-------------------------------')


function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
a.next()
a.next()
a.next()

var b = foo(5);
b.next()
b.next(12)
b.next(13)

