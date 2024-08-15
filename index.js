const { calender, months } = require("./data/data");
const { getMonthInt, getDayInt, getYearInt, getDate } = require("./js/getDate");

const init = async () => {
  eventList = calender.split("\n");

  const calendarObject = {};
  const calendarList = [];

  for (let index = 0; index < eventList.length; index++) {
    if (
      eventList[index].includes("NO SCHOOL") ||
      eventList[index].includes("Half-Day")
    ) {
      let dateList = eventList[index].split(",");
      let date = await getDate(dateList);
      console.log(date);
    }
  }

  // Setting the description, move this into the for loop above so it's not looping twice
  for (let index = 0; index < eventList.length; index++) {
    if (eventList[index].includes("Half-Day")) {
      let description = `Half-Day Release Times:
      Acres/Sutton = 11:45
      TMS = 11:00
      THS = 10:50`;
    } else if (eventList[index].includes("Early Release")) {
      let description = `Half-Day Release Times:
      Acres/Sutton = 1:45
      TMS = 12:45
      THS = 12:35`;
    }
  }

  // console.log(calendarList);
};

init();
