
var surveyJSON = {

 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "matrix",
     "name": "We .... Please indicate the degree to which you agree or disagree with the following statements using the scale below",
     "columns": [
      {
       "value": "1",
       "text": "Strongly Disagree "
      },
      "2",
      "3",
      "4",
      "5",
      "6",
      {
       "value": "7",
       "text": "Strongly Agree"
      }
     ],
     "rows": [
      {
       "value": "3",
       "text": "If I didn’t engage in proenvironmental behaviors, I would worry that others would think of me as a bad person"
      },
      {
       "value": "1",
       "text": "I am personally motivated by my concern for the environment to engage in proenvironmental behavior"
      },
      {
       "value": "2",
       "text": "I try to make decisions that are good for the environment because concern for the environment is central to my core values"
      },
      {
       "value": "4",
       "text": "It is important to me that other people are aware of the efforts I make to help protect the environment"
      },
      {
       "value": "5",
       "text": "I try to make proenvironmental decisions to avoid social disapproval"
      }
     ],
     "rowsOrder": "random",
     "isAllRowRequired": true
    }
   ],
   "questionTitleLocation": "top",
   "questionsOrder": "random"
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "matrix",
     "name": "Please indicate the degree to which you agree or disagree with the following statements using the scale below",
     "columns": [
      {
       "value": "1",
       "text": "Strongly Disagree "
      },
      "2",
      "3",
      "4",
      "5",
      "6",
      {
       "value": "7",
       "text": "Strongly Agree"
      }
     ],
     "rows": [
      {
       "value": "1",
       "text": "I avoid behaviors that would hurt the environment due to my personally important beliefs "
      },
      {
       "value": "2",
       "text": "I try to behave in proenvironmental ways because it is personally important to me "
      },
      {
       "value": "3",
       "text": "If I engage in behaviors that may be harmful to the environment, I feel like others judge me negatively"
      },
      {
       "value": "4",
       "text": "I am motivated to engage in behaviors that help protect the environment so that other people think I am a good person"
      }
     ],
     "isAllRowRequired": true
    }
   ],
   "questionTitleLocation": "top",
   "questionsOrder": "random"
  }
 ],
 "showPageTitles": false,
 "showCompletedPage": false,
 "questionsOrder": "random",
 "showQuestionNumbers": "off",
 "pageNextText": "Complete",
 "completeText": "Complete",
}

/* Send Ajax request to web server*/
function sendDataToServer(survey) {
    window.location.href="http://localhost:8080/selectcategory";
}

/*"new" will create the survey and store the information in the variable survey*/
var survey = new Survey.Model(surveyJSON);

$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
