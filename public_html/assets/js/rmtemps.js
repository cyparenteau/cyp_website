
var timeline_template, exe_template;

$(document).ready(function(){
	//
	// compile all of our templates and send content
	//
	var source   = $("#timeline-template").html();
	timeline_template = Handlebars.compile(source);
	var html   = timeline_template(rmannualdata);
	$('#timelineContent').html(html);

	source   = $("#exe-template").html();
  	exe_template = Handlebars.compile(source);
  	html   = exe_template(rmannualdata);
  	$('#exeContent').html(html);


});

