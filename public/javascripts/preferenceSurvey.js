

var surveyJSON = {"title":"Internal and External Motivation","description":"We are interested in the reasons people may or may not be motivated to engage in proenvironmental behavior – that is, behavior intended to protect the environment and be good for the planet. People may have personal reasons they are motivated, social reasons for their motivation, multiple reasons, or not be concerned about these issues. There are no right or wrong answers to the following questions so please be as open and honest as possible in your answers. Please indicate the degree to which you agree or disagree with the following statements using the scale below. There are no right or wrong answers to the following questions so please be as open and honest as possible in your answers. ","completedHtml":"<br>\n</br>","loadingHtml":"http://localhost:8080/selectcategory","pages":[{"name":"page1","elements":[{"type":"matrix","name":"Please indicate the degree to which you agree or disagree with the following statements using the scale below","columns":[{"value":"1","text":"strongly disagree "},"2","3","4","5","6",{"value":"7","text":"strongly agree"}],"rows":[{"value":"1","text":"I avoid behaviors that would hurt the environment due to my personally important beliefs"},{"value":"2","text":"I try to behave in proenvironmental ways because it is personally important to me"},{"value":"3","text":"I am personally motivated by my concern for the environment to engage in proenvironmental behavior"},{"value":"4","text":"I try to make decisions that are good for the environment because concern for the environment is central to my core values"},{"value":"Row 5","text":"If I engage in behaviors that may be harmful to the environment, I feel like others judge me negatively "},{"value":"Row 6","text":"I am motivated to engage in behaviors that help protect the environment so that other people think I am a good person "},{"value":"Row 7","text":"If I didn’t engage in proenvironmental behaviors, I would worry that others would think of me as a bad person"},{"value":"Row 8","text":"It is important to me that other people are aware of the efforts I make to help protect the environment"},{"value":"Row 9","text":"I try to make proenvironmental decisions to avoid social disapproval"}],"isAllRowRequired":true}]}],"showPrevButton":false,"showCompletedPage":false,"showQuestionNumbers":"off","goNextPageAutomatic":true,"completeText":"Complete"}

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
