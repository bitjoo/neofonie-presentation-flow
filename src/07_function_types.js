
function concat(a: string, b: string): string {
    return a + b;
}

concat("foo", "bar"); // Works!
concat(true, false);  // Error!



//function types for callback
function method(callback: (error: Error | null, value: string | null) => void) {
    // ...
}