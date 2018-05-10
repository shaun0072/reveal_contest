

//get user_id
var url_string = window.location.href;
var url = new URL(url_string);
var user_id = url.searchParams.get("user_id");

var answers = {"user_id": user_id};

var surveyQuestions = [
  {
    q: "Guess the baby's heartbeat at 19 weeks",
    a: {
      type: "radio",
      choice: ["110 - 125", "125 - 140", "140 - 155", "155 - 170"],
      a: "110 - 125"
    },
    p: 20,
    db: "last_hb"
  },
  {
    q: "Guess the mothers birth weight",
    a: {
      type: "radio",
      choice: ["6lbs", "7lbs", "8lbs", "9lbs"],
      a: "6lbs"
    },
    p: 20,
    db:"mothers_bw"
  },
  {
    q: "Guess the father's birth weight",
    a: {
      type: "radio",
      choice: ["5lbs", "6lbs", "7lbs", "8lbs"],
      a: "6lbs"
    },
    p: 20,
    db: "fathers_bw"
  },
  {
    q: "Guess the baby's weight at 19 weeks",
    a: {
      type: "radio",
      choice: ["4oz", "5oz", "6oz", "7oz"],
      a: "4oz"
    },
    p: 20,
    db: "babys_weight"
  },
  {
    q: "What are the Chanel's cravings",
    a: {
      type: "radio",
      choice: ["oranges and rare steak", "pickles and peanut butter", "Toilet Paper and Salmon", "none"],
      a: "oranges and rare steak"
    },
    p: 20,
    db:"mothers_cravings"
  },
  {
    q: "Guess the mother's current weight",
    a: {
      type: "number",
      a: "105"
    },
    p: 40,
    db:"mothers_weight"
  },
  {
    q: "Guess the father's current weight",
    a: {
      type: "number",
      a: "197"
    },
    p: 40,
    db:"fathers_weight"
  }
]


var counter = 0;

function nextQuestion() {

  //add answer for radio
  if($('.answer').attr("type") === "radio") {
    var key = $('input:checked').attr('name');
    answers[key] = $('input:checked').val()
  }

  //add answer for fill-in
  if($('.answer').attr("type") === "number") {
    var key = $('input').attr('name');
    answers[key] = $('input').val()
  }

  //empty current question
  $('.survey_cont').empty();

  //check if more questions
  if(counter < surveyQuestions.length) {
    var options = $('<div>');

    var question = $('<h4>', {
      class: "question",
      text: surveyQuestions[counter].q
    });

    //add multiple choice
    var br = $('<br />');
    var answer;
    if(surveyQuestions[counter].a.type === "radio") {
      for(var i = 0; i < surveyQuestions[counter].a.choice.length; i++) {
        var container = $('<div>', {
          class: "form-check"
        });

        var label = $('<label>', {
          text: surveyQuestions[counter].a.choice[i],
          class: "form-check-label"
        })

        answer = $('<input>', {
          type: surveyQuestions[counter].a.type,
          class: "answer form-check-input",
          value : surveyQuestions[counter].a.choice[i],
          name: surveyQuestions[counter].db
        });

        container.append(answer,label);
        options.append(container);
      }
    } else {
      var answer = $('<input>', {
        type: surveyQuestions[counter].a.type,
        class: "answer radio",
        name: surveyQuestions[counter].db
      });

      options.append(answer, br);
    }


    var nextBtn = $('<button>', {
      class: "next btn btn-primary",
      text: 'Next',
      onclick: "nextQuestion()"
    })

    $('.survey_cont').append(question, options, nextBtn);

  }

  //check if no more surveyQuestions
  if(counter === surveyQuestions.length) {
    var submitAnswers = $('<button>', {
      class: "submit",
      text: 'Submit Answers',
      onclick: "submitAnswers()"
    });

    $('.survey_cont').append(submitAnswers);

  }

  counter++;
}
function submitAnswers() {
  console.log(answers);
  //send answers
  $.ajax({
    url:"./php/answers_handler.php",
    method:"POST",
    dataType: 'json',
    data: answers,
    complete: function(response) {
      console.log(response);
    }
   });
}

$(document).ready(function() {
  nextQuestion();
})
