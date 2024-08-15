const fs = require('fs');


// what info do we need? Should we make the events objects and use . notation to get it, or just send info over one at a time? Could send over an array of objects.

//import the data, just doing a test for now
let data = `"Subject","Start Date","End Date","All Day Event","Description"`

const writeToFile = (data) => {
  fs.writeFile('calendar.csv', data, (err) => { err
    ? console.error(err)
    : console.log('calendar.csv has been generated!')
  })
}

writeToFile(data)