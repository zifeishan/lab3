'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		// $('.jumbotron h1').text("Javascript is connected");

    $(this).text('Scotttt.');
    $(".jumbotron p").toggleClass("active");
	});

  $('.project').append("<div class='project-description'><p>(CNN) -- The University of Oklahoma in Norman briefly shut down Wednesday after a report of a possible shooting. No evidence has been found of any shots being fired, and no injuries have been reported, school spokeswoman Catherine Bishop said.</p></div>");

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
  $("a.thumbnail").click(projectClick);

  $('#submitBtn').click(function(e){
    // console.log(e);
    var proj = $('#projectForm #project').val();
    var width = $('#projectForm #width').val();
    var description = $('#projectForm #description').val();
    
    $(proj).animate({
      width: width
    });
    $(proj+' .project-description').text(description);
  })
}

function projectClick(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    // console.log(jumbotronHeader)
    // console.log(projectTitle)
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    // var containingProject = $(this).parent(".project"); 

    var description = $(containingProject).find(".project-description");
    description.fadeToggle();

//     if (description.length == 0) { 
//        $("<div class='project-description'><p>Description of the project.</p></div>")
//         .css({
//           display: 'hidden',
//           opacity: 0
//         })
//         .appendTo(containingProject)
//         .fadeIn();

//        description.fadeIn()
//     } 
//     // else if (description.style("")) {
//     //   description.fadeIn()
//     // }
//     else { 
//        description.fadeOut()
//     }
// 
}