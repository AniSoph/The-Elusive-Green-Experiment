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
            "title": "What category of product you prefer to buy ?",
            "isRequired": true,
            "choices": [
                {
                    "value": "Electronics",
                    "imageLink": "https://www.howtogeek.com/wp-content/uploads/2019/08/img_5d603e1a30d8f.jpg"
                }, {
                    "value": "Clothes",
                    "imageLink": "https://www.cccreationsusa.com/wp-content/uploads/2017/12/clothes-hanging-862x493.jpg"
                }, {
                    "value": "Books",
                    "imageLink": "https://lithub.com/wp-content/uploads/2019/07/used-books-store-2.jpg"
                }, {
                    "value": "Cosmetics",
                    "imageLink": "https://industrywired.com/wp-content/uploads/2018/12/Cosmetics.jpg"
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
survey.completedHtml = 'http://localhost:8080/selectproduct';




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
