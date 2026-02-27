// scope difference
function testScope() {
    if (true) {
        var x = "100";   
        let y = "200";   
        const z = "300"; 
        console.log("Inside block:");
        console.log(x); 
        console.log(y); 
        console.log(z); 
    }

    console.log("Outside block:");
    console.log(x); 
}

testScope();