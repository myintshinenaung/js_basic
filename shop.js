const fruits = {
    apple : 100,
    orange : 120,
    mango : 200,
    banana : 30
}
const records = [];
let total = 0;

function tax(cost,taxRate = 5){
    return cost*(taxRate/100)
}


function buy(foodsName,count){
    let result = fruits[foodsName] * count;
    let acualCost = result + tax(result)
    const recordObj = {
        foodsName : foodsName,
        count : count ,
        total : result + " MMK"
    }
    records[records.length] = recordObj
    total += result;
    // return foodsName +" : "+ count +" : "  +result + " MMK"
    return `${foodsName} : ${count} = ${result} MMK`;
}
console.log(buy("apple", 2));
console.log(buy("orange", 5));
console.log(buy("mango", 3));
console. log(buy("banana",10))

console. log("Total : " + total + " MMK")
console. log("Total tax : " + tax(total) + " MMK")
console. log("Net total : " + (total+tax(total)) + " MMK")

console. log(records)