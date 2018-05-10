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
  //remove current results
  $('.result_cont').empty();

  //Create table
  var table = $('<table>', {
    class: "table table-striped table-sm"
  })
  //Create table headers append to table
  var table_headers = $('<thead>', {
    html: '<th scope="col">Name</th><th scope="col">Score</th><th scope="col">Your Answer</th>'
  })
  table.append(table_headers);
  //Create table body and add to table
  var table_body = $('<tbody>');
  table.append(table_body);

  //Create record and add to tbody
  for(var i=0;i<results.length;i++) {
    var person = results[i].username;
    var score = results[i].score;
    var answer = (results[i][surveyQuestions[question_counter].db]) ? results[i][surveyQuestions[question_counter].db] : '';
    var record = $('<tr>', {
      html: '<th scope="row">'+person+'</th><td>'+score+'</td><td>'+answer+'</td>'
    });

    table_body.append(record);
  }
  $('.result_cont').append(table);
}




//Present Question
function present_question(question, addPeople) {

  if(addPeople) {
      add_people();
  }
  //remove current question
  $('.question_cont').empty();

  //Create and add new question
  var q = $('<h3>',  {
    text: question
  });
  $('.question_cont').append(q);

  //Create and add "Show Answer" Button
  var theAnswer = "'"+ surveyQuestions[question_counter].a.a + "'";
  var property = "'"+ surveyQuestions[question_counter].db + "'";
  var revealAnswerBtn = $('<button>', {
    text: "Show Answer",
    onclick: "present_answer("+theAnswer+","+surveyQuestions[question_counter].p+","+property+")",
    class: "showAnswerBtn btn btn-info"
  })

  $('.question_cont').append(revealAnswerBtn);
}










function present_answer(answer, alotted_points, property) {
  //remove "Show Answer" Button
  $('.showAnswerBtn').remove();


  //Display Answer
  var a = $('<h2>',  {
    text: answer,
    class: "answer bg-info"
  });
  $('.question_cont').append(a);

  //update everyones score
  for(var i=0;i<results.length;i++) {
    if(results[i][property] === answer) {
      results[i].score += alotted_points;
    }
  }
  add_people();
  //Move to next question
  question_counter++;
  //If more questions
  if(question_counter<surveyQuestions.length) {
    //add next btn
    var q = '"'+ surveyQuestions[question_counter].q + '"';
    //add next button
    var nextQuestionBtn = $('<button>',  {
      text: "Next Question",
      onclick: "present_question("+q+", true)",
      class: "btn btn-primary"
    });

    $('.question_cont').append(nextQuestionBtn);
  } else {
    var finalQuestionBtn = $('<button>', {
      text: "Final Question",
      onclick: "present_question('What is the gender?', false)",
      class: "btn btn-danger"
    });

    $('.question_cont').append(finalQuestionBtn);
  }



}
