Survey
    .StylesManager
    .applyTheme("bootstrap");

var json = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please indicate if you agree or disagree with the following statements",
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "More disagree, than agree"
                }, {
                    value: 4,
                    text: "Neutral"
                }, {
                    value: 5,
                    text: "More agree, than disagree"
                }, {
                    value: 6,
                    text: "Agree"
                }, {
                    value: 7,
                    text: "Strongly Agree"
                }
            ],
            rows: [
                {
                    value: "intrinsic1",
                    text: "I avoid behaviors that would hurt the environment due to my personally important beliefs."
                }, {
                    value: "intrinsic2",
                    text: "I try to behave in proenvironmental ways because it is personally important to me."
                }, {
                    value: "intrinsic3",
                    text: "I am personally motivated by my concern for the environment to engage in proenvironmental behavior."
                }, {
                    value: "intrinsic4",
                    text: "I try to make decisions that are good for the environment because concern for the environment is central to my core value."
                },
                
                {
                    value: "external1",
                    text: "If I engage in behaviors that may be harmful to the environment, I feel like others judge me negatively."
                }, {
                    value: "external2",
                    text: "I am motivated to engage in behaviors that help protect the environment so that other people think I am a good person."
                }, {
                    value: "external3",
                    text: "If I didn’t engage in proenvironmental behaviors, I would worry that others would think of me as a bad person."
                }, {
                    value: "external4",
                    text: "It is important to me that other people are aware of the efforts I make to help protect the environment."
                }, {
                    value: "external5",
                    text: "I try to make proenvironmental decisions to avoid social disapprovt is important to me that other people are aware of the efforts."
                }
                
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
    
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
    });

$("#surveyElement").Survey({model: survey});
