var results = {};


var question_counter = 0;

function get_results() {
  $.ajax({
    url:"./php/get_results_handler.php",
    method:"POST",
    dataType: 'json',
    success: function(response) {
      results = response;
      add_people();
      present_question(surveyQuestions[question_counter].q);
    }
   });
}
get_results();


function add_people() {

  $('.result_cont').empty();
  for(var i=0;i<results.length;i++) {
    var person = results[i].username;
    var score = results[i].score;

    var list_of_people = $('<ul>', {
      html: '<li><span class="person">'+person+'</span>---<span class="result">'+score+'</span></li>'
    })

    $('.result_cont').append(list_of_people);
  }
}




//Present Question
function present_question(question) {
  // console.log(surveyQuestions[question_counter].a.a);
  // console.log(surveyQuestions[question_counter].p);
  $('.question_cont').empty();

  var q = $('<p>',  {
    text: question
  });

  $('.question_cont').append(q);

  var theAnswer = "'"+ surveyQuestions[question_counter].a.a + "'";
  var property = "'"+ surveyQuestions[question_counter].db + "'";

  var revealAnswerBtn = $('<button>', {
    text: "Show Answer",
    onclick: "present_answer("+theAnswer+","+surveyQuestions[question_counter].p+","+property+")",
    class: "showAnswerBtn"
  })

  $('.question_cont').append(revealAnswerBtn);
}










function present_answer(answer, alotted_points, property) {

  $('.showAnswerBtn').remove();
  question_counter++;

  var a = $('<p>',  {
    text: answer,
    class: "answer"
  });
  //show answer
  $('.question_cont').append(a);

  //update everyones score
  for(var i=0;i<results.length;i++) {
    if(results[i][property] === answer) {
      results[i].score += alotted_points;
    }
  }

  var q = '"'+ surveyQuestions[question_counter].q + '"';
  //add next button
  var nextQuestionBtn = $('<button>',  {
    text: "Next Question",
    onclick: "present_question("+q+")"
  });

  $('.question_cont').append(nextQuestionBtn);

  add_people();

}
