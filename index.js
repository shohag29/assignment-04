//  1.checkDataTypes Start 

function checkDataTypes(sh1, sh2, sh3) {
    console.log(typeof (sh1));
    console.log(typeof (sh2));
    console.log(typeof (sh3));
}
checkDataTypes(true)

//  1.checkDataTypes Close

// 2.checkLeapYear Here 

function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(year + "is a Leap Year")
    } else if (year % 400 == 0) {
        console.log(year + " is a Leap Year")
    } else {
        console.log(year + " is not a Leap Year")
    }
}
checkLeapYear();

// 2.checkLeapYear Close

// 4.findLargest Here

function findLargest(sh1, sh2, sh3,) {
    if (sh1 > sh2 && sh1 > sh3) {
        console.log("Is a bigest number")
    }
    else if (sh2 > sh3) {
        console.log("Is a bigest number")
    }
    else {
        console.log("Is a bigest number")
    }
}
findLargest()

// 4.findLargest Close
