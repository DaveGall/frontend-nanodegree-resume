/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*********** While Loop ****************
 var myNewJobs = {};
 myNewJobs.job  = "Helper";
 var courses = 0;
 var myJobs = function(){
      console.log("Made a course");
};
 while (myNewJobs.job === "Helper"){
    myJobs();
    courses = courses + 1;
    if(courses === 10){
        myNewJobs.job = "Retired";
    }
}
 console.log(myNewJobs.job);

 /*********** For Loop ***********************

for (var i = 0; i<9; i++){
    console.log(i);
}

 /*********** For-in Loop for Objects and Arrays *******************************

 var countries = ["Brazil", "Netherlands", "Argentina", "France"];

 for (country in countries){
    console.log(countries[country]);
}



//$("#main").append("Dave");
//var awesomeThoughts = "I am Dave and I am AWESOME!!";
//console.log(awesomeThoughts);
/*var email = "dlaker74@yahoo.com";
var newEmail = email.replace("yahoo", "gmail");
console.log(email);
console.log(newEmail);*/
//var funThoughts = awesomeThoughts.replace("AWESOME", "Fun");
//$("#main").append(funThoughts);
//var name = "Dave Gall";
//var role = "Web Developer";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedName).append(formattedRole);

/*var s = "audacity";
var udacytizer = function () {
         return s.replace("audacity", "Udacity");

};
console.log(udacytizer(s));
var skills = ["HTML", "CSS", "JavaScript and jQuery", "Bootstrap", "some PHP"];

var sampleArray = [0,0,7];
var incrementLastElement = function (_array) {
    var newArray = _array;
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
};
console.log(incrementLastElement(sampleArray));
var myname = "slIM sHADy";

var changeName = function (name) {
    var b = name.split(" ");
    var firstNameRest = b[0].slice(1).toLowerCase();
    var firstName = b[0].slice(0,1).toUpperCase();
    var lastName = b[1].toUpperCase();
    var completeFirstName = firstName+firstNameRest;
    return completeFirstName+" "+lastName;
};
console.log(changeName(myname));

 bio.state = "Oregon";//dot notation
 bio["city"] = "Ashland";//bracket notation
 //work.position = Owner Dot Notation
 //education["name"] = Full Sail University Bracket Notation




 /*var html = '<script src="http://www.hackyourwebsite.com/javascript/"></script>';
 var charEscape = function (_html) {
 var newHTML = _html.replace(/</g, "").replace(/>/g, ""); Global replace, will replace all occurrences.

 return newHTML
 };

 console.log(charEscape(html));*/




/********Bio Information*************/


var bio = {
    "name": "Dave Gall",
    "role": "Web Designer and Developer",
    "contacts": {
        "mobile": "(541) 690-7767",
        "email": "dlaker74@yahoo.com",
        "github": "DaveGall",
        "address": "Ashland, OR"
    },
    "pic": "images/me.jpg",
    "welcome": "Hello my name is Dave and I am a recent graduate from Full Sail University. I graduated with a BS in Web Design and Development.",
    "skills": ["HTML", "CSS", "JavaScript and jQuery", "Bootstrap", "some PHP"]
};



/*********Work Information**************************/

var work = {
    "jobs": [
        {
            "business": "Ashland Community Hospital",
            "address": "280 Maple St., Ashland, Or. 97520",
            "yearsWorked": "1994 - 2013",
            "position": "Kitchen Lead/Caterer",
            "description": "Ran kitchen operations for the last eight years I was there. Took care of scheduling, employee progress reports, discipline issues, cooked, catered, had to know all the jobs in the kitchen so I could cover when needed, ordered weekly supplies and was involved in larger purchases for aging equipment, I was also involved in setting up and keeping tabs on the departments time management system."
        },
        {
            "business": "Geno's Mexican Restaurant",
            "address": "102 S. Main st., Phoenix, Or. 97535",
            "yearsWorked": "2014 - 2016",
            "position": "Owner Operator",
            "description": "Involved in set up of marketing, social media accounts, creating a banner and a website for our new business. Set up the POS system, wireless network, and the entertainment area. When open I would run the register so I would be the first and last person customers would interact with, this was ideal for me so that I new our customer service was excellent."
        }
    ]
};



function displayWork(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var business = HTMLworkEmployer.replace("%data%", work.jobs[job].business);
        var position = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedTitle = business + position;
        var years = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
        var address = HTMLworkLocation.replace("%data%", work.jobs[job].address);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedTitle).append(years).append(address).append(description);

    }
}
displayWork();
/*********Education Information**************************/

var education = {
    "schools": [
        {
            "name": "Ashland High School",
            "city": "Ashland, Or",
            "degrees": "General Ed",
            "yearGrad": "1992"
        },
        {
            "name": "Full Sail University",
            "city": "Winter Park, Florida",
            "degrees": "Bachelors of Science",
            "yearGrad": "2014 - 2016",
            "majors": "Web Design and Development"
        }
    ],
    "onlineCourses": [
        {
            "title":"JavaScript Basics",
            "school": "Udacity",
            "dates": "February 2017",
            "url": "https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19506785590923"
        }

    ]
};

