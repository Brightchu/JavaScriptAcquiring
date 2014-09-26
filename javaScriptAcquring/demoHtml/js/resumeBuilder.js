$("#main").append("÷Ï¡¡¡¡<br>");
var name="liangliang"
console.log(name);

var re = /apples/gi;
var str = "Apples are round, and apples are juicy.<br>";
var newstr = str.replace(re, "oranges");
console.log(newstr);
$("#main").append(str);
$("#main").append(newstr);

var re2 = /li/gi;
var str2 = "liangliang<br>";
var newstr2 = str2.replace(re2, "Li");
console.log(newstr2);
$("#main").append(str2);
$("#main").append(newstr2);

// "gi" seems not function in this way
//var re2 = /li/gi;
var str2 = "liangliang<br>";
var newstr2 = str2.replace("li", "Li","gi");
console.log(newstr2);
$("#header").append(newstr2);