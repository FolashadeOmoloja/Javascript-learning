const countries = new Set()
console.log(countries)

const languages = [
    'English',
    'Finnish',
    'Yoruba',
    'French',
    'Spanish',
    'English',
    'Germany',
  ]
  const langSet = new Set(languages)
  console.log(langSet)

  
const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)