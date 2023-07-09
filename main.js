/*
Regular Experssion => used to search or replace any string(pattern).
1- email 
2- ip
3- phone
4- url
.....others 
 */
// syntax 
/*
1- / pattern / modifiers (flages)
2- new RegExp("pattern" , "modifiers");
*/
/*
modifiers
1- i => case-insenstive
2- g => global
3- m => multilines
*/
//match 
/*
1- match string with regular-experssion
2- return matchs in array if found reg-exp
3- if it is not found will return null
*/
// examples
let str = "hello elzero web school i love elzero";
let regexp = /Elzero/ig;
console.log(str.match(regexp));
/*
ranges
1- (a | b) => a or b
2- [0 - 9] => 0 to 9
3- [^ 0 - 9] => any character not 0 to 9
4- [a - z] => a to z
5- [^ a - z] => any character not a to z
6- [A - Z] => A to Z
7- [^ A - Z] => any character not A to Z
8- [abc] => any character of them but if all found will return them
9- [^abc] => not any character of them 
*/
// examples 
let tld = "com net org info code io";
let tldreg = /info|code|org/ig;    
console.log(tld.match(tldreg));

let nums = "12345678910";
let numreg = /[0-9]/ig;
let numreg2 = /[^0-2]/ig;
console.log(nums.match(numreg2)); // [3,4,5,6,7,8,9]
console.log(nums.match(numreg)); // [1,2,3,4,5,6,7,8,9,1,0]
 
let special = "1!2@3#456789 ^";
let spereg = /[^0-9]/ig;
console.log(special.match(spereg));

let practise = "os1 os1os os8 os8os";
let prareg = /os[5-9]os/ig;
console.log(practise.match(prareg));

let mystr = "AaBbCcDdEeFfGg12345678910^# @!~";
let strreg = /[a-z]/g;
let strreg2 = /[^a-z]/g;
let strreg3 = /[A-Z]/g;
let strreg4 = /[^A-Z]/g;
let strreg5 = /[abc]/g;
let strreg6 = /[^abc]/g;
let strreg7 = /[A-Za-z]/g;
let strreg8 = /[^A-Za-z]/g;
let strreg9 = /[A-Za-z0-9]/g;
let strreg10 = /[^A-Za-z0-9]/g;
let strreg11 = /[^A-Z^a-z0-9]/g;
console.log(mystr.match(strreg));
console.log(mystr.match(strreg2));
console.log(mystr.match(strreg3));
console.log(mystr.match(strreg4));
console.log(mystr.match(strreg5));
console.log(mystr.match(strreg6));
console.log(mystr.match(strreg7));
console.log(mystr.match(strreg8));
console.log(mystr.match(strreg9));
console.log(mystr.match(strreg10));
console.log(mystr.match(strreg11));
// character classes
/*
1- . | (dot) => match any character except newline
2- \w  => match any character[a-z] | [A-Z] | 0-9 and underscore
3- \W => not match any character , any digit and underscore
4- \d => match any digit 
5- \D => not match any digit
6- \s => match any whitespace
7- \S => not match any whitespace
8- \b => match the beginning ot ending of word \b(word) => begginning (word)\b => ending of word
9- \B => not match beginning ot ending of word
*/
// examples
let mail = "o@@@g...com o@g.com o@g.net A@%com 0-9.com o@s.org /@/.com";
let mailreg = /\w@\w.(com|net|org)/ig;
let dot = /./ig;
let word = /\w/ig;
console.log(mail.match(dot));
console.log(mail.match(word));
console.log(mail.match(mailreg));

let names = "sayed 1spam 2spam spam5 Aspamo";
let spareg = /spam/ig;
let spareg2 = /\bspam/ig;
let spareg3 = /spam\b/ig;
let or = /(\bspam|spam\b)/ig;
console.log(names.match(or));
console.log(names.match(spareg3));
console.log(names.match(spareg2));
console.log(names.match(spareg));
/*
/ pattern / modifiers.test(input);
*/
// test 
console.log(/r/.test("krr"));  // true

/*
quantifiers
1- n+ => one or more
2- n* => zero or more
3- n? => zero or one
4- n{x} => number of x
5- n{x,y} => range x to y
6- n{x,} => number x at least
7- $ => end with something
8- ^ => start with something
9- ?=word => followed by something
10- ?!word => not followed by something
*/
//examples
let numss = "0110 10 010 150 05120 0560 350 00";
let numssreg = /0\d+0/ig;
let numssreg2 = /0\d*0/ig;
console.log(numss.match(numssreg2));
console.log(numss.match(numssreg));

let urls = "https://google.com http://www.website.net web.com";
let urlreg = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlreg));

let serials = "s100s s3000s s50000s s950000000s";
let serreg = /s\d{3,}s/ig;
console.log(serials.match(serreg));

let mystring = "we love programming";
let mystring2 = "1osamaz 2ahmedz 3mahmoud 4moustafaz";
let strregg = /ing$/ig;
let strregg2 = /^we/ig;
let str_ = /\d\w{8}(?=z)/ig;
console.log(strregg.test(mystring));
console.log(strregg2.test(mystring));
console.log(mystring2.match(str_));

/*
replace("","");    replaceAll("","");
*/

let str_c = "w3schools@.com @ @ @ # @";

console.log(str_c.replace("@","js"));
console.log(str_c.replaceAll("@","js")); 

/*
search()
*/
let j = "w3school";
console.log(j.search("c"));
console.log(j.search(/[cho]/ig));
// \u nnnn => to get unicode character
let w = "w3school";
let r = /\u0057/ig
console.log(w.match(r));
console.log("w3school".match(/\u0057/ig));
// pattern.exec(input); => to match string to pattern 
let u = "i love js";
let ureg = /e\w?/ig;
console.log(ureg.exec(u));