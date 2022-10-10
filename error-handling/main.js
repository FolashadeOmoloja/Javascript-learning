function addTwoNums(a,b){
    try{
        if(typeof(a) !== 'number'){
            throw new ReferenceError("the first argument is not a number")
        } else if(typeof(b) !== 'number'){
            throw new ReferenceError("the second argument is not a number")
        } else{
            console.log(a+b)
        }
    } 
    catch(err){
        console.log("Error!", err)
    }
    finally{
        console.log("It still works")
    }
} 

addTwoNums("5",5)

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }