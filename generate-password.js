// define sample function to randomly return an item in array
function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// define generatePassword function
function generatePassword(options) {
  console.log('This function will generate password')

  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data    ，測試好之後記得刪除
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }
  // console.log('options', options)

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    // collection = collection.filter((character) => {           記得最初還是要把 collection = 加上
    // if (options.excludeCharacters.includes(character)) {      括號內的結果由於是 Boolean 可再簡化
    //   return false                                            return false 代表剔除 (.filter 內)
    // }
    // return true                                               return true 代表保留 (.filter 內)
    // })
    // 可精簡如下：
    collection = collection.filter(character => !options.excludeCharacters.includes(character))
  }

  // return error notice if collection is empty (before password generated)
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  // start generating password
  let password = ''
  for (let i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }

  // return the generated password
  return password
}



// export generatePassword function for other files to use
module.exports = generatePassword