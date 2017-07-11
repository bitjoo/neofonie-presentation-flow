
//syntax
var obj: { foo: boolean } = { foo: true };

//sealed
var obj = {
    foo: 1
};

obj.bar = true;    // Error!
obj.baz = 'three'; // Error!


//unsealed
var obj = {};

obj.foo = 1;       // Works!
obj.bar = true;    // Works!
obj.baz = 'three'; // Works!


//exact object types

//width subtyping
function method(obj: { foo: string }) {
    // ...
}

method({
    foo: "test", // Works!
    bar: 42      // Works!
});

//exact
var foo: {| foo: string |} = { foo: "Hello" }; // Works!
var foo: {| foo: string |} = { foo: "Hello", bar: "World!" }; // Error!