var obj = { a: 1 },
    handlers = {
        get(target,key,context) {
// 注意：target === obj,
// context === pobj
            console.log( "accessing: ", key );
            return Reflect.get(
            target, key, context
        );
        }
    },
    pobj = new Proxy( obj, handlers );
console.log(obj.a)
console.log(pobj.a)