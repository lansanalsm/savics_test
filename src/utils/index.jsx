
const getRandomInt = (mini = 1, max = 100) => {
    mini = Math.ceil(mini)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - mini)) + mini
  }


/**
 * Generate a unique value that i am using as a key
 * for react component in order to avoid hardcoding the keys
 * in the component directly
 */
export const generateKey = () => {
    let min = 1
    let max = 1000
    return Date.now() + getRandomInt(min, max) + getRandomInt(min, max) + getRandomInt(min, max)
}

// chekc if a string is empty or not
// this function is more efficient
export const isEmpty = x => (
    x == null ||
    x == undefined ||
    x.length === 0 ||
    x === "" ||
    x == 'undefined' ||
    JSON.stringify(x) === '{}' ||
    x.toString().trim() === ''
  )