// // Write a JavaScript program to get the current date.
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy

const today = new Date()
const date = today.getDate()
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const month = monthList[today.getMonth()]
const year = today.getFullYear()

console.log(`${month} - ${date} - ${year}`);
console.log(`${date} - ${month} - ${year}`);
console.log(`${month} / ${date} / ${year}`);
console.log(`${date} / ${month} / ${year}`);

const disTime = document.querySelector('#disTime')
disTime.innerHTML = (`Today is ${month} - ${date} - ${year}`);