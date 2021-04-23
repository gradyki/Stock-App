export const dateFormat = (date) => {

  let converted = null
  let year = date.substr(0, 4) *1
  let month = date.substr(5, 2) *1
  let day = date.substr(8, 2) *1

  

  if (day ===1 && month === 1) {
    year -= 1
    month = 12
    day = 31
  } else if (
    day === 1 && month === 5 || month === 7 || month === 10 || month === 12
  ) {
    day = 30
    month -= 1
  } else if (day === 1) {
    day = 31
    month -=1
  } else if (day >1){
    day -= 1
  }

  if (day < 10) {
    day = `0${day}`
  
  }

  if (month < 10) {
    month =`0${month}`
  }

  converted = `${year}-${month}-${day}`
  return converted

}