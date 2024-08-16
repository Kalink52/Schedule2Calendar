import { ICalendar } from "datebook";
import { getDate } from "./js/getDate.js";
import { calender } from "./data/data.js";
import { writeFile } from "node:fs";

// const icalender = new ICalendar();

const init = async () => {
  let eventList = calender.split("\n");
  let result = "";
  let description = "";
  const calendarObject = {};
  const calendarList = [];
  let year = [];
  let nextDate = new Date();

  // init calender
  let Calender = new ICalendar({
    isAllDay: true,
    start: new Date("2024-08-20"),
    description: "NO SCHOOOOOOOOOOOL",
    title: "NO SCHOOL",
  });

  for (let index = 0; index < eventList.length; index++) {
    if (eventList[index].includes("NO SCHOOL")) {
      let dateList = eventList[index].split(",");
      let date = await getDate(dateList);
      console.log(date);
      if (date != "Invalid Date") {
        //?  ical npm uses START as the END date so Date +1
        let newEvent = new ICalendar({
          isAllDay: true,
          start: new Date(date),
          description: `Kids NO SCHOOL`,
          title: "Kids NO SCHOOL",
        });
        console.log(date);
        Calender.addEvent(newEvent);
      }
    }

    if (eventList[index].includes("Half-Day")) {
      let dateList = eventList[index].split(",");
      let date = await getDate(dateList);
      console.log(date);

      if (date != "Invalid Date") {
        //?  ical npm uses START as the END date so Date +1
        let newEvent = new ICalendar({
          isAllDay: true,
          start: new Date(date),
          description: `Half-Day Release Times:
          Acres/Sutton = 1:45
          TMS = 12:45
          THS = 12:35`,
          title: "HALF DAY",
        });
        console.log(date);
        Calender.addEvent(newEvent);
      }
    }
  }
  writeFile("schedule.ical", Calender.render(), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("The file has been saved");
  });
};

const calenderTesting = async () => {
  let Calender = new ICalendar({
    isAllDay: true,
    start: new Date("2024-01-08"),
    description: "NO SCHOOOOOOOOOOOL",
    title: "NO SCHOOL",
  });

  let newEvent = new ICalendar({
    isAllDay: true,
    start: new Date("2024-01-08"),
    description: `Half-Day Release Times:
      Acres/Sutton = 1:45
      TMS = 12:45
      THS = 12:35`,
    title: "HALF DAY",
  });
  Calender.addEvent(newEvent);

  writeFile("schedule.ical", Calender.render(), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("The file has been saved");
  });
};
init();
