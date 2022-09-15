// // const person = {
// //   name: "Dmitriy",
// //   age: 31,
// // };

// // function info() {
// //   console.log(
// //     `name: ${this.name}, age: ${this.age}, phone: ${phone}, address: ${address}`
// //   );
// // }

// // function bindik(fn, context, ...rest) {
// //   return function () {
// //     const uniqId = Date.now().toString();

// //     context[uniqId] = fn;

// //     const res = context[uniqId];
// //     return res;
// //   };
// // }

// // let a = 10;
// // let b = 2;
// // const ex = (a, b) => {
// //   console.log(a + b);
// //   console.log(a - b);
// //   console.log(a / b);
// //   console.log(a * b);
// // };
// // ex(a, b);
// // var num = 1;
// // num += 12;
// // num -= 14;
// // num *= 5;
// // num /= 7;
// // num++;
// // num--;
// // console.log(num);
// // let hour = 2;

// // function hourCalc(hour) {
// //   let res = hour * 60 * 60;
// //   return res;
// // }

// // console.log(hourCalc(hour));
// // const str = "abcde";
// // console.log(str[0], str[1], str[4]);
// // function f1(a, b) {
// //   console.log(a, b);
// // }

// // let f2 = f1.bind("context", "foo");

// // f2("feef", "ef", "wd");

// // var a = { name: "s" };
// // var b = { name: "s" };

// // console.log(a === b);
// // var x = 7;
// // console.log(++x);
// // console.log(x++);
// // console.log(x);

// // const arr = [1, 2, 3, 4, 5];
// // let result = arr.filter(function (el) {
// //   return el % 2;
// // });

// // console.log(result);
// // info.bind(person)();

// // function bindik(fn, context, ...spr) {
// //   return fn.bind(context, ...spr);
// // }

// // bindik(info, person);
// //
// // const obj = {
// //   name: "dm",
// //   age: 40,
// //   sex: true,
// // };
// // const arr = [true, false, true];
// // const arr2 = ["dw00", "dwdw", "qsq"];
// // const arr3 = arr2.concat(arr, obj);

// // function resc(array) {
// //   for (let i = 0; i < arr3.length; i++) {
// //     console.log(i, ":", array[i]);
// //   }
// // }
// // const arr = ["Bilbo", "Gandalf", "Nazgul"];

// // arr.forEach((item, index, array) => {
// //   console.log(`${index}: ${item} имеет позицию ${index} в ${array}`);
// // });

// // const myObjOne = {
// //   name: "dm",
// //   age: 23,
// // };

// // function MyObjSec(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }

// // const myObjSec = new MyObjSec("Dmitriy", 27);

// // class MyObjTh {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// // }
// // function sum(a, b) {
// //   if (b) {
// //     return a + b;
// //   }

// //   return function (c) {
// //     return a + c;
// //   };
// // }

// // const arr = [1, 6, -100, 100, 55];

// // Array.prototype.myMap = function (callback) {
// //   const res = [];
// //   const thisArr = this;
// //   for (let i = 0; i < arr.length; i++) {
// //     res.push(callback(thisArr[i], i, thisArr));
// //   }
// //   return res;
// // };

// // console.log(
// //   arr.myMap((el, i, arr) => {
// //     return el.toString();
// //   })
// // );

// // console.log(arr);
// // console.log(
// //   arr.sort((a, b) => {
// //     return a - b;
// //   })
// // );

// // console.log(sum(2)(6));
// // const myObjTh = new MyObjTh("Dmit", 29);

// // const person = {
// //   name: "Max",
// //   logName() {
// //     console.log("Name: ", this.name);
// //   },
// // };

// // console.dir(person);

// // console.log(myObjOne, "! Ordinary Creation !");
// // console.log(myObjSec, "! Thrue Function !");
// // console.log(myObjTh, "! Thrue Class !");

// // const concerts = {
// //   homel: new Date(),
// //   minsk: new Date(),
// // };

// // const arr = [Date(), true, false, "Dm", concerts];

// // console.log(concerts);

// // console.log(arr);
// // resc(arr3);
// // // const conn = document.querySelector(".head_One");
// // console.log(conn);
// // посчитать сумму элементов массива (массив одномерный)
// // const arr = [1, 4, 6, 0, 3];
// // const arr2 = ["wd", "23g", "jyrt", "\t"];
// // for (i = 1000; i <= 2000; i++) {
// //   temp = "&#" + i + " " + temp;
// // }

// // 1 , 1, 2, 3, 5, 8, 13, 21
// // const arr = [1, 1, 2, 3, 5, 8, 13, 21];
// // let sum = 0;
// // function arrSum(array) {
// //   for (let i = 0; i < array.length; i++) {
// //     sum = sum + arr[i];
// //     console.log(sum);
// //   }
// // }

// // arrSum(arr);

// // function palindrom(word) {
// //   word = word.toLowerCase();
// //   for (let i = 0; i < word.length / 2; i++) {
// //     if (word[i] !== word[word.length - i - 1]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// // console.log(palindrom("aaxaa"));

// // function arraySum(array) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //   }
// //   console.log(sum);
// // }
// // arraySum();
// //divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// // const arr = [1, 2, 3, 4, 5, 6];

// // const arr2 = arr.filter((i) => i % 2 === 0);
// // const arr3 = arr.map((i) => i % 2 === 0);
// // console.log(arr);
// // console.log(arr2);
// // console.log(arr3);

// // for (let i = 0; i < 5; i++) {
// //   for (let j = 0; j < 4; j++) {
// //     console.log(arr2[j], ",");
// //   }
// //   console.log(arr[i]);
// // }

// // while (arr.length < 5) {

// // }
// // console.log(null + 2);
// // let a = 5;
// // let b = 5;
// // function getNum(a, b) {
// //   if (a % 2 === 0 && b % 2 === 0) {
// //     let c = a * b;
// //     console.log(c);
// //   } else if (a % 2 !== 0 && b % 2 !== 0) {
// //     let c = a + b;
// //     console.log(c);
// //   } else {
// //     console.log(a % 2 ? a : b);
// //   }
// // }

// // getNum(8, 3);

// // const ob1 = {
// //   a: 10,
// //   b: {
// //     c: 10,
// //     name: "Dmitriy",
// //   },
// // };

// // const ob2 = JSON.parse(JSON.stringify(ob1));
// // const ob3 = { ...ob1 };