var schoolName = HTMLschoolName.replace("%data%", education.schools[1].name);
var degrees = HTMLschoolDegree.replace("%data%", education.schools[1].degrees);
var schoolDates = HTMLschoolDates.replace("%data%", education.schools[1].yearGrad);
var schoolCity = HTMLschoolLocation.replace("%data%", education.schools[1].city);
var major = HTMLschoolMajor.replace("%data%", education.schools[1].majors);

var schoolName2 = HTMLschoolName.replace("%data%", education.schools[0].name);
var degrees2 = HTMLschoolDegree.replace("%data%", education.schools[0].degrees);
var schoolDates2 = HTMLschoolDates.replace("%data%", education.schools[0].yearGrad);
var schoolCity2 = HTMLschoolLocation.replace("%data%", education.schools[0].city);


$("#education").append(HTMLschoolStart).append(schoolName).append(degrees).append(schoolDates).append(schoolCity).append(major).append(schoolName2).append(degrees2).append(schoolDates2).append(schoolCity2);


/*********Project Information**************************/

var projects = {
    "project" : [
        {
            "name": "http://www.genosmexicanrestaurant.com Geno's Mexican Restaurant",
            "type": "Website/Design",
            "dates": "2014",
            "image": "images/genos_.jpg",
            "description": "My first website that I built for a live company. Linked to social media, Yelp, and others which greatly increased foot traffic. I took and edited the pictures on the site to try and make the food look as appetizing as it was."
        },
        {
            "name": "http://davegall.github.io/WiU/Landing_Page/index.html World Surf Project",
            "type": "Landing Page for Test Results",
            "dates": "2014",
            "image": "images/worldsurf_.jpg",
            "description": "Created a landing page for a fictional company called World Surf and submitted our wireframes for testing on Usability Hub."
        },
        {
            "name": "http://www.casinosonthestrip.com Casinos on the Strip",
            "type": "Bootstrap Front Page",
            "dates": "2014",
            "image": "images/casinosStrip_.jpg",
            "description": "This was a project where we had to choose a framework to work with and settled on Bootstrap. I went in thinking I wouldn't like it but I am a huge fan of Bootstrap now."
        },
        {
            "name": "http://davegall.github.io/DWS2/Week4_Project/index.html Oregon Beaches",
            "type": "Website",
            "dates": "2014",
            "image": "images/beaches.jpg",
            "description": "Project to use different media, and we had to create our own css and not use a framework."
        }
    ]
};

var projTitle = HTMLprojectTitle.replace("%data%", projects.project[0].name);
var projDate = HTMLprojectDates.replace("%data%", projects.project[0].dates);
var projDescription = HTMLprojectDescription.replace("%data%", projects.project[0].description);
var projImage = HTMLprojectImage.replace("%data%", projects.project[0].image);

var projTitle2 = HTMLprojectTitle.replace("%data%", projects.project[1].name);
var projDate2 = HTMLprojectDates.replace("%data%", projects.project[1].dates);
var projDescription2 = HTMLprojectDescription.replace("%data%", projects.project[1].description);
var projImage2 = HTMLprojectImage.replace("%data%", projects.project[1].image);

var projTitle3 = HTMLprojectTitle.replace("%data%", projects.project[2].name);
var projDate3 = HTMLprojectDates.replace("%data%", projects.project[2].dates);
var projDescription3 = HTMLprojectDescription.replace("%data%", projects.project[2].description);
var projImage3 = HTMLprojectImage.replace("%data%", projects.project[2].image);

var projTitle4 = HTMLprojectTitle.replace("%data%", projects.project[3].name);
var projDate4 = HTMLprojectDates.replace("%data%", projects.project[3].dates);
var projDescription4 = HTMLprojectDescription.replace("%data%", projects.project[3].description);
var projImage4 = HTMLprojectImage.replace("%data%", projects.project[3].image);

$("#projects").append(HTMLprojectStart).append(projTitle).append(projDate).append(projDescription).append(projImage).append(projTitle2).append(projDate2).append(projDescription2).append(projImage2).append(projTitle3).append(projDate3).append(projDescription3).append(projImage3).append(projTitle4).append(projDate4).append(projDescription4).append(projImage4);


var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var bioAddress = HTMLlocation.replace("%data%", bio.contacts.address);
var mainName = HTMLheaderName.replace("%data%", bio.name);
var myRole = HTMLheaderRole.replace("%data%", bio.role);
var avatar = HTMLbioPic.replace("%data%", bio.pic);
var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var mySkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(mainName).append(myRole).append(avatar).append(mobile).append(email).append(github).append(bioAddress).append(welcome);

if(bio.skills !== ""){
    $("#header").append(HTMLskillsStart);

    for(i=0;i<bio.skills.length;i++){
        var skillSet = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(skillSet);
    }

}



















