$(function() {

  $.ajax({
      url: 'https://www.codeschool.com/users/philippexe.json',
      dataType: 'jsonp',
      success: function(response) {
        console.log('response', response.courses.completed);
        addCourses(response.courses.completed);
      }
    });

    function addCouses(courses) {
    var $abzeichen = $('#badges');
    courses.forEach(function(course) {
      $('<div />', {
        'class': 'course'
      }).appendTo($abzeichen);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);
    })

  }
});
