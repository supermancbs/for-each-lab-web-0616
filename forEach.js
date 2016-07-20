function iterativeLog(arr) {
  arr.forEach((element, index, array) => {
      console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  arr = [1, 2, 3]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
