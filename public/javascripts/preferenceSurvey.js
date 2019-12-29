
var surveyJSON = {
 "completedHtml": "<br>\n</br>",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "matrix",
     "name": "Finally we have a few questions about yourself. Please indicate the degree to which you agree or disagree with the following statements",
     "columns": [
      {
       "value": "1",
       "text": "Strongly Agree"
      },
      {
       "value": "2",
       "text": "Mildly Agree "
      },
      {
       "value": "3",
       "text": "Unsure"
      },
      {
       "value": "4",
       "text": "Mildly Disagree "
      },
      {
       "value": "5",
       "text": "Strongly Disagree"
      }
     ],
     "rows": [
      {
       "value": "8",
       "text": "The balance of nature is strong enough to cope with the impacts of modern industrial nations"
      },
      {
       "value": "4",
       "text": "Human ingenuity will insure that we do NOT make the earth unlivable"
      },
      {
       "value": "5",
       "text": "Humans are severely abusing the environment"
      },
      {
       "value": "2",
       "text": "Humans have the right to modify the natural environment to suit their needs"
      },
      {
       "value": "3",
       "text": "When humans interfere with nature it often produces disastrous consequences"
      },
      {
       "value": "6",
       "text": "The earth has plenty of natural resources if we just learn how to develop them"
      },
      {
       "value": "7",
       "text": "Plants and animals have as much right as humans to exist"
      },
      {
       "value": "1",
       "text": "We are approaching the limit of the number of people the earth can support"
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
     "name": "Please indicate the degree to which you agree or disagree with the following statements ",
     "columns": [
      {
       "value": "1",
       "text": "Strongly Agree"
      },
      {
       "value": "2",
       "text": "Mildly Agree "
      },
      {
       "value": "3",
       "text": "Unsure "
      },
      {
       "value": "4",
       "text": "Mildly Disagree"
      },
      {
       "value": "5",
       "text": "Strongly Disagree"
      }
     ],
     "rows": [
      {
       "value": "1",
       "text": "Despite our special abilities humans are still subject to the laws of nature"
      },
      {
       "value": "2",
       "text": "The so-called “ecological crisis” facing humankind has been greatly exaggerated"
      },
      {
       "value": "3",
       "text": "The earth is like a spaceship with very limited room and resources"
      },
      {
       "value": "4",
       "text": "Humans were meant to rule over the rest of nature"
      },
      {
       "value": "5",
       "text": "The balance of nature is very delicate and easily upset"
      },
      {
       "value": "6",
       "text": "Humans will eventually learn enough about how nature works to be able to control it"
      },
      {
       "value": "7",
       "text": "If things continue on their present course, we will soon experience a major ecological catastrophe"
      }
     ],
     "isAllRowRequired": true
    }
   ],
   "questionTitleLocation": "top",
   "questionsOrder": "random"
  }
 ],
 "showCompletedPage": false,
 "questionsOrder": "random",
 "showQuestionNumbers": "off",
 "pageNextText": "Complete",
 "completeText": "Complete",
}
/* Send Ajax request to web server*/
function sendDataToServer(survey) {
    window.location.href="http://localhost:8080/surveyandfeedback";
}

/*"new" will create the survey and store the information in the variable survey*/
var survey = new Survey.Model(surveyJSON);

$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
