
var experience_template, skills_template, pres_template, edu_template;

$(document).ready(function(){
	//
	// compile all of our templates and send content
	//
	var source   = $("#experience-template").html();
	experience_template = Handlebars.compile(source);
	var html   = experience_template(resumedata);
	$('#expContent').html(html);

	source   = $("#skills-template").html();
	skills_template = Handlebars.compile(source);
	html   = skills_template(resumedata);
	$('#skillsContent').html(html);

	source   = $("#pres-template").html();
	pres_template = Handlebars.compile(source);
	html   = pres_template(resumedata);
	$('#presContent').html(html);

	source   = $("#edu-template").html();
	edu_template = Handlebars.compile(source);
	html   = edu_template(resumedata);
	$('#eduContent').html(html);

});
