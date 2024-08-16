import { ICalendar } from "datebook";
import { getDate } from "./js/getDate.js";
import { calender } from "./data/data.js";

const init = async () => {
  let eventList = calender.split("\n");
  let result = "";
  let description = "";
  const calendarObject = {};
  const calendarList = [];

  for (let index = 0; index < eventList.length; index++) {
    if (eventList[index].includes("NO SCHOOL")) {
      let dateList = eventList[index].split(",");
      let date = await getDate(dateList);
      console.log(date);
      description = `Kids NO SCHOOL`;
    }

    if (eventList[index].includes("Half-Day")) {
      let dateList = eventList[index].split(",");
      let date = await getDate(dateList);
      console.log(date);
      description = `Half-Day Release Times:
      Acres/Sutton = 1:45
      TMS = 12:45
      THS = 12:35`;
    }
  }
};

init();
