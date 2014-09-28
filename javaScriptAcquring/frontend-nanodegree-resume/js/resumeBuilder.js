
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

var skills=["JS","C++","Python","Ruby"];
//$("#main").append(skills.length);

var bio={
    "name" : "Bright Chu",
    "age"  : "27",
    "skills": skills ,
    "favorites":{
        "instruments": "guitar",
        "books": ["1984<br>","Kafka on the shore<br>"],
        "bands": "Beatles"
    }
};

bio.city = "Hangzhou";
bio["homeCity"] = "Nantong";

$("#main").append(bio.favorites.books);
$("#main").append(bio.city+"<br>");
$("#main").append(bio.homeCity+"<br>");
$("#main").append(bio["favorites"]["bands"]+"<br>");

//testing DOM (document object model) and element methods

// testing JSON. validate JSON format online http://jsonlint.com/, 
//take care only copy the object {...} other than the declaration of the object var obj={}; including the semicolon should be omitted.
var education = {
    "schools":[
    {
        "name" : "Zhejiang Univ",
        "city" : "Hangzhou",
        "degree" : "BA",
        "major" : ["Math", "EE"]
    },
    {
      "name" : "Beijing Univ",
        "city" : "Beijing",
        "degree" : "MS",
        "major" : ["EE"  ]
    }
    ]
};
console.log(education.schools[1].name);
$("#education").append("<p>"+education.schools[1].name+"</p>");

