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
            "title": "Which of the following products do you prefer to buy?",
            "isRequired": true,
            "choices": [
                {
                    "value": "Soap_normal",
                    "imageLink": "data:image/jpeg;base64,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"
                }, {
                    "value": "Soap_environment",
                    "imageLink": "data:image/jpeg;base64,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"
                }, {
                    "value": "Shampoo_normal",
                    "imageLink": "https://pluuz.de/images/xml-importedfiles/3282770108965-33007219-p.jpeg"
                }, {
                    "value": "Shampoo_environment",
                    "imageLink": "https://pluuz.de/images/xml-importedfiles/3282770108965-33007219-p.jpeg"
                }, {
                    "value": "Blackroll_normal",
                    "imageLink": "https://cdn.shopify.com/s/files/1/0429/1421/products/blackroll-standard-faszienrolle-schwarz-gruen_c02427a8-6655-49ce-a8d9-d17ac441f419.jpg?v=1549012842"
                }, {
                    "value": "Blackroll_environment",
                    "imageLink": "https://cdn.shopify.com/s/files/1/0429/1421/products/blackroll-standard-faszienrolle-schwarz-gruen_c02427a8-6655-49ce-a8d9-d17ac441f419.jpg?v=1549012842"
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
