
function acceptsTwo(value: 2) { /* ... */ }

acceptsTwo(2);   // Works!
acceptsTwo(3);   // Error!
acceptsTwo("2"); // Error!

//Powerful in combination with Union Type
function getColor(name: "success" | "warning" | "danger") {
    switch (name) {
        case "success": return "green";
        case "warning": return "yellow";
        case "danger" : return "red";
    }
}

getColor("success"); // Works!
getColor("danger");  // Works!
getColor("error");   // Error!