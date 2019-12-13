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
                    "value": "Phone_normal",
                    "imageLink": "https://www.target.com.au/medias/static_content/product/images/full/28/89/A1382889.jpg?impolicy=mobile_hero"
                }, {
                    "value": "Phone_environment",
                    "imageLink": "https://www.target.com.au/medias/static_content/product/images/full/28/89/A1382889.jpg?impolicy=mobile_hero"
                }, {
                    "value": "Speaker_normal",
                    "imageLink": "https://www.bigw.com.au/medias/sys_master/images/images/hb1/h5a/12298139664414.jpg"
                }, {
                    "value": "Speaker_environment",
                    "imageLink": "https://www.bigw.com.au/medias/sys_master/images/images/hb1/h5a/12298139664414.jpg"
                }, {
                    "value": "Laptop_normal",
                    "imageLink": "https://media.nbb-cdn.de/images/products/620000/625409/SUR20_Laptop3_13_Feature_Platinum_Tilted_RGB.png?size=2800"
                }, {
                    "value": "Laptop_environment",
                    "imageLink": "https://media.nbb-cdn.de/images/products/620000/625409/SUR20_Laptop3_13_Feature_Platinum_Tilted_RGB.png?size=2800"
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
