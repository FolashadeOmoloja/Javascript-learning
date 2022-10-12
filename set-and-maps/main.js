// const countries = new Set()
// console.log(countries)

// const languages = [
//     'English',
//     'Finnish',
//     'Yoruba',
//     'French',
//     'Spanish',
//     'English',
//     'Germany',
//   ]
//   const langSet = new Set(languages)
//   console.log(langSet)

  
// const counts = []
// const count = {}

// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l)
//   console.log(filteredLang) // ["English", "English", "English"]
//   counts.push({ lang: l, count: filteredLang.length })
// }
// console.log(counts)


const arr = [2,5,6,7,8]
 const newArr = []

 let i = 0
 while(i<arr.length){
   newArr.push((i * 3))
   i++
  }
  console.log(newArr)