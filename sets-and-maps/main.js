// // // create an empty set
// // // Create a set containing 0 to 10 using loop
// // // Remove an element from a set
// // // Clear a set
// // // Create a set of 5 string elements from array
// // // Create a map of countries and number of characters of a country


// // const countries = ['Finland', 'Sweden', 'Norway']

// // const newSet = new Set()
// // let num = 0
// // for(let i=0; i<=10; i++){
// //     newSet.add(num)
// //     num++
// // }


// // newSet.delete(10)
// // newSet.clear()
// // console.log(newSet)
// // const arr = ['a', 'b', 'c', 'd', 'e']
// // for(let el of arr){
// //     newSet.add(el)
// // }
// // console.log(newSet)

// // const countriesNum = [
// //     ['Finland', 7],
// //     ['Sweden', 6],
// //     ['Norway', 6],
// //     ['Japan', 5],
// //     ['Liberia', 7]
// //   ]
// //   const map = new Map(countriesNum)
// //   console.log(map)
// //   console.log(map.size)

// // //   Find a union b
// // //   Find a intersection b
// // //   Find a with b

// // const a = [4, 5, 8, 9]
// // const b = [3, 4, 5, 7]

// // let c = [...a,...b]
// // let A = new Set(a)
// // let B = new Set(b)
// // let C = new Set(c)
// // console.log(C)

// // C = a.filter((num) => B.has(num))




// // let i = 5
// // console.log(i)

// // while(i>6){
    
// //     i--;

// // }

// const numberList = [1,4,8,6,12];

// for(let i=0; i< numberList.length; i++){
//     console.log(numberList[i]*2)
// }

// for(let num in numberList){
//     console.log(numberList[num]*2)
// }

// const soldier = {
//     name:"Adekunle",
//     surname: "Olu",
//     nationality: "Nigerian",
//     weapon: "catapult",
//     skills: "sleeping",

// }



// for(let key in soldier){
//     console.log(soldier[key])
// }

const testArr = [2,4,1,5,7,8,9,6]
const newArr = []

// for(let i = 0; i< testArr.length; i++){
//     if(testArr[i]%2 === 0){
//         newArr.push(testArr[i])
//     }
// }

// console.log(newArr)

// for(let el in testArr){
//     if(testArr[el]%2 === 0){
//         newArr.push(testArr[el])
//     }
// }

// console.log(newArr)

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw new Error('Required') 
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()