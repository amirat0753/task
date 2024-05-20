function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Example usage
let year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
