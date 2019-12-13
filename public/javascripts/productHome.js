/* Survey is a widget provided by jquery dependency*/

Survey
    .StylesManager
    .applyTheme("bootstrap");


var json = {
  /*Use cookie to run survey one time in a browser
    cookieName: "myuniquesurveyid",*/
    "elements": [
        {
            "type": "imagepicker",
            "name": "choosepicture",
            "title": "Which of the following products do you prefer to buy ?",
            "isRequired": true,
            "choices": [
                {
                    "value": "Flasche_normal",
                    "imageLink": "https://amp.sportscheck.com/i/sportscheck/D1000010011399467/soulbottles-souldiver-trinkflasche-transparent-blau?$epd_viewer_2000x2000$&fmt=webp"
                }, {
                    "value": "Flasche_environment",
                    "imageLink": "https://amp.sportscheck.com/i/sportscheck/D1000010011399467/soulbottles-souldiver-trinkflasche-transparent-blau?$epd_viewer_2000x2000$&fmt=webp"
                }, {
                    "value": "Basket_normal",
                    "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61UTLFjefZL._SL1200_.jpg"
                }, {
                    "value": "Basket_environment",
                    "imageLink": "https://images-na.ssl-images-amazon.com/images/I/61UTLFjefZL._SL1200_.jpg"
                }, {
                    "value": "Cutlery_normal",
                    "imageLink": "data:image/jpeg;base64,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"
                }, {
                    "value": "Cutlery_environment",
                    "imageLink": "data:image/jpeg;base64,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"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

/* When completed - save into json*/
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

/*Functions included in the survey widget*/
survey.showQuestionNumbers = 'false';
survey.completedHtml = 'http://localhost:8080/surveyandfeedback';


/* survey style customization
    survey
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses

        classes.mainRoot += " sv_qstn";
        classes.root = "sq-root";
        classes.title += " sq-title"
        classes.item += " sq-item";
        classes.label += " sq-label";

        if (options.question.isRequired) {
            classes.title += " sq-title-required";
            classes.root += " sq-root-required";
        }

        if (options.question.getType() === "checkbox") {
            classes.root += " sq-root-cb";
        }
    }); */


$("#surveyElement").Survey({model: survey});
