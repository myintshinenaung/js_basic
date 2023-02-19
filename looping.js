// for(let i = 1; i <= 10; i++){
//     if(i === 3) continue;
//     console.log(i,"========");
// }

// // const letters = ["a","b","c","d","e","f"];

// // for(let i = 0; i < letters.length; i++){
// //     console. log("index",i,"---",letters[i])
// // }


// // const marks = [54,68,77,96,40,80];
// // let totalMarks = 0;

// // for(let mark = 0; mark < marks.length; mark++) {
// //     console. log(marks[mark])
// //     totalMarks += marks[mark];
// // }
// // console. log("total : ",totalMarks," mark;")


// // const mgmgInfo = {
// //   name: "mg mg",
// //   age: 15,
// //   marks: [
// //     {
// //       id: 1,
// //       subject : "myanmar",
// //       mark: 54,
// //     },
// //     {
// //       id: 2,
// //       subject : "english",
// //       mark: 74,
// //     },
// //     {
// //       id: 3,
// //       subject : "Math",
// //       mark: 96,
// //     },
// //     {
// //       id: 4,
// //       subject : "chemistry",
// //       mark: 80,
// //     },
// //     {
// //       id: 5,
// //       subject : "physice",
// //       mark: 77,
// //     },
// //     {
// //       id: 6,
// //       subject : "Eco",
// //       mark: 86,
// //     },
// //   ]
// // }
// // //အချက်အလက်တွေထက်ထည့်ဖို့
// // mgmgInfo.totalMark = 0;
// // mgmgInfo.results = {};

// // for(let i = 0; i < mgmgInfo.marks.length; i++) {
// //     console. log(mgmgInfo.marks[i].mark)
// //     //infomation ဖြည့်ဖို့
// //     //totalMarks ရှာတာ
// //     mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
// //     //Pass or Fail စစ်တာ
// //     // mgmgInfo.results[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark >= 40 ? "Sucesses" : "Fail"
// //     //Statement ရေးနည်း
// //     if(mgmgInfo.marks[i].mark >= 40){
// //         mgmgInfo.results[mgmgInfo.marks[i].subject] = "Sucesses"
// //     }else {
// //         mgmgInfo.results[mgmgInfo.marks[i].subject] = "Fail"
// //     }
// // }
// // console. log(mgmgInfo)
// // // console. log(mgmgInfo.marks[0].mark)



// function starGenerator(count,element = "* ") {
//     let star = "";
//     for(let i=1;i<=count;i++){
//         star += element
//     }
//     return star;
// }
// // // console. log(starGenerator(4,"= "))
// // for(let i = 1; i <= 6; i++) {
// //     console. log(starGenerator(i,"= "))
// // }
// // for(let i = 6; i >= 1; i--) {
// //     console. log(starGenerator(i,"= "))
// // }

// for(let i = 1;i<=6;i++){
//     console.log(starGenerator(i, i % 2 === 0 ? "= " : "* "));
// }


// const ratings = [
//   {
//     id: 1,
//     name: "mg mg",
//     rate: 3,
//   },
//   {
//     id: 2,
//     name: "mg mya",
//     rate: 5,
//   },
//   {
//     id: 3,
//     name: "mg hla",
//     rate: 2,
//   },
//   {
//     id: 4,
//     name: "mg aye",
//     rate: 1,
//   },
//   {
//     id: 5,
//     name: "mg win",
//     rate: 4,
//   }
// ];

// for(let i=0;ratings.length;i++){
//     let result = "";
//     for(let x=1;x<=5;x++){
//         if(x <= ratings[i].rate){
//             result += "* "
//         }else{
//             result += "- "
//         }
//     }
//     console. log("Rating : ",ratings[i].name," | ",ratings[i].rate,"|",result)
// }

// for(let i=1; i<=5; i++){
//     let result = "";
//     for(let x=1; x<=5; x++) {
//         //statement ရေးနည်း
//         // if(x <= i) {
//         //     result += "* "
//         // }else{
//         //     result += "= "
//         // }
//         //expression ရေးနည်း
//         result += x <= i ? "* " : "- "
//     }
// //     console. log(result,i)
// // }
// for(let i=1;i<=5;i++){
//   console. log("hello",i)
// }























