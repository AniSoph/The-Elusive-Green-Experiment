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
                    "value": "Hoodie_normal",
                    "imageLink": "https://i.otto.de/i/otto/29642966/desires-hoodie-olive-kapuzenpullover-mit-weicher-fleece-innenseite-moosgruen.jpg?$formatz$"
                }, {
                    "value": "Hoodie_environment",
                    "imageLink": "https://i.otto.de/i/otto/29642966/desires-hoodie-olive-kapuzenpullover-mit-weicher-fleece-innenseite-moosgruen.jpg?$formatz$"
                }, {
                    "value": "Sunglases_normal",
                    "imageLink": "https://media.real-onlineshop.de/images/items/1024x1024/0ad6798d19c52182dee94b439ce283c2.jpg"
                }, {
                    "value": "Sunglases_environment",
                    "imageLink": "https://media.real-onlineshop.de/images/items/1024x1024/0ad6798d19c52182dee94b439ce283c2.jpg"
                }, {
                    "value": "Tshirt_normal",
                    "imageLink": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQonM7MQQQXIEjnnDl0rUoUzIRjV395_3mZr4m2ZnkJcvL3PmYNKn6pU5Ri2vXsoviParc0jB6g&usqp=CAE"
                }, {
                    "value": "Tshirt_environment",
                    "imageLink": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQonM7MQQQXIEjnnDl0rUoUzIRjV395_3mZr4m2ZnkJcvL3PmYNKn6pU5Ri2vXsoviParc0jB6g&usqp=CAE"
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
