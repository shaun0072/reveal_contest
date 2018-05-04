

//get user_id
var url_string = window.location.href;
var url = new URL(url_string);
var user_id = url.searchParams.get("user_id");

var answers = {};

var surveyQuestions = [
  {
    q: "Guess the baby's heartbeat at 19 weeks",
    a: {
      type: "radio",
      choice: ["110 - 125", "125 - 140", "140 - 155", "155 - 170"]
    },
    db: "last_hb"
  },
  {
    q: "Guess the mother's birth weight",
    a: {
      type: "radio",
      choice: ["6lbs", "7lbs", "8lbs", "9lbs"]
    },
    db:"mothers_bw"
  },
  {
    q: "Guess the father's birth weight",
    a: {
      type: "radio",
      choice: ["5lbs", "6lbs", "7lbs", "8lbs"]
    },
    db: "fathers_bw"
  },
  {
    q: "Guess the baby's weight at 19 weeks",
    a: {
      type: "radio",
      choice: ["4oz", "5oz", "6oz", "7oz"]
    },
    db: "babys_weight"
  },
  {
    q: "What are the Chanel's cravings",
    a: {
      type: "radio",
      choice: ["oranges and rare steak", "pickles and peanut butter", "Toilet Paper and Salmon", "none"]
    },
    db:"mothers_cravings"
  },
  {
    q: "Guess the mother's current weight",
    a: {
      type: "text",
      choice: ["lbs"]
    },
    db:"mothers_weight"
  },
  {
    q: "Guess the father's current weight",
    a: {
      type: "text",
      choice: ['lbs']
    },
    db:"fathers_weight"
  }
]


var counter = 0;

function nextQuestion() {

  $('.survey_cont').empty();

  if(counter < surveyQuestions.length) {
    var options = $('<div>');

    var question = $('<p>', {
      class: "question",
      text: surveyQuestions[counter].q
    });

    for(var i = 0; i < surveyQuestions[counter].a.choice.length; i++) {
      var label = $('<label>', {
        text: surveyQuestions[counter].a.choice[i]
      })

      var answer = $('<input>', {
        type: surveyQuestions[counter].a.type,
        class: "answer",
        value : surveyQuestions[counter].a.choice[i],
        name: surveyQuestions[counter].db
      });
      options.append(answer, label)
    }

    var nextBtn = $('<button>', {
      class: "next",
      text: 'Next',
      onclick: "nextQuestion()"
    })



    $('.survey_cont').append(question, options, nextBtn);

     counter++;
  }
}
nextQuestion();

$('.next').on("click", function() {
  console.log("test");
  if($('.answer').attr("type") === "radio") {
    var key = $('input:checked').attr('name');
    answers[key] = $('input:checked').val()
  }
})
