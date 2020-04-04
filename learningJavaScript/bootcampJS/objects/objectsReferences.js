//JavaScript is always pass by value, but the value of objects are references to the data in memory. 
//Changing the value of a variable never changes the value of the primitive or object itself, but simply the variable now is reassigned a reference to new data. 
//Changing the property of an object, however, goes to the object in memory(by accessing the value of the variable that is the reference) and changes the property of the object in memory.


function f(a,b,c) {
    // Argument a is re-assigned to a new value.
    // The object or primitive referenced by the original a is unchanged.
    //the local argument a has just been reassigned.
    a = 3;
    // Calling b.push changes its properties - it adds
    // a new property b[b.length] with the value "foo".
    // So the object referenced by b has been changed.
    b.push("foo");
    // The "first" property of argument c has been changed.
    // So the object referenced by c has been changed (unless c is a primitive)
    c.first = false;
}

var x = 4;
var y = ["eeny", "miny", "mo"];
var z = {first: true};
f(x,y,z);
console.log(x, y, z.first); // 4, ["eeny", "miny", "mo", "foo"], false