const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readl.question("Enter any year: ", (year) => {
    
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }

    readl.close();
  });
