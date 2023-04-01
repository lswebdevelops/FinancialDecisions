// getting values from input
const principal = document.querySelector("#principal")
// console.log(principal.value);
const monthly = document.querySelector("#monthly")
// console.log(monthly.value);
const months = document.querySelector("#months")
// console.log(months.value);
const rate = document.querySelector("#rate")
// console.log(rate.value);

// setting variables for formula for better understanding 
/*
// P(1 + r/n)**nt + PMT * ((1+r/n)**nt -1)/ r/n
where: 
P = Principal
r = rate
n = 12 times a year
t = time invested (in months) 
PMT = addition monthly 

*/
// create numbers:
const P = parseInt(principal.value);
const r = parseFloat(rate.value);
const n = 12;
const t = parseInt(months.value);
const PMT = parseInt(monthly.value);

const CI = P * (1 + (r / n)) ** (n * t/12) + (PMT * ((Math.pow(1 + (r / n), n * t/12) - 1)) / (r / n));
const formattedCI = CI.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
console.log(formattedCI);



  