
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

if (bio.skills.length>0){
    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkills);
};

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

// var HTMLschoolStart = "<div class='education-entry'></div>";
// var HTMLschoolName = "<a href='#'>%data%";
// var HTMLschoolDegree = " -- %data%</a>";
// var HTMLschoolDates = "<div class='date-text'>%data%</div>";
// var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
// var HTMLschoolMajor = "<em><br>Major: %data%</em>"
$("#education").append(HTMLschoolStart);

for (var i=0; i<education.schools.length;i++){
   var formattedEdu = HTMLschoolName.replace("#","http://www.zju.edu.cn").replace("%data%", education.schools[i].name)+HTMLschoolDegree.replace("%data%",education.schools[i].degree)+"\n"+HTMLschoolDates+HTMLschoolLocation.replace("%data%",education.schools[i].city)+"\n"+HTMLschoolMajor.replace("%data%",education.schools[i].major);
   console.log(formattedEdu);
   $(".education-entry:last").append(formattedEdu);
}


var workExp = {
    "jobs" :[
    {
        "company":"Huawei",
        "title" : "engnineer",
        "workdate" : "2015-2016",
        "location" : "Hangzhou",
        "description" : "5G wireless network researching"
    },
    {
        "company":"Alibaba",
        "title" : "Programme Manager",
        "workdate" : "since 2016",
        "location" : "Hangzhou",
        "description" : "future Internet products"
    }
    ]
};

console.log("worExp's lenght is "+workExp.jobs.length);
console.log(workExp.jobs.length!==0);
// var HTMLworkStart = "<div class='work-entry'></div>";
// var HTMLworkEmployer = "<a href='#'>%data%";
// var HTMLworkTitle = " - %data%</a>";
// var HTMLworkDates = "<div class='date-text'>%data%</div>";
// var HTMLworkLocation = "<div class='location-text'>%data%</div>";
// var HTMLworkDescription = "<p><br>%data%</p>";
if (workExp.jobs.length!==0){    
  for( tempJobs in workExp.jobs){
    console.log(workExp.jobs[tempJobs].company);

    $("#workExperience").append(HTMLworkStart);

    var htmlJobs = HTMLworkEmployer.replace("%data%",workExp.jobs[tempJobs].company)+HTMLworkTitle.replace("%data%",workExp.jobs[tempJobs].title)+HTMLworkDates.replace("%data%",workExp.jobs[tempJobs].workdate)+HTMLworkLocation.replace("%data%",workExp.jobs[tempJobs].location)+HTMLworkDescription.replace("%data%",workExp.jobs[tempJobs].description);
    $(".work-entry:last").append(htmlJobs);
    console.log(htmlJobs);
}
}