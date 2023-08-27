//  1.checkDataTypes Start 

function checkDataTypes(type1, type2, type3) {
    console.log(typeof (type1));
    console.log(typeof (type2));
    console.log(typeof (type3));
}
checkDataTypes()

// //  1.checkDataTypes Close

// // 2.checkLeapYear Here 

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

// 3.evalNumbers Start


// function evalNumbers(num1, num2, oparation) {
//     if (num1, num2, oparation) {
//         console.log(num1 + num2)
//     }
//     else if (num1, num2, oparation) {
//         console.log(num1 - num2)
//     }
// }

// evalNumbers()

// 3.evalNumbers Close

// 4.findLargest Here

function findLargest(num1, num2, num3,) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    }
    else {
        console.log(num3)
    }
}

findLargest()

// 4.findLargest Close




