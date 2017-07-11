function getTypeOf(value: mixed): string {
    return typeof value;
}

function stringify(value: mixed) { /* ... */
}

stringify("foo");
stringify(3.14);
stringify(null);
stringify({});


function stringifyError(value: mixed) {
    return "" + value; // Error!
}

//refinement
function stringifyRefinement(value: mixed) {
    if (typeof value === 'string') {
        return "" + value; // Works!
    } else {
        return "";
    }
}
