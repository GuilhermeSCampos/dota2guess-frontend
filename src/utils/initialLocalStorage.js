import { getDate } from "./getDate.js"


const createLocalStorage = () => {

  const todayDate = getDate()

  const data = {
    id: todayDate,
    games: {
      classic: [],
      skill: [],
      quote: []
    }
  }

  return data
}

export {
  createLocalStorage
}