// // console.log("ob1", ob1);
// // console.log("ob2", ob2);
// // console.log("ob3", ob3);

// // ob1.b.name = "Zhenya";

// // console.log("ob1", ob1);
// // console.log("ob2", ob2);
// // console.log("ob3", ob3);

// // let i = 0;
// // do {
// //   let arr2 = arr.length;
// //   console.log(arr2);
// //   arr.length++;
// // } while (arr.length < arr);

// // 1

// // const mas = [1, 3, 4, 5, 16, 7, 36, 36, 4];
// // const newMas = mas
// //   .filter((el) => el % 2 == 0)
// //   .reduce((acc, elem) => acc + Math.sqrt(elem), 0);
// // console.log(newMas);

// // 2

// // const str = "hi";
// // const num = 42;
// // const flag = true;
// // const txt = "true";

// // console.log(typeof str);
// // console.log(typeof num);
// // console.log(typeof flag);
// // console.log(typeof txt);

// // 3

// // let a1 = 5 + 3;
// // let a2 = 5 - 3;
// // let a3 = 5 * 3;
// // let a4 = 5 / 3;
// // let a5 = 5 % 3;
// // console.log(a1, a2, a3, a4, a5);

// // 4
// // let a6 = 5 % 3;
// // let a7 = 3 % 5;
// // let a8 = 5 + "3";
// // let a9 = "5" + 3;
// // let a10 = 75 + "kg";
// // console.log(a6, a7, a8, a9, a10);

// // 5
// // function sqFn(h, w) {
// //   let s = h * w;
// //   return s;
// // }

// // const s = sqFn(7, 5);

// // console.log(s);

// // 6
// // function vCil(h, d) {
// //   let v = Math.PI * h * (d / 2);
// //   return v;
// // }

// // const V = vCil(10, 4);
// // console.log(V);

// // 7
// // function pifFn(m, n) {
// //   let k = m ** 2 + n ** 2;
// //   let c = Math.sqrt(k);
// //   return c;
// // }

// // const st = pifFn(3, 4);
// // console.log(st);

// // 8
// // const d = 7;
// // console.log(d);
// // console.log(d ** 2);
// // console.log(Math.pow(d, 3));

// // 9
// // const h = 5;
// // console.log("input: " + h);
// // console.log("output: " + h ** 2);

// // 10
// // let a = 5;
// // let b = 20;
// // let c = a + b;
// // let d = a * b;
// // console.log("sum: " + c, "mult: " + d);

// // 11
// // const a = prompt("ent nr: ");
// // const b = parseInt(a) + 7;
// // const c = parseInt(a) - 9;
// // console.log(b, c);

// // 12
// // const a = prompt("ent nr: ");
// // const b = prompt("ent else: ")
// // const c = parseInt(a) + parseInt(b)
// // const d = parseInt(a) * parseInt(b)
// // const e = parseInt(a) - parseInt(b)
// // const f = parseInt(b) - parseInt(a)
// // console.log(c)
// // console.log(d)
// // console.log(e)
// // console.log(f)

// // 13
// // const a = prompt("ent nr: ");
// // const b = prompt("ent else: ")
// // const d = parseInt(a) ** 2
// // const e = parseInt(b) ** 2
// // const c = d + e

// // console.log(c)
// // console.log(d)
// // console.log(e)

// // 14
// // const a = prompt("ent nr: ");
// // if (parseInt(a) > 0) {
// //   console.log(a * 2);
// // } else {
// //   console.log("error");
// // }

// // 15
// // const a = prompt("ent nr: ");
// // if (parseInt(a) === 0) {
// //   console.log("zero");
// // } else {
// //   console.log(" gg");
// // }

// // 16

// // const a = prompt("ent nr: ");

// // if (parseInt(a) < 0) {
// //   console.log("-");
// // } else if (parseInt(a) === 0) {
// //   console.log("zero");
// // } else if (parseInt(a) > 0) {
// //   console.log("+");
// // } else {
// //   console.log("error");
// // }

// // 17

// // const a = parseInt(prompt("ent number1: "));
// // const b = parseInt(prompt("ent number2: "));
// // if (a > b) {
// //   let c = a + b;
// //   console.log(c);
// // } else if (a < b) {
// //   let c = a * b;
// //   console.log(c);
// // } else if (a === b) {
// //   console.log("nrs equals");
// // } else {
// //   console.log("error");
// // }

// // 18
// // const a = parseInt(prompt("ent number1: "));
// // const b = parseInt(prompt("ent number2: "));
// // if (a > 0 && b > 0) {
// //   console.log("1");
// // } else if (a < 0 && b > 0) {
// //   console.log("-");
// // } else if (a > 0 && b < 0) {
// //   console.log("-");
// // } else if (a === 0 || b === 0) {
// //   console.log("one of nrs = 0");
// // } else {
// //   console.log("error");
// // }

// // 19
// // const a = parseInt(prompt("ent number1: "));
// // const b = parseInt(prompt("ent number2: "));
// // const res = a / b;
// // if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
// //   console.log(res, "+");
// // } else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
// //   console.log(res, "-");
// // } else if (b === 0) {
// //   console.log("fu");
// // } else {
// //   console.log("error");
// // }

// // 20
// // const a = parseInt(prompt("ent number1: "));
// // if (a < 0) {
// //   console.log(-a);
// // } else {
// //   console.log("0");
// // }

// // 21
// // const random = Math.round(Math.random() * 100);

// // console.log(random);

// // 22
// // const min = -10.4;
// // const max = 10.4;
// // const random1 = Math.round(Math.random() * (max - min) + min);
// // const random2 = Math.round(Math.random() * (max - min) + min);

// // console.log(random1, random2);

// // 23
// // let a = 4;
// // let c = 12;
// // let d = 5;

// // let result = c + d + a;
// // console.log(result);

// // let a = 17;
// // let b = 10;
// // let c = a - b;
// // let d = 7;
// // let result = c + d;
// // console.log(result);

// // let str1 = "Hi, ";
// // let str2 = "Dmitriy";
// // let res = str1 + str2;
// // console.log(res);
// // let a;

// // let num = "12345";
// // for (let nr of num) {
// //   nr *= parseInt(nr);
// //   console.log(nr);
// // }

// // let hour = 5;

// // let b = Math.pow(hour, 2);
// // console.log(b);
// // var num = 47;
// // // num += 7;
// // // num -= 18;
// // // num *= 10;
// // num /= 15;

