//Taking input from user
const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//Reading inout from user
readl.question("Enter any number from 0-6: ", (number) => {
    
        //Printing Day according to number
        if (number == 0) {
            console.log("Sunday");
        }else if (number == 1) {
            console.log("Monday");
        }else if (number == 2) {
            console.log("Tuesday");
        }else if (number == 3) {
            console.log("Wednesday");
        }else if (number == 4) {
            console.log("Thursday");
        }else if (number == 5) {
            console.log("Friday");
        }else if (number == 6) {
            console.log("Saturday");
        }else {
            console.log("Entered wrong input!")
        }

    readl.close();
});
