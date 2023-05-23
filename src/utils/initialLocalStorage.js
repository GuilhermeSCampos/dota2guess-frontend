import { getDate } from "./getDate.js"


const createLocalStorage = () => {

  const todayDate = getDate()

  const data = {
    id: todayDate,
    games: {
      classic: {
        tries: []
      },
      skill: {
        tries: []
      },
      quote: {
        tries: []
      }
    }
  }

  return data
}

export {
  createLocalStorage
}