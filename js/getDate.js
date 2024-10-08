// export { months } = require("../data/data");
import { months } from "../data/data.js";

const getMonthInt = (test) => {
  for (let index = 0; index < months.length; index++) {
    if (test.includes(months[index])) {
      if (index === 9 || index === 10 || index === 11) {
        return `${index + 1}`;
      }
      return `0${index + 1}`;
    }
  }
};

const getDayInt = (test) => {
  let testArray = test.split(" ");
  let dayInt = testArray[testArray.length - 1];
  if (dayInt > 9) {
    return dayInt;
  } else {
    return `0${dayInt}`;
  }
};

const getYearInt = (test) => {
  if (test != undefined) {
    let testArray = test.split(" ");
    return testArray[1];
  }
};

export const getDate = async (calenderString) => {
  let monthInt = await getMonthInt(calenderString[1]);
  let dayInt = await getDayInt(calenderString[1]); //! fix exceptions??
  let yearInt = await getYearInt(calenderString[2]); //! fix undefined
  // return `${monthInt}/${dayInt}/${yearInt}`; //* MM/DD/YYYY
  let date = new Date(`${yearInt}-${monthInt}-${Number(dayInt)}`);
  if (date) {
    // console.log(date);
    return date;
  }
};

// module.exports = { getMonthInt, getDayInt, getYearInt, getDate };
