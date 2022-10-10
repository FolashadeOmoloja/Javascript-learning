/* -------------------------------------------------  LEVEL 1  ------------------------------------------------- */
//1.Declare a function fullName and it print out your full name.
function fullName(){
    console.log('shades')
}


//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function Name(firstName,lastName){
//     let fullName = `My name is ${firstName} ${lastName[0]}.`;
//     return fullName;
// }

// alert(Name(prompt("enter first name"), prompt('enter your last name')));


//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a,b){
 let sum = a +b;
 return sum;
}

console.log(addNumbers(2,5))


//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
/* ARROW FUNCTION */
let Area = (length,width) => {
    let result = length * width;
    return result;
}

console.log(Area(10,20));

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width){
    let perimeter = 2 * (length +width);
    return perimeter;
}

console.log(perimeterOfRectangle(2,3));

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
let volumeOfRectPrism = (length ,width,height) =>{
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(3,2,5))

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
let areaOfCircle = (raduis)=> {
    let result = Math.PI * raduis * raduis;
    return result;
}
console.log(areaOfCircle(5));

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function  circumOfCircle(raduis){
    let result= Math.round(2 * Math.PI * raduis);
    return result;
}
console.log(circumOfCircle(10))

//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = function(mass,volume) {
let result = mass/volume;
return result;
}
console.log(density(2000,20))

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
let speed = (totalDistance, totalTime) =>{
let result = totalDistance/ totalTime;
return result;
}
console.log(speed(2000,360))

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
let weight = (mass,gravity= 9.81)=>{
    let result = Math.round(mass * gravity);
    return result;

}
console.log(`${weight(100)}KN`);

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
let convertCelciusToFahrenheit= (celcuis)=>{
    let Fahrenheit =(celcuis * (9/5)) + 15;
    return Fahrenheit;
}
console.log(`${convertCelciusToFahrenheit(17)}oF`)


/*13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

let BMI = (weight,height) =>{
    let bmiFormula = weight/ (height*height);
    if(bmiFormula< 18.5){
        let response=  ` Your BMI is ${ bmiFormula}kg/m2, you are underweight`
        return response;
    } else if(bmiFormula >=18.5 && bmiFormula<=24.9){
        let response=  ` Your BMI is ${ bmiFormula}kg/m2, you have a normal weight`
        return response;
    }   else if(bmiFormula >=25 && bmiFormula<=29.9){
        let response=  ` Your BMI is ${ bmiFormula}kg/m2, you are overweight`
        return response;
    } else{
        let response=  ` Your BMI is ${ bmiFormula}kg/m2, you are obese`
        return response;
    }
}

console.log(BMI(30000,40));


//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
//  let checkSeason = (month) =>{
     

// // switch(true){
// //     case month=="september"||month=="october"||month=="november":
// //         alert("the season is Autumn")
// //         break;
// //     case month=="december"||month=="january"||month=="february":
// //         alert('the season is Winter')
// //         break;
// //     case month=="march"|| month=="april"|| month=="may":
// //              alert('the season is Spring')
// //         break;
// //     case month=="june"|| month=="july"|| month=="august":
// //         alert('the season is Summer')
// //        break;
// //     default:
// //         alert('This is not a month')
// // }
// //  }

// //  checkSeason((prompt('enter the month')).toLowerCase())




//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a,b,c){
    if (a>b && a>c){
        return a;
    } else if (b>a && b>c ){
        return b;
    } else if(c>a && c>b){
        return c;
    }
}

/* -------------------------------------------------  LEVEL 1  ------------------------------------------------- */



/* -------------------------------------------------  LEVEL 2  ------------------------------------------------- */

//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// let linearEquation = (a,b,c,d,e,f) =>{
//     let firstEquation = `${a}x + ${b}y + ${c} = 0`;
//     let secondEquation = `${d}x + ${e}y + ${f} = 0`;
//     console.log(firstEquation);
//     console.log(secondEquation);

   
//        /*
//        dx = -(f +ey)
//        x = (-(f+ey))/d
//       (-(af+aey))/d + by + c =0
//       (-(af+aey)) +bdy +c=0
//        -af-aey +bdy +c=0
//        -aey+bdy= -c +af
//        y(bd -ae)= af-c
//        y=(af-c)/(bd-ae)
     
//        dx= -f -ey
//        dx = -f -e ((af-c)/(bd-ae))
//        dx= -f - (eaf-ec)/(bd-ae)
//        dx= -f(bd -ae) - (eaf -ec)
//        x= (-fbd +fae -eaf +ec)/d
//        */
//     let y=((a*f)-(c))/((b*d)-(a*e));
//     let x =  ((-f*b*d) +(f*a*e) -(e*a*f) +(e*c))/(d);
//     let result =` Result : x=${x} and y= ${y}`
//     return result
    

// }

// console.log(linearEquation(parseInt(prompt('enter value -a')),parseInt(prompt('enter value- b')),parseInt(prompt('enter value- c')),parseInt(prompt('enter value-d')),
// parseInt(prompt('enter value-e')), parseInt(prompt('enter value-f'))));





/* -------------------------------------------------  LEVEL 2  ------------------------------------------------- */







/* -------------------------------------------------  LEVEL 3  ------------------------------------------------- */

//1.  userIdGeneratedByUser takes two inputs using prompt().input-number of characters , the second input is  be generated.

/*
function userIdGeneratedByUser(idLength,numOfId){
    for(let jj=0; jj < numOfId ; jj++){ //first loop to loop diff passwords
        let numbers;
        let letters='abcdwfghijklmnopqrstuvwxyz'.split('')//split turns it to an array
        let id;
        let idArrayForm=[];
        
        for(let ii=1; ii<= idLength; ii++){
            let letterOrNumber= Math.floor(Math.random()*2);
            let letterIndex= Math.floor(Math.random()*letters.length);
            numbers= Math.floor(Math.random()*10)
            if(letterOrNumber===0){
                idArrayForm.push(numbers);
            }
            else{
                idArrayForm.push(letters[letterIndex]);
            }
        id= idArrayForm.join('')
        
       
     
        }
    
       console.log(id)
    }
 
}

userIdGeneratedByUser(parseInt(prompt('Enter id lenght')), parseInt(prompt('How many ids do you want')))
*/


