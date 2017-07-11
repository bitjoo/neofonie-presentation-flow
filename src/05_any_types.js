
/*
 * SHOULD BE AVOIDED WHENEVER POSSIBLE
 */

function add(one: any, two: any): number {
    return one + two;
}

add(1, 2);     // Works.
add("1", "2"); // Works.
add({}, []);   // Works.


//RuntimeError
function getNestedProperty(obj: any) {
    return obj.foo.bar.baz;
}

getNestedProperty({}); //Works.