// // console.log(num);
// // const arr = ["hi", "to", "u"];
// // let text;
// // arr[0] = "bye";
// // console.log(arr);

// // const obj = {
// //   pete: 1000,
// //   nic: 800,
// //   deimon: 9000,
// // };
// // console.log(obj.pete, obj["nic"]);
// // const arr = new Array(1, 2, 4, 6);
// // console.log(arr);
// // const arr2 = [1, 2, 3, 4, 5];
// // console.log(arr2);

// // const arrMn = { ru: [1, 2, 3, 4, 5], en: [6, 7, 8, 9, 10] };
// // console.log(arrMn.en[4]);

// // const arr = ["a", "b", "c"];
// // console.log(arr[0], arr[1], arr[2]);

// // const arr = ["a", "b", "c", "d"];
// // console.log(arr[0], "+", arr[1], ",", arr[2], "+", arr[3]);

// // const arr = [2, 5, 3, 9];
// // let result = arr[0] * arr[1] + arr[2] * arr[3];
// // console.log(result);

// // const obj = {
// //   a: 10,
// //   b: 15,
// //   c: 20,
// // };

// // console.log(obj["c"]);
// // console.log(obj.c);

// // let num = "10";
// // if (num === 10) {
// //   console.log("true");
// // } else {
// //   console.log("false");
// // }

// // let lang = "ru";
// // switch (lang) {
// //   case "ru":
// //     var arr = [1, 2, 3, 4, 5];
// //     break;
// //   case "en":
// //     var arr = [2, 5, 6, 78, 8];
// //     break;
// // }

// // console.log(arr);

// // let a = 25 / 5;
// // console.log(a >= 0 ? true : false);
// // let a = -4;
// // console.log(a > 0 && a < 5 ? true : false);

// // let season = 6;
// // switch (season) {
// //   case 1:
// //     console.log("winter");
// //     break;
// //   case 2:
// //     console.log("spring");
// //     break;
// //   case 3:
// //     console.log("summer");
// //     break;
// //   case 4:
// //     console.log("autumn");
// //     break;
// //   default:
// //     console.log("wrong");
// // }

// // let str = "abcde";

// // if (str[0] === "b") {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }
// // let a = num[0] == 1 ? true : false;
// // console.log(a);

// // let num = "12345";
// // let res = 1;
// // for (let i = 0; i < num.length; i++) {
// //   res = res * parseInt(num[i]);
// //   console.log(res);
// // }

// // let nums = "123321";

// // let a = parseInt(nums[0]) + parseInt(nums[1]) + parseInt(nums[2]);
// // let b = parseInt(nums[3]) + parseInt(nums[4]) + parseInt(nums[5]);
// // let c = a === b ? true : false;
// // console.log(c);
// // let i = 0;
// // while (i <= 50) {
// //   document.write(i + "<hr> ");
// //   i++;
// // }

// // for (let i = 0; i <= 50; i++) {
// //   document.write(i + "<hr>");
// // }

// // const arr = [1, 2, 3, 4, 5];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i] * 5);
// // }

// // const arr = [2, 3, 4, 5];
// // let res = 1;
// // for (let i = 0; i < arr.length; i++) {
// //   res = res * arr[i];
// //   console.log(res);
// // }

// // const obj = {
// //   Minsk: "Belarus",
// //   Moscow: "Russia",
// //   Kiev: "Ukraine",
// // };

// // for (let key in obj) {
// //   console.log(key + " - capital of " + obj[key] + " !");
// // }

// // let i = 0;

// // while (i <= 50) {
// //   console.log(i);
// //   i++;
// // }

// // for (let i = 0; i <= 20; i++) {
// //   console.log(i);
// // }

// // for (let i = 11; i <= 33; i++) {
// //   console.log(i);
// // }

// // var i = 11;

// // while (i <= 33) {
// //   console.log(i);
// //   i++;
// // }

// // for (let i = 0; i <= 100; i++) {
// //   console.log(i % 2 === 0 ? i : "");
// // }

// // let res = 0;
// // for (let i = 0; i <= 100; i++) {
// //   res = res + i;
// //   console.log(res);
// // }

// // const arr = [1, 2, 3, 4, 5];
// // let result = 0;
// // // for (let i = 0; i < arr.length; i++) {
// // //   console.log(arr[i]);
// // // }
// // for (let i = 0; i < arr.length; i++) {
// //   result = result + arr[i];
// // }
// // console.log(result);

// // const obj = {
// //   fst: "green",
// //   scnd: "blue",
// //   thrd: "red",
// // };
// // for (let key in obj) {
// //   console.log(key, obj[key]);
// // }

// // const obj = {
// //   fst: 300,
// //   scnd: 400,
// //   thrd: 500,
// // };
// // for (let key in obj) {
// //   console.log("at", key, "price:", obj[key]);
// // }
// // const arr = [2, 5, -9, -15, 3, -4];
// // // for (let i = 0; i < arr.length; i++) {
// // //   if (arr[i] > 3 && arr[i] < 10) {
// // //     console.log(arr[i]);
// // //   }
// // // }
// // let res = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] > 0) {
// //     res = res + arr[i];
// //   }
// // }
// // console.log(res);

// // const arr = [1, 2, 5, 9, 4, 13, 4, 10];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] === 4) {
// //     console.log("there is");
// //     break;
// //   }
// // }
// // const arr = [10, 20, 30, 50, 235, 3000];
// // for (let i = 0; i < arr.length; i++) {
// //   let num = String(arr[i]);
// //   let char = num[0];
// //   if (char == 1 || char == 2 || char == 5) {
// //     console.log(arr[i]);
// //   }
// // }
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // var str = "-";
// // for (let i = 0; i < arr.length; i++) {
// //   str = str + arr[i] + "-";
// // }
// // console.log(str);
// // const arr = [
// //   "Sunday",
// //   "Monday",
// //   "Tuesday",
// //   "Wednesday",
// //   "Thursday",
// //   "Friday",
// //   "Saturday",
// // ];

// // let day = new Date().getDay();
// // for (let i = 0; i < arr.length; i++) {
// //   if (i == day) {
// //     document.write(String(arr[i]).italics() + " ");
// //   } else {
// //     document.write(arr[i] + " ");
// //   }
// // }

