
function acceptsOptionalString(value?: string) {
    // ...
}

acceptsOptionalString("bar");     // Works!
acceptsOptionalString(undefined); // Works!
acceptsOptionalString(null);      // Error!
acceptsOptionalString();          // Works!


//ES6 - optional parameters
function acceptsOptionalStringWithDefault(value: string = "foo") {
    // ...
}

acceptsOptionalStringWithDefault("bar");     // Works!
acceptsOptionalStringWithDefault(undefined); // Works!
acceptsOptionalStringWithDefault(null);      // Error!
acceptsOptionalStringWithDefault();          // Works!