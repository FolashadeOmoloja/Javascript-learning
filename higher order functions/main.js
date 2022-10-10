const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// // Use forEach to console.log each country in the countries array.
// countries.forEach(country=>{console.log(country)})

// //Use forEach to console.log each name in the names array.
// names.forEach(name=>{console.log(name)})

// //Use forEach to console.log each number in the numbers array.
// numbers.forEach(number=>{console.log(number)})

// //Use forEach to console.log each product price in the numbers array.
// products.forEach(product=>{console.log(product.price)})

// Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map(newCountry => {return newCountry.toUpperCase()});

//Use map to create an array of countries length from countries array.
const countriesLen = countries.map(countryLen => {return countryLen.length});

//Use map to create a new array by changing each number to square in the numbers array
const squareNum = numbers.map(num => {return num*num});

//Use map to change to each name to uppercase in the names array
const newNames = names.map(newName => {return newName.toUpperCase()})

//Use map to map the products array to its corresponding prices.
const productPrices = products.map(productPrice => {return `${productPrice.product} = ${productPrice.price}`})

//Use filter to filter out countries containing land.
const landCountries = countries.filter(country => { return country.toLowerCase().indexOf('land') != -1  })
const landCountry = countries.filter(country => { return country.toLowerCase().includes('land')   })

//Use filter to filter out countries having six character.
const sixChar = countries.filter(country => country.length == 6)

//Use filter to filter out countries containing six letters and more in the country array.
const sixChara   = countries.filter(country => country.length >= 6)

//Use filter to filter out country start with 'E';
const eCountry = countries.filter(country => country[0] == 'E')

//Use filter to filter out only prices with values.
const pricesWithValue = products.filter(  productprice => productprice.price !== '' && productprice.price !== ' ' )

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = arr => arr.filter(n => typeof n === 'string')
    
 //Use reduce to sum all the numbers in the numbers array.
const reduceNumbers = numbers.reduce((sum,num) => sum + num);    

//Use reduce to concatenate all the countries and to produce this sentence: 
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatCont = `Estonia, ${countries.reduce((sum,num) => `${sum}, ${num}`)} are north European countries`

//Use some to check if some names' length greater than seven in names array
const checkNames = names.some(name => name.length > 7);

//Use every to check if all the countries contain the word land
const land = countries.some(land => land.toLowerCase().includes('land'))

//Use find to find the first country containing only six letters in the countries array
const findCountry = countries.find(country => country.length == 6)

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.filter(  productprice => productprice.price !== '' && productprice.price !== ' ' ).map(price => price.price).reduce((arr,curr) => arr + curr)
const totalPriceTwo = products.map(price => price.price).filter(  productprice => productprice !== '' && productprice !== ' ' ).reduce((arr,curr) => arr + curr)

//Find the sum of price of products using only reduce reduce(callback))
const reduceSum = () =>{
    const priceList = []
    for(let i = 0 ; i<products.length ; i++){
        if(typeof products[i].price == "number")
        priceList.push(products[i].price)  
    }
    console.log(priceList.reduce((acc,cur) => acc+cur))
    
}

// TODO: create the dog object here
const dog = {
    name: "Fang", 
    species: 'boarhound',
    size: '75',

    bark() {
        return 'Grrr! Grrr!';
    }
}



console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    circumference() {
        return Math.round(2 * Math.PI * r);
    },
    area() {
        return Math.round(Math.PI * r * r);
    }

}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);





