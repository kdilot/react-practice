// import axios from 'axios';
import files from 'redux/asset/menu.json';

const ApiMenu = async () => {
  return (
    await Object.keys(files)
  )
}
const ApiProduct = async (category) => {
  return (
    await category ? files[category] : files[Object.keys(files)[0]]
  )
}
const ApiMarketList = async () => {
  const keys = Object.keys(files)
  const arr = []
  keys.map(m => files[m].map(child => arr.push(child)))
  return (
    await arr
  )
}
const ApiMarketPrice = async (number) => {
  const arr = []
  for (let i = 0; i < number; i++) {
    const random = await Number(Math.floor((Math.random() * number)))
    if (arr.indexOf(random) !== -1)
      await --i
    else {
      await arr.push(random)
    }
  }
  return (
    await arr
  )
}

export {
  ApiMenu,
  ApiProduct,
  ApiMarketList,
  ApiMarketPrice
}