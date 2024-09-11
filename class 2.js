// // let number = 20.322233;
//
// // let num2 = Math.floor(Math.round(number));
// // let num3 = Math.ceil(number);
//
// // console.log(num2)
// // console.log(num2)
// // console.log(Math.min(2, 1, 100, 200, 30))
//
// let random = Math.floor(Math.random() * 100)
// console.log(random)
//
// let power = Math.floor(Math.random() * 100)
// console.log(power)
//
// console.log(Math.pow(random,power))
//
// let text = "my name is blah ajdhdj"
// let text2 = "nj"
//
// console.log(text2.length)
//
// console.log(text2[0])
// console.log(text2[1])
//
//
// let write = "HeLLo"
//
// let write2 = write.toUpperCase()
// write2 = write2.substr(1,4)
// write3 = write2.substring(1,4)
//
// console.log(write2)
// console.log(write3)
//
// let ex = "    hdh hbc v ndcncj cdjcid"
// console.log(ex.trim())
//
// console.log(ex.includes("exr"))
//
// let lastchar = ex.length-1
//
// console.log(ex[lastchar])
//
//
// console.log(ex)
//
// console.log(ex.replace("hdh", "hello"))
//
//
//

let time = Number(prompt("what is the time in 24 hours?"))
 

if (time < 12){
     alert(`It is ${time}o'clock good morning`);
 }

 else if (time >= 12 && time <= 16){
     alert(`It is ${time}o'clock good afternoon`);
 }

 else if (time > 16 && time <= 24){
     alert(`It is ${time}o'clock good evening`);
 }
 else {
     alert(`${time} is not a time`);
 }



