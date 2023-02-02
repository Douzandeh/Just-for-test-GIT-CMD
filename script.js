// let str = "324";
// let num = Number(str);
// alert(typeof num)
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
alert(Boolean(0)); // false
alert(Boolean(1)); // true
alert(Boolean("")) // false
alert(Boolean(" ")) // true