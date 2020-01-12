
var surveyJSON = {
  surveyId:'89cb778e-30b0-4296-b8ac-1e9dba8ba457',
  surveyPostId: '05d3b083-cb66-498f-9d28-112202924096'
};


/*var surveyJSON = {
 title: "Environmental Attitude",
 completedHtml: "<br>",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "matrix",
     name: "Please indicate the degree to which you agree or disagree with the following statements.",
     columns: [
      {
       value: "Column 1",
       text: "Strongly Agree"
      },
      {
       value: "Column 2",
       text: "2"
      },
      {
       value: "Column 3",
       text: "3"
      },
      {
       value: "Column 4",
       text: "4"
      },
      {
       value: "Column 5",
       text: "Strongly Disagree"
      }
     ],
     rows: [
      {
       value: "Row 1",
       text: "We are approaching the limit of the number of people the earth can support"
      },
      {
       value: "Row 2",
       text: "Humans have the right to modify the natural environment to suit their needs"
      },
      {
       value: "Row 3",
       text: "Humans are severely abusing the environment"
      },
      {
       value: "Row 4",
       text: "Human ingenuity will insure that we do NOT make the earth unlivable"
      },
      {
       value: "Row 5",
       text: "Plants and animals have as much right as humans to exist"
      },
      {
       value: "Row 6",
       text: "When humans interfere with nature it often produces disastrous consequences"
      },
      {
       value: "Row 7",
       text: "The earth has plenty of natural resources if we just learn how to develop them"
      },
      {
       value: "Row 8",
       text: "The balance of nature is strong enough to cope with the impacts of modern industrial nations"
      }
     ],
     isAllRowRequired: true
    }
   ],
   questionsOrder: "random"
  },
  {
   name: "page2",
   elements: [
    {
     type: "matrix",
     name: "Please indicate the degree to which you agree or disagree with the following statements ",
     columns: [
      {
       value: "Column 1",
       text: "Strongly Agree"
      },
      {
       value: "Column 2",
       text: "Mildly Agree "
      },
      {
       value: "Column 3",
       text: "Unsure"
      },
      {
       value: "Column 4",
       text: "Mildly Disagree "
      },
      {
       value: "Column 5",
       text: "Strongly Disagree"
      }
     ],
     rows: [
      {
       value: "Row 1",
       text: "Despite our special abilities humans are still subject to the laws of nature"
      },
      {
       value: "Row 2",
       text: "The so-called “ecological crisis” facing humankind has been greatly exaggerated"
      },
      {
       value: "Row 3",
       text: "The earth is like a spaceship with very limited room and resources"
      },
      {
       value: "Row 4",
       text: "Humans were meant to rule over the rest of nature"
      },
      {
       value: "Row 5",
       text: "The balance of nature is very delicate and easily upset"
      },
      {
       value: "Row 6",
       text: "Humans will eventually learn enough about how nature works to be able to control it"
      },
      {
       value: "Row 7",
       text: "If things continue on their present course, we will soon experience a major ecological catastrophe"
      }
     ],
     isAllRowRequired: true
    }
   ],
   questionsOrder: "random"
  }
 ],
 cookieName: "OnlyOnce",
 showTitle: false,
 showPageTitles: false,
 showCompletedPage: false,
 questionsOrder: "random",
 showQuestionNumbers: "off",
 pageNextText: "Complete"
}
*/


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
