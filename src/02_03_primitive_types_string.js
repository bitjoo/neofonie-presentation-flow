
function acceptsString(value: string) {
    // ...
}

acceptsString("foo"); // Works!
acceptsString(false); // Error!

acceptsString("foo" + "foo"); // Works!
acceptsString("foo" + 42);    // Works!

acceptsString("foo" + {});    // Error!
acceptsString("foo" + []);    // Error!

acceptsString("foo" + String({}));     // Works!
acceptsString("foo" + [].toString());  // Works!
acceptsString(JSON.stringify({})); // Works!