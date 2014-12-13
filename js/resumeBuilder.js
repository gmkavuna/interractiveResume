//update image
var bioPic = "images/me.jpg";
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

//update HTMLheaderRole
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

//updating HTMLheaderName
var name = "Muhire Kavuna";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);





//update contacts 

var formatttedContactGeneric = HTMLcontactGeneric.replace("%contact%", "");
formatttedContactGeneric = formatttedContactGeneric.replace("%data%", "");
$("#topContacts").append(formatttedContactGeneric);

//add mobile 
var mobile = "555-555-5555";
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

//add email 
var email = "email@email.com";
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

//add email 
var email = "email@email.com";
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

/*
var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";
*/


//update welcome message
var welcomeMessage = "Welcome to my resume page!";
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcome);

//skills title
$("#header").append(HTMLskillsStart);

//dealing with skills 
var skills = ["oop", "php programming", "HTML/CSS", "database design", "responsive design"];
var skillsString = "";

for (var i = 0; i < skills.length; i++){
	if (i == 0){
		skillsString += skills[i];
	}
	else{
		skillsString += ", " + skills[i];
	}
}
var formattedSkills = HTMLskills.replace("%data%", skillsString);
$("#header").append(formattedSkills);


var work = {};

work.position = "web developer"; 
work.employer = "Optis Ltd";
work.city = "Dayton";
work.years = 4;

var education = {
		"schools": [
			{
				"name" : "Sinclair Community College", 
				"city" : "Dayton, Ohio",
				"degree" : "AAS",
				"major" : "Computer Information Systems",
				"dates" : "Expected August 2015"
			},
			{
				"name" : "Udacity", 
				"city" : "Mountain View, California",
				"degree" : "Nanodegree",
				"major" : "Front-End Development",
				"dates" : "Expected May 2015"
			},
			{
				"name" : "Univeristy of Illinois", 
				"city" : "Urbana-Champaigne, Illinois",
				"degree" : "Professional Certificate",
				"major" : "PHP/Mysql Programming",
				"dates" : "June 2014"
			}
		]
}

//experience object
var experience = {
		"work": [
			{
				"employer" : "Maxinet Group", 
				"position" : "Web developer",
				"location" : "Kigali, Rwanda",
				"dates" : "June 2009 - August 2010",
				"responsibilities" : "Development and Maintenance of websites"
			},
			{
				"employer" : "Optis Ltd", 
				"position" : "Web Developer",
				"location" : "Kigali, Rwanda",
				"dates" : "August 2010 - February 2014",
				"responsibilities" : "Development and Maintenance of websites"
			},
			{
				"client" : "Hygebat Ltd", 
				"position" : "Web developer Consultant",
				"location" : "Kigali, Rwanda",
				"dates" : "April 2013 - July 2013",
				"responsibilities" : "Website redevelopment"
			}
		
		]
}

//dealing with work experience 

$("#workExperience").append(HTMLworkStart);
for (jobs in experience.work){
	//start the work entry
	
	
	//get employer name 
	var employer = experience.work[jobs].employer; 
	var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);

	
	//get position 
	var position = experience.work[jobs].position;
	var formattedPosition = HTMLworkTitle.replace("%data%", position);
	$(".work-entry:last").append(formattedEmployer + formattedPosition);
	
	
	//dealing with dates
	var dates = experience.work[jobs].dates;
	var formattedDate = HTMLworkDates.replace("%data%", dates);
	$(".work-entry:last").append(formattedDate);
	
	//adding a description 
	var description = experience.work[jobs].responsibilities;
	var formattedDescription = HTMLworkDescription.replace("%data%", description);
	$(".work-entry:last").append(formattedDescription);
	
}

//dealing with eduaction
$("#education").append(HTMLschoolStart);
for (schools in education.schools){
	
	var school = education.schools[schools].name; 
	var formattedSchool = HTMLschoolName.replace("%data%", school);
	
	//get degree name  
	var degree = education.schools[schools].degree;
	var formattedDegree = HTMLschoolDegree.replace("%data%", degree);
	$(".education-entry:last").append(formattedSchool + formattedDegree);
	
	//dealing with dates
	var dates = education.schools[schools].dates;
	var formattedDates = HTMLschoolDates.replace("%data%", dates);
	$(".education-entry:last").append(formattedDates);
	 
	//dealing with major 
	var major = education.schools[schools].major;
	var formattedMajor = HTMLschoolMajor.replace("%data%", major);
	$(".education-entry:last").append(formattedMajor);
	
	
	/*
	var HTMLschoolStart = "<div class='education-entry'></div>"
	var HTMLschoolName = "<a href='#'>%data%";
	var HTMLschoolDegree = " -- %data%</a>";
	var HTMLschoolDates = "<div class='date-text'>%data%</div>";
	var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
	var HTMLschoolMajor = "<em><br>Major: %data%</em>"
*/
	
}

//adding the map

$("#mapDiv").append(googleMap);


/*		  
$("#main").append("Experience: " + work.years);
$("#main").append(education["city"]);

if (skills.length > 0){
	$("#main").append("Skills: " + skills);
	
}
*/
