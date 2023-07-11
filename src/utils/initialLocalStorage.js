import { getDate } from "./getDate.js"


const createLocalStorage = () => {

  const todayDate = getDate()

  const data = {
    id: todayDate,
    games: {
      classic: [],
      skill: [],
      quote: []
    },
    isCacheCleared: false
  }

  return data
}

export {
  createLocalStorage
}