// // switch (day) {
// //   case 0:
// //     console.log(arr[0]);
// //     break;
// //   case 1:
// //     console.log(arr[1]);
// //     break;
// //   case 2:
// //     console.log(arr[2]);
// //     break;
// //   case 3:
// //     console.log(arr[3]);
// //     break;
// //   case 4:
// //     console.log(arr[4]);
// //     break;
// //   case 5:
// //     console.log(String(arr[5]).italics());
// //     break;
// //   case 6:
// //     console.log(arr[6]);
// //     break;
// // }
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[0] === arr[i]) {
// //     console.log("SUNDAY");
// //   } else if (arr[6] === arr[i]) {
// //     console.log("SATURDAY");
// //   } else {
// //     console.log(arr[i]);
// //   }
// // }

// // var num = 0;
// // for (var n = 1000; n > 50; n = n / 2) {
// //   num++;
// //   console.log("res: " + n);
// // }
// // console.log("iteration count: " + num + ".");

// // let a = 10;
// // let b = 3;
// // let res = a % b;
// // if (res === 0) {
// //   console.log("without");
// // } else console.log(res + " with");

// // let a = 2;
// // let st = Math.pow(a, 10);
// // console.log(st);

// // let a = 245;
// // let st = Math.sqrt(a);
// // console.log(st);
// // let res = 0;
// // const arr = [4, 2, 5, 19, 13, 0, 10];
// // for (let i = 0; i < arr.length; i++) {
// //   res = res + Math.pow(arr[i], 3);
// //   console.log(res);
// // }
// // let res2 = Math.sqrt(res);
// // console.log(res2);
// // let a = 379;
// // console.log(Math.round(Math.sqrt(a)));
// // console.log(Math.sqrt(a).toFixed(2));
// // console.log(Math.sqrt(a).toFixed(1));

// // let a = 587;
// // let obj = {
// //   floor: 0,
// //   ceil: 0,
// // };
// // console.log(obj);
// // obj.floor = Math.floor(Math.sqrt(a));
// // obj.ceil = Math.ceil(Math.sqrt(a));
// // console.log(obj);
// // let arr = [4, -2, 5, 19, -130, 0, 10];
// // let obj = {
// //   a: 21,
// //   2: 5,
// //   4: 11,
// //   7: 0,
// // };
// // let mMn = Math.max.call(null, obj[2], obj[4], obj["a"], obj[7]);
// // let mM = Math.max.apply(null, arr);
// // console.log(mMn);
// // console.log(mM);
// // console.log((mM + mMn).toFixed(2));
// // let a = function getNum(min, max) {
// //   return Math.random() * (max - min) + min;
// // };
// // console.log(Math.round(a(1, 100)));

// // let a = function getR(min, max) {
// //   return Math.random() * (max - min) + min;
// // };

// // document.write(Math.round(a(7, 22)));

// // const arr = [];
// // for (let i = 0; i < 10; i++) {
// //   arr[i] = Math.round(Math.random() * (100 - 1) + 1);
// //   console.log("iteration count: ", i, arr[i]);
// // }
// // console.log("array: ", arr);

// // let a = 3;
// // let b = 5;
// // // let res = Math.abs(a - b) * -4;
// // // console.log(res);
// // let c = Math.abs(a - b);
// // console.log(c);

// // let arr = [12, 15, 20, 25, 59, 79];
// // let res = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   res = res + arr[i];
// // }
// // console.log(res);
// // let result = res / (arr.length + 1);
// // console.log(result);

// // const arr = [];
// // let fact = prompt("enter number: ");
// // let result = 1;
// // for (let i = 1; i <= fact; i++) {
// //   arr.push(i);
// //   result = result * i;
// // }
// // document.write("array: [", arr, "]");
// // document.write(" result: ", result, ",");
// // document.write(" type of result: ", typeof result);

// // let str = "aaa@bbb@ccc";
// // console.log(str.replace(/@/g, "!"));

// // let str = "aaa dbb ccc";
// // console.log(str.slice(0, 5));
// // console.log(str.substring(7, 4));
// // console.log(str.substr(4, 3));
// // console.log(str);

// // let date = "2025-12-21";
// // const arr = date.split("-");
// // console.log(arr);
// // let newStr = "";
// // for (let i = 0; i < arr.length; i++) {
// //   newStr = newStr + arr[i] + "/";
// // }
// // console.log(newStr.substring(0, newStr.length - 1));
// // let st = "JS";
// // console.log(st.toLowerCase());
// // let st = "js";
// // console.log(st.toUpperCase());

// // let str = "I'm learning js";

// // console.log(str.indexOf("learning"));

// // let slice = str.slice(0, -3);
// // let sub = str.substring(0, 3);
// // let ss = str.substr(0, 3);
// // console.log(str);
// // console.log(slice);
// // console.log(sub);
// // console.log(ss);
// // for (var key in str) {
// //   key = key++;
// // }
// // console.log(key + 1);

// // let n = 40;
// // let str = "hi , my name is Dmitriy, I'm 31";
// // let res = "";

// // if (str.length > n) {
// //   console.log(str + "...");
// // } else {
// //   console.log(str.length);
// // }
// // let str = "i'm-learning-js";
// // let newStr = str.replace(/-/g, "/");
// // console.log(newStr);
// // let str = "i'm learning js";
// // const arr = str.split("");
// // console.log(arr);
// // let date = "2025-12-31";
// // let newDate = date.replace(/-/g, ".");
// // console.log(newDate);

// // const arr = ["i'm", "learning", "js"];
// // let str = arr.join(" + ");
// // console.log(str);

// // let str = "clone was born yeasterday";
// // let ex = str
// //   .split(" ")
// //   .map((ex) => {
// //     return ex.replace(ex[0], ex[0].toUpperCase());
// //   })
// //   .join(" ");

// // console.log(ex + "!");
// // console.log(typeof ex);

// // let str = "var_test_text";
// // let newStr = str
// //   .split("_")
// //   .map((newStr) => {
// //     return newStr.replace(newStr[0], newStr[0].toUpperCase());
// //   })
// //   .join(" ")
// //   .replace(/ /g, "");

// // console.log(newStr);

// // const arr1 = ["a", "b", "c"];
// // // const arr2 = [1, 2, 3];
// // arr1.push(1, 2, 3);
// // // const arrAll = arr1.concat(arr2);
// // // console.log(arrAll);
// // console.log(arr1);

// // const arr1 = [1, 2, 3];
// // // const arr2 = [4, 5, 6];
// // // const arr3 = arr1.concat(arr2);
// // // arr3.push(7, 8, 9, 10);
// // // console.log(arr3);

// // let a = arr1.shift();
// // console.log(a);
// // let b = arr1.pop();
// // console.log(b);
// // console.log(arr1);
// // // console.log(arr1);
// // arr1.reverse();
// // console.log(arr1);
// // arr1.push(4, 5, 6);
// // console.log(arr1);
// // arr1.unshift(100, 200, 50);
// // console.log(arr1);
// // const arr = [1, 2, 3, 4, 5];
// // // let a = arr.splice(1, 1, 8, 9, 10, 9, 8);
// // // console.log(arr);
// // // console.log(a);
// // arr.splice(1, 0, "a", "b");
// // arr.splice(6, 0, "c");
// // arr.splice(arr.length, 0, "e");
// // console.log(arr);

// // const arr = [3, 4, 1, 2, 7];
// // arr.sort();
// // console.log(arr);

// // const obj = {
// //   js: "text",
// //   jq: "hello",
// //   css: "world",
// // };
// // console.log(obj);
// // let keys = Object.keys(obj);
// // console.log(keys);

// // let str = "my string";
// // let newStr = str.replace(str[0], str[0].toUpperCase());
// // console.log(newStr);
// // str = str[0].toUpperCase() + str.substr(1);
// // console.log(str);

// // let str = "123456";
// // let res = str.split("").reverse().join(" ");
// // console.log(res);

// // let str = "http://instagram.com";
// // if (str.includes("http://") == true) {
// //   console.log("contain");
// // } else {
// //   console.log("no");
// // }
// // let str = "wkgwpogwpojeg.html";
// // if (str.includes(".html", str.length - 5)) {
// //   console.log("y");
// // } else {
// //   console.log("n");
// // }
// // let a = Math.round(Math.random() * (7 - 1) + 1);
// // console.log(a);
// // let key;
// // function week(a) {
// //   if (a == 1) {
// //     console.log("monday");
// //   } else if (a == 2) {
// //     console.log("tuesday");
// //   } else if (a == 3) {
// //     console.log("wednesday");
// //   } else if (a == 4) {
// //     console.log("thursday");
// //   } else if (a == 5) {
// //     console.log("friday");
// //   } else if (a == 6) {
// //     console.log("saturday");
// //   } else if (a == 7) {
// //     console.log("sunday");
// //   } else {
// //     console.log("impossible");
// //   }
// // }
// // week(a);
// // const arr = [1, 2, 3, 4, 5];
// // for (let i = 0; i < arr.length; i++) {
// //   arr[i] == 5 ? console.log("+") : console.log("-");
// // }
// // let a = 5;
// // function isFive(a) {
// //   return a == 5 ? console.log("yes, 5") : console.log("-");
// // }

// // let arr1 = [1, 2, 3, 4, 5].join(" ").includes(6);
// // if (arr1 == true) {
// //   console.log("+");
// // } else {
// //   console.log("-");
// // }
// // console.log(arr1);
// // let n = 31;
// // let res = "";
// // for (let i = 2; i < n; i++) {
// //   if (n % i == 0) {
// //     console.log("+");
// //   } else {
// //     res = "-";
// //   }
// // }
// // if (res == "-") {
// //   console.log("---");
// // }

// // const aaa = [1, 4, 2, 5, 9, 5, 42, 24, 31, 12, 21];
// // let arr1 = [];
// // let arr2 = [];
// // for (let i = 0; i < aaa.length; i++) {
// //   if (aaa[i] % 2 !== 0) {
// //     arr1.push(aaa[i]);
// //     arr1.sort((a, b) => a - b);
// //   }
// //   if (aaa[i] % 2 == 0) {
// //     arr2.push(aaa[i]);
// //   }
// // }
// // let arr3 = arr1.concat(arr2);
// // console.log(arr3);
// // const arr = [1, 2, 2, 3, 4, 6, 7, 8, 8];
// // let res = "";
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] == arr[i + 1]) {
// //     res = "yes";
// //   }
// //   if (res !== "yes") {
// //     res = "no";
// //   }
// // }
// // console.log(res);

// // let arr = [1, 2, 3];
// // arr[10] = 11;
// // console.log(arr);
// // arr.length = 0;
// // console.log(arr);

// // function fn(a, b) {
// //   if (a === b) {
// //     return console.log("true");
// //   } else return console.log("false");
// // }
// // fn(1, 2);

// // function fn(a, b) {
// //   if (a + b > 10) {
// //     return console.log("true");
// //   } else return console.log(a + b);
// // }
// // fn(7, 4);

// // function fn(a) {
// //   if (a < 0) {
// //     return console.log(true);
// //   } else if (a > 0) {
// //     return console.log(false);
// //   } else {
// //     return console.log("-");
// //   }
// // }
// // fn("e2");
// // let str = "-";
// // for (let i = 1; i < 10; i++) {
// //   str = str + i + "-";
// // }
// // console.log(str);

// // let str = "";
// // for (let i = 1; i < 10; i++) {
// //   console.log(i);
// //   for (let j = 1; j < i; j++) {}
// // }

// // const obj = {
// //   name: "dm",
// //   age: 22,
// // };

// // function fn(arg) {
// //   return function () {
// //     console.log(arg + " " + obj.age);
// //   };
// // }

// // const s = fn(obj.name);
// // s(obj.age);

// // function addTen(args) {
// //   return function (a) {
// //     console.log(a + " " + args);
// //   };
// // }

// // let a = 10;

// // let g = addTen(10);
// // g(9);

// // function fn(a) {
// //   return function (arg) {
// //     console.log(arg + a);
// //   };
// // }

// // const av = fn(10);
// // av("w2");

// // const arr = [];
// // let str = "";
// // for (let i = 0; i < 10; i++) {
// //   str += "x";
// //   arr.push(str);
// // }
// // console.log(arr);

// // const arr = [];
// // let st;
// // for (let i = 1; i < 10; i++) {
// //   st = "";
// //   for (let j = 1; j <= i; j++) {
// //     st += i;
// //   }
// //   arr.push(st);
// // }
// // console.log(arr);

// // const arr = [];
// // let str;
// // for (let i = 1; i < 10; i++) {
// //   str = "";
// //   for (let j = 1; j <= i; j++) {
// //     str += i;
// //   }
// //   arr.push(str);
// // }

// // console.log(arr);

// // let a = "x";
// // let b = 5;
// // const arr = [];
// // function arrayFill(a, b) {
// //   for (let i = 0; i < b; i++) {
// //     arr.push(a);
// //   }
// //   return console.log(arr);
// // }

// // arrayFill("hhh", 9);

// // const arr = [1, 2, 3, 2, 3, 5, 6, 4, 3, 2, 3, 1];
// // let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   sum = arr[i] + sum;
// //   if (sum > 10) {
// //     console.log(
// //       "arr[i] = " + i + ". Quantity of Array's elem:",
// //       i + 1 + ".",
// //       "Sum = " + sum
// //     );
// //     break;
// //   }
// // }

// // const arr = [1, 5, 2, 2, 2, 2, 2, 3, 1, 31, 3];
// // let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   sum += arr[i];
// //   if (sum > 10) {
// //     console.log(sum, "quantity: ", i + 1);
// //     break;
// //   }
// // }

// // arr.reverse();
// // console.log(arr);

// // const arr = [1, 2, 3, 4, 5, 6, 7];
// // let arr2 = [];
// // for (let i = arr.length; i > 0; i--) {
// //   arr2.push(arr.pop());
// // }
// // console.log(arr2);

// // const arr = [[1, 2, 3], [4, 5], [6]];
// // let arr2 = [];
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = 0; j < arr[i].length; j++) {
// //     arr2 = arr[i][j] + Number(arr2);
// //   }
// // }

// // console.log(arr2);

// // let arr = [
// //   [
// //     [1, 2],
// //     [3, 4],
// //   ],
// //   [
// //     [5, 6],
// //     [7, 8],
// //   ],
// // ];

// // let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = 0; j < arr[i].length; j++) {
// //     for (let k = 0; k < arr[i][j].length; k++) {
// //       sum = arr[i][j][k] + Number(sum);
// //     }
// //   }
// // }
// // console.log(sum);

// // const arr = [1, 2, 6, 2, -2, -3, -4, 0, 1];
// // let res = "";
// // function isPositive(a) {
// //   if (a >= 0) {
// //     return (res = a + " " + res);
// //   }
// // }
// // for (let i = 0; i < arr.length; i++) {
// //   isPositive(arr[i]);
// // }

// // console.log(res);

// // const arr = [2, 6, 3, 3, 1, -67, -9, -4, 0, 4, 1, 0, 2, -2];
// // let res = [];
// // function isNumberInRange(a) {
// //   if (a > 0 && a < 10) {
// //     return (res = res + true + " ");
// //   } else {
// //     return (res = res + false + " ");
// //   }
// // }

// // for (let i = 0; i < arr.length; i++) {
// //   isNumberInRange(arr[i]);
// // }

// // console.log(res.split(" "));

// // const arr = [2, 6, 3, 3, 1, -67, -9, -4, 0, 4, 1, 0, 2, -2];
// // let res = [];
// // function isNumberInRange(a) {
// //   if (a > 0 && a < 10) {
// //     return (res += a);
// //   }
// // }

// // for (let i = 0; i < arr.length; i++) {
// //   isNumberInRange(arr[i]);
// // }
// // let res2 = res.split("");
// // console.log(res2);
// // let res = "";
// // let ex = 0;
// // function getDigitsSum(digit) {
// //   res = res + digit;
// //   res.split("");
// //   for (let i = 0; i < res.length; i++) {
// //     ex += Number(res[i]);
// //   }
// //   return ex;
// // }
// // getDigitsSum(908772999);
// // console.log(ex);

// // function getDigitsSum(digit) {
// //   var res = 0;
// //   var digit = String(digit);
// //   for (var i = 0; i < digit.length; i++) {
// //     res += Number(digit[i]);
// //   }
// //   return res;
// // }

// // console.log(typeof res);
// // console.log(res);

// // const result = [];

// // for (var j = 1; j <= 2022; j++) {
// //   if (getDigitsSum(j) == 13) {
// //     result.push(j);
// //   }
// // }

// // console.log(result);
// // const arr = [2, 5, 1, 12, 6, 5467, 3, 3, 1, 3, 3, 4, 5, 54, 4, 6];
// // var res = [];
// // function isEven(a) {
// //   if (a % 2 == 0) {
// //     res.push(a);
// //   }
// //   return res;
// // }
// // arr.forEach(isEven);
// // console.log(res);
// // const arr = [];
// // function getDiv(a) {
// //   for (let i = 0; i <= a; i++) {
// //     if (a % i === 0) {
// //       arr.push(i);
// //     }
// //   }
// //   return arr;
// // }

// // getDiv(200);
// // console.log(arr);

// // var str = "hi my name is dm";

// // function ucFirst(sStr) {
// //   var arr = sStr.split(" ");
// //   arr = arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(" ");
// //   console.log(arr);
// // }

// // ucFirst(str);

// // function toUp(st) {
// //   let arr = [];
// //   arr = st.split("_");
// //   arr = arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join("");
// //   arr = arr[0].toLowerCase() + arr.substring(1, arr.length);
// //   console.log(arr);
// // }
// // toUp(str);

// // let str = "var_text_hello";

// // function tU(st) {
// //   let arr = st.split("_");
// //   arr = arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join("");
// //   arr = arr[0].toLowerCase() + arr.substring(1, arr.lenght);
// //   console.log(arr);
// // }

// // tU(str);
// // varTextHello
// // const arr = ["wddw", "dwwd", "qq", "wwe"];
// // function onArray(txt, array) {
// //   for (let i = 0; i <= array.length; i++) {
// //     if (array[i] == txt) {
// //       return console.log("true");
// //     }
// //   }
// //   return console.log("false");
// // }

// // onArray("wwe", arr);

// // let str = "wfw";

// // arr = str.split("");

// // function Fn(s) {
// //   for (let i = 0; i < s.length; i++) {
// //     let char = s[i];
// //     if (s.indexOf(char) !== i) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
// // // // Fn(arr);
// // // Fn(str);
// // const arr = [];
// // console.log(typeof arr);
// // // console.log(NaN == NaN);

// // let b = 3124n;
// // console.log(typeof b);

// // let a = 0;
// // let b = 5;
// // let c = NaN;
// // let d = undefined;
// // let e = "";
// // let f = " ";
// // let g = "dw";
// // let h = false;
// // let u = true;
// // let p = [];
// // let r = {};
// // let o = { i: 25 };
// // let kl = [1];
// // function fN() {}

// // console.log(Boolean(fN));

// // const map = new Map();
// // console.log(map);
// // console.log(typeof map);

// // const obj = { 1: "sss" };

// // map.set(true, 23).set(1, "99").set(23, true).set(obj, Date());

// // console.log(map);
// // console.log(typeof map);

// // const arr = [1, 2, 4, "2311231"];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i] + ":" + i);
// //   console.log(arr.length);
// // }

// // let str = ".fnuqwe wriogn rewgn nb rwlnvw  ooe m";

// // function isUniq(string) {
// //   const set = new Set();

// //   for (let i = 0; i < string.length; i++) {
// //     let char = string[i];
// //     if (set.has(char)) {
// //       return console.log(false);
// //     }
// //     set.add(char);
// //   }
// //   return console.log(true);
// // }
// // isUniq(str);

// // let str = "123456789X";
// // let arr = str.split("");

// // var newArr = [];
// // for (let i = 1; i < arr.length; i = i + 2) {
// //   newArr.push(arr[i] + arr[i - 1]);
// // }
// // let res = newArr.join("");

// // console.log(res);

// // const arr = [2, 87, 5, 367, 3, 0, 7, -34, -4, 2];

// // function rec(arr, i = 0) {
// //   console.log(arr[i]);
// //   i = ++i;
// //   if (i < arr.length) {
// //     rec(arr, i);
// //   }
// // }

// // rec(arr);

// // let n = 478135252423;

// // function sum(n) {
// //   var arr = String(n).split("");
// //   var res = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     res += Number(arr[i]);
// //   }
// //   if (res > 10) {
// //     n = res;
// //     sum(n);
// //   } else console.log(res);
// // }

// // sum(n);

// // let str = "2";
// // let res = str.split("");
// // console.log(res);

// // for (let i = 0; i <= 100; i++) {
// //   console.log(i);
// // }

// // for (let i = 100; i > 0; i--) {
// //   console.log(i);
// // }

// // for (let i = 0; i <= 100; i++) {
// //   if (i % 2 == 0) {
// //     console.log(i);
// //   }
// // }

// // let arr = [];
// // for (let i = 0; i < 10; i++) {
// //   arr.push("x");
// // }
// // console.log(arr);

// // let arr = [];
// // for (let i = 0; i <= 10; i++) {
// //   arr.push(i);
// // }
// // console.log(arr);

// //   arr.push(Math.random().toFixed(2));
// // }
// // console.log(arr);

// // const arr = [];
// // for (let i = 0; i < 10; i++) {
// //   arr.push((Math.random() * 100).toFixed());
// // }
// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] > 0 && arr[i] < 10) {
// //     console.log(arr[i]);
// //   }
// // }

// // let res = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   res = res + arr[i];
// // }
// // console.log(res);
// //   if (arr[i] == 5) {
// //     console.log(arr[i]);
// //     break;
// //   }
// // }

// // const arr = [1, 6, 342, 213, 566, 5, -2, 0, 2, 5];
// // let res = 0;

// // for (let i = 0; i < arr.length; i++) {
// //   res = res + arr[i];
// // }
// // res = res / arr.length;
// // console.log(res);

// // for (let i = 0; i < arr.length; i++) {
// //   res = res + Math.pow(arr[i], 2);
// // }
// // console.log(res);
// // function fn() {
// //   let elem1 = document.getElementById("test1");
// //   let elem2 = document.getElementById("test2");
// //   let cl1 = elem1.value;
// //   let cl2 = elem2.value;
// //   elem1.value = cl2;
// //   elem2.value = cl1;
// // }

// // function fn() {
// //   let col = document.getElementById("test2");
// //   col.style.color = "red";
// // }

// // function fn2() {
// //   let en = document.getElementById("test2");
// //   en.disabled = true;
// // }

// // function fn3() {
// //   let en = document.getElementById("test2");
// //   en.disabled = false;
// // }

// // function fn2() {
// //   let over = document.getElementById("test2");
// //   alert("d2");
// // }

// // function fn() {
// //   let div2 = document.getElementById("test");
// //   alert(div2.value);
// // }

// // function fn(el) {
// //   el.value = el.className;
// // }

// // function fnBut() {
// //   let id = document.getElementById("but1");
// //   let txt1 = document.getElementById("test");
// //   let txt2 = document.getElementById("test2");
// //   let txt1Value = txt1.value;
// //   let txt2Value = txt2.value;
// //   txt1.value = txt2Value;
// //   txt2.value = txt1Value;
// // }

// // function fn3() {
// //   let cc = document.getElementById("test2");
// //   alert(cc.value);
// // }

// function fnBut() {
//   let v1 = document.getElementById("test");
//   let v2 = document.getElementById("test1");
//   let val = v1.value;
//   v2.value = Number(val) ** 2;
//   if (v2.value == true) {
//   } else if (v2.value == false || isNaN(v2.value)) {
//     v2.value = "error";
//   }
// }
// console.log(isNaN(NaN));

// function fnBut() {
//   let button = document.getElementById("test");
//   button.disabled = true;
//   button.style.cursor = "cell";
// }

// function fn1(elem) {
//   let txt = document.getElementById("txt");
//   txt.value += elem.value;
// }

// function spanId() {
//   let span = document.getElementById("idsp");
//   span.innerHTML = "<i>ANOTHER</i> <b>TEXT</b>";
// }

// function spanId() {
//   let bold = document.getElementById("idsp");
//   bold.outerHTML = "<b>" + bold.innerHTML + "</b>";
// }

// function forP() {
//   let p = document.getElementsByTagName("p");
//   for (let i = 1; i < p.length + 1; i++) {
//     p[i - 1].innerHTML = " - let's go to " + i + " place";
//   }
// }

// function func() {
//   let zzz = document.getElementsByClassName("zzz");
//   for (let i = 0; i < zzz.length; i++) {
//     zzz[i].innerHTML = i + 1;
//   }
// }

// function func() {
//   let zzz = document.querySelectorAll("p.zzz");
//   for (let i = 0; i < zzz.length; i++) {
//     zzz[i].innerHTML = i + 1;
//     zzz[i].outerHTML = "<i>" + zzz[i].innerHTML + "</i>";
//   }
// }

// function fn() {
//   let zzz = document.getElementById("p1");
//   zzz.innerHTML = "new <b><i>text</i></b>";
// }
// function fn() {
//   let zzz = document.getElementById("p1");
//   zzz.outerHTML = "<h2>THIS IS NEW TEXT</h2>";
// // }
// function fn() {
//   let zzz = document.getElementById("p1");
//   zzz.outerHTML = "<h3>" + zzz.innerHTML + "</h3>";
// }

// function fn() {
//   let fst = document.getElementById("inputFst");
//   let scnd = document.getElementById("inputScnd");
//   let res = document.getElementById("inputRes");
//   res.value = Number(fst.value) + Number(scnd.value);
// }

// function fn() {
//   let www = document.getElementsByClassName("www");
//   for (let i = 0; i < www.length; i++) {
//     www[i].innerHTML = i + 1;
//   }
// }

// function fn() {
//   let qsa = document.querySelectorAll("p.www");
//   for (let i = 0; i < qsa.length; i++) {
//     qsa[i].outerHTML = "<b>" + qsa[i].innerHTML + "</b>";
//   }
// }

// function fn() {
//   let pid = document.querySelector("#pid");
//   let inp = document.querySelector("#inp");
//   pid.innerHTML = inp.value;
// }

// function fn() {
//   let pid1 = document.getElementById("pid1");
//   let pid2 = document.getElementById("pid2");
//   let pid3 = document.getElementById("pid3");
//   pid1.innerHTML = "yandex.ru";
//   pid2.innerHTML = "google.ru";
//   pid3.innerHTML = "zh.ru";
// }

// function fn() {
//   let pid = document.getElementById("pid");
//   let inp = document.querySelector("#inp");
//   pid.innerHTML = "wddwdwdwwd";
// //   inp.setAttribute("disabled", "disabled");
// // }

// function fn() {
//   let p = document.getElementsByTagName("p");
//   for (let i = 0; i < p.length; i++) {
//     p[i].innerHTML = i + " " + p[i].innerHTML;
//   }
// }

// let array = [1, 2, 34, 54, true];
// console.log(array);
// array.forEach((el) => console.log(el * 2));

// const map = Array.prototype.map;
// const charCodes = map.call("Hello World", (x) => x.charCodeAt(0));
// // теперь charCodes равен [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);
// function isBigEnough(value) {
//   return value >= 10;
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // массив filtered теперь содержит [12, 130, 44]
// // console.log(filtered);
// var myFish = ["angel", "clown", "drum", "sturgeon"];
// var removed = myFish.splice(2, 1, "trumpet");

// // myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// // removed равен ["drum"]
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]
// var array = [2, 5, 9];
// array.indexOf(2); // 0
// array.indexOf(7); // -1
// array.indexOf(9, 2); // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0
// var fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];
// var citrus = fruits.slice(1, 3); // citrus содержит ['Апельсин', 'Лимон']
// // let date = new Date();
// // function fn() {
// //   let p = document.getElementById("111");
// //   let month = date.getMonth();
// //   p.innerHTML = months[month];
// // }

