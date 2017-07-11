
function acceptsNull(value: null) {
    /* ... */
}

function acceptsUndefined(value: void) {
    /* ... */
}

acceptsNull(null);      // Works!
acceptsNull(undefined); // Error!
acceptsUndefined(null);      // Error!
acceptsUndefined(undefined); // Works!