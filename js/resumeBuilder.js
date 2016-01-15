/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
  "jobs": [
    {
      "title": "Customer Service",
      "employer": "Wishbone Design Studio",
      "dates": "Dec 2015 - Present",
      "location": "Wellington",
      "description": "Handled customer enquiries and complaints and processed orders."
    },
    {
      "title": "Administrative Assistant",
      "employer": "AnzaCBT",
      "dates": "Feb 2014 - Present",
      "location": "Wellington",
      "description": "Managed membership database, liaised with members, managed website content."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Learning Web Dev",
      "dates": "November 2015 - Present",
      "description": "Learning basics of HTML, CSS, JavaScript",
      "images": ["./images/197x148.gif", "./images/197x148.gif", "./images/197x148.gif"]
    }
  ]
};

var bio = {
  "name": "Daniel de la Cruz",
  "role": "Rookie web developer",
  "welcomeMessage": "Welcome to my resume site",
  "contacts": {
    "mobile": "(012) 345 6789",
    "email": "myemail@email.com",
    "github": "danieldelacruz01"
  },
  "skills": ["Customer service", "Languages", "Quick learner"]
};

var education = {
  "schools": [
    {
      "name": "Victoria University of Wellington",
      "city": "Wellington, New Zealand",
      "degree": ["BA", " BCom"],
      "majors": ["Media Studies", " Marketing"],
      "url": "http://www.victoria.ac.nz",
      "dates": "2012 - 2015  "
    }
  ],
  "onlineCourses": [
    {
      "name": "JavaScript Basics",
      "school": "Udacity",
      "dates": "Jan 2016",
      "url": "http://www.udacity.com"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);

var formattedBioPic = HTMLbioPic.replace("%data%", "./images/profile.jpg");
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub);
$("#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);  
}

var displayWork = function(){
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

// internationalize

// function inName(name){
//   var name = bio.name.split(" ");
//   console.log(name);
//   name[3] = name[3].toUpperCase();
//   name[2] = name[2].toUpperCase();
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() +  name[0].slice(1).toLowerCase();

//   var intlName = name.join(" ");

//   return intlName;
// }
// $("#main").append(internationalizeButton);


projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();

education.display = function() {
  for (edu in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
    $(".education-entry:last").append(formattedCity);

    var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
    $(".education-entry:last").append(formattedMajors);
    
  }
  for (course in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineClasses);

    var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
    $(".education-entry:last").append(formattedName);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);

  }
}

education.display();

$("#mapDiv").append(googleMap);