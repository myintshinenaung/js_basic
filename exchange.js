const rates = {
    usd : 2100,
    sgd : 1490,
    eur : 2108
}
// //from usd to MMK
// function usdToMMK(inputUSD) {
//     return (inputUSD * rates.usd) + " MMK"
// }
// //from MMK to any currency
// function toMMK(inputAmount , fromCurrency) {
//     return (inputAmount * rates[fromCurrency]) + " MMK"
// }
// //from any currency to MMK
// function toCurrency(inputMMK,currency) {
//     return (inputMMK / rates[currency]) + currency;
// }

// function toAnyCurrency(inputAmount,fromCurrency,toCurrency) {
//     let mmk = inputAmount * rates[fromCurrency];
//     let result = mmk / rates[toCurrency] ;
//     return result + toCurrency;
// }

// console.log(toAnyCurrency(200, "usd", "eur"));
// console.log(toAnyCurrency(1, "usd", "usd"));
// // console. log(toCurrency(650000,"usd"))
// // console. log(toCurrency(650000,"eur"))
// // console.log(toCurrency(650000, "sgd"));
// // // console. log(usdToMMK(1000))
// // console.log(toMMK(500, "usd"));
// // console.log(toMMK(500, "sgd"));
// // console.log(toMMK(500, "eur"));
function toCurrency(inputMMk,currency){
    return ( inputMMk /rates[currency]) + currency
}
console. log(toCurrency(2000,"eur"))


// function toMMK(inputAmount ,Currency) {
//     return (inputAmount * rates[Currency]) + " MMK"
// }
// console. log(toMMK(5,"eur"))