// var date = new Date();
// var now = new Date(
//   date.getFullYear(),
//   date.getMonth(),
//   date.getDate(),
//   0,
//   0,
//   0
// );
// var result = Math.floor((date.getTime() - now.getTime()) / 1000);
// alert(result);

// function func(input) {
//   var date = new Date();
//   var now = date.getTime();
//   var bd = Date.parse(input.value);
//   var period = Math.floor((bd - now) / 1000 / 60 / 60 / 24);
//   var result = document.getElementById("result");
//   result.innerHTML = period;
// }
// function fn() {
//   let elem = document.getElementById("111");
//   elem.value = parseInt(elem.value) + 1;
// }

// function fn1() {
//   clearInterval(start);
// }

// function timer() {
//   let inp = document.getElementById("111");
//   inp.innerHTML = Number(inp.innerHTML) - 1;
// }

// function fn() {
//   setInterval(timer, 1000);
// }

// function fn() {
//   const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
//   let slide = document.querySelector("#slideMy");
//   let img = document.querySelector("#imgs");
//   let i = 0;
//   setInterval(() => {
//     img.src = "../for TRYES/" + imgs[i];
//     i++;
//     if (i == imgs.length) {
//       i = 0;
//     }
//   }, 1000);
// }

// function timeTo() {
//   let date = new Date();
//   let hour = 23 - date.getHours();
//   let min = 59 - date.getMinutes();
//   let sec = 59 - date.getSeconds();
//   let p = document.querySelector("#timeTo");
//   sec <= 9 ? (sec = "0" + sec) : sec;
//   min <= 9 ? (min = "0" + min) : min;
//   hour <= 9 ? (hour = "0" + hour) : hour;
//   p.innerHTML = "<b class='clb'>" + hour + "</b>" + " : " + min + " : " + sec;

