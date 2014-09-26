
var name="Liangliang"
// console.log(name);
var formattedName =HTMLheaderName.replace("%data%",name);
var role ="Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var oldName = "albERt EINstEiN";


    var finalName = oldName;
    // Your code goes here!
    var finalNameTemp=oldName.split(" ");
    
    //finalNameTemp[0]=finalNameTemp[0].toLowerCase();
    console.log( finalNameTemp[0][0]);
    //finalNameTemp[0][0]= finalNameTemp[0][0].toUpperCase();
    firstNameInit=finalNameTemp[0][0];
    firstNameInit=firstNameInit.toUpperCase();
    console.log( firstNameInit);

    // actually we dont need to be so silly
    //    finalNameTemp[0]=firstNameInit+finalNameTemp[0].slice(1);
    finalNameTemp[0]=finalNameTemp[0].slice(0,1).toUpperCase()+finalNameTemp[0].slice(1);
    console.log( finalNameTemp[0][0]);
    finalNameTemp[1]=finalNameTemp[1].toUpperCase();
    finalName=finalNameTemp[0]+" "+finalNameTemp[1];

    
    
    
    // Don't delete this line!


// Did your code work? The line below will tell you!
console.log(finalName);