//   setInterval(timeTo, 1000);create-react-app

// let elem = document.getElementsByTagName("img");

// for (let i = 0; i < elem.length; i++) {
//   elem[i].onclick = fn;
// }

// function fn() {
//   alert(this.getAttribute("src"));
// }

// let elem = document.querySelector(".a");

// function fn() {
//   console.log("dw");
//   this.removeEventListener("click", fn);
// }

// this.addEventListener("click", fn);

// const elem1 = document.getElementsByTagName("a");
// const elem2 = document.getElementsByTagName("button");

// elem2.addEventListener("click", fn);

// elem1.addEventListener("click", fn);
// function fn(event) {
//   console.log("1");
// }

// let arr = [1, 4, 102, -4, -32, -3];
// let b = arr.sort((a, b) => a - b);
// console.log(b);

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//     this.gasTank = 100;
//     this.zapravka = [];
//   }
//   getGas() {
//     this.gasTank += 10;
//     const stamp = Date.now();
//     const time = new Date(stamp);
//     this.zapravka.push(time.toString());
//     return this.gasTank;
//   }
//   drive() {
//     this.gasTank -= 10;
//     return this.gasTank;
//   }
// }

// // создание дочернего класса

// class HybridCar extends Car {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }
// }

// const nissan = new Car("Nissan");
// const lexus = new HybridCar("Lexus", "RX");

// function Car(model, year) {
//   this.model = model;
//   this.year = year;
// }

// Car.prototype.beep = function () {
//   console.log(`${this.model} beep-beep`);
// };

// const car1 = new Car("bmw", 23);
// const car2 = new Car("honda");

// console.log(car1);
// console.log(car2);

// console.log(car2.beep());

// function Person(name, sex) {
//   this.name = name;
//   this.sex = sex;
// }

// Person.prototype.sayName = function () {
//   console.log(`my name is ${this.name}.`);
// };
