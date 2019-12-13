# The Elusive Green Experiment


In recent years the rise of social movements and political parties, concerned with climate protection, indicate a change in the awareness of environmental issues. This greater awareness is reflected in an increase in environmentally friendly behavior. People start caring more often about waste recycling or using environmentally-friendly mobility.

However, not everyone is indeed doing that. There is a notable gap between people saying that they want to act sustainable and how they truly behave as a consumer (*PROVE* consumer attitude-behavior gap).
Customers performing in an environmentally friendly way may use previous environmentally-friendly acts as a justification for subsequent unethical decisions (Mazar & Zhong, 2010).

One example is the purchase of eco-friendly products like recycled clothes in an online store instead of buying it in a local store.
Especially in the context of online purchase, a non-environmental friendly behavior of people who might be environmentally conscious becomes visible.

Thus, the current environmental trend does not only affect customers but also suppliers of services and goods.
The present online experiment should, therefore, uncover whether specific stimuli can convince a customer to use a more eco-friendly delivery choice.
In order to test whether social influences or informational influences are more effective in increasing environmental friendly behavior, we conducted an experiment about online purchase decisions. The experiment contains two treatments and one control group.

**Research question:** *Is there a preference-action gap in green consumption and if so, can this gap be reduced by specific stimuli?*

*Table 1*. An overview of hypotheses, related theoretical constructs, and subsequent treatments

| HYPOTHESES | UNDERLYING THEORY | TREATMENT |
| --- | --- | --- |
|*H1*. External influences have an effect on the delivery decision. Without external influences participants are more likely to choose a 1-day delivery. |
|*H1a*. The probability of choosing a 7-day delivery increases when individuals are facing social influences. | Herd behaviour (White et al. (2019); Chen (2008); Salazar et al. (2013); Tsarenko et al. (2013) |A chart indicating that most of their peers choose an eco-friendly delivery. |
|*H1b*. The probability of choosing a 7-day delivery increases when individuals are facing informational influences. ||A chart indicating of how much CO2 could be saved. |
|*H2*. Informational influences are reducing the preference-action gap to a greater extend than social influences. |Chen (2008)|
    
#### EXPERIMENTAL DESIGN:
The abovementioned hypotheses are tested using *experimental methodology* (see Table 1).
The respondents are presented with a situation when they are to become a customers of an online shop.
At first, they are asked to complete a short survey about their preferences to use environmentally friendly products. Aferwards they chose a product category that they are most interested in. This choice is included because we expect that the whole experiment gets more realistic when having a scenario that could actually happen. A participant chooses one out of four product categories that he/she is most interested in. They have the chance to choose between "Clothing", "Electronics", "Home and Kitchen" or "Health and Beauty". Independent of their product category choice, they will move to the next stage of the experiment. Here, everyone will get to see 4 products. Two products are exactly the same, they have the same price and the came appearance. They only differ slighly in their desciption saying that one is environmentally friendly and the other is not.
For instance, a person who chooses the "Clothing" category sees two sweaters and two jeans with the same picture and price. One of each is more environmentally friendly than the other.

Maybe better: 3*2 und dann randomisierte Reihenfolge!

On the next page each participant is randomly assigned to the control or experimental group. In total, there are two experimental groups and one control group. While the controlgroup merely decides for a usual delivery or a fast delivery, the two experimental groups also face a stimuli to influence their decision.
The first experimental group will be confronted with a social-influence stimuli. Here, fictious customer comments are displacyed that show the feedback about customers who are happy with the product and the environmentally friendly delivery choice.
The second experimental group will instead be confronted with an informational-influence stimuli. We came up with facts about the saved amount of CO2 and other negative effects on the environment.
After seeing the stimuli, the experimental groups have the same chance as the control group to decide for an environmentally friendly (7 day delivery) or a fast delivery.
At last, finishes the experiment with a thank you page and has the chance to share feedback about the experiment.



Experimental stages:
- Introduction to the experiment (see `introduction.html`);
- Survey (see `survey.html`);
- Product category choice (-> Clothing, Electronics, Home and Kitchen, Health and Beauty);
- Product choice (2x2 products per category);
- Delivery choice (treatments are being introduced);
- Feedback.

The participants of the study will be rewarded for their efforts with a lottery participation.


***The HTML-files are accompanied with the respected CSS- and JS-files.***


#### REFERENCES: 

Yi-Fen Chen,
"Herd behavior in purchasing books online",
Computers in Human Behavior,
Volume 24, Issue 5,
2008

Aaron M. Garvey, Lisa E. Bolton, 
"Eco-Product Choice Cuts Both Ways: How Pro-Environmental Licensing versus Reinforcement is Contingent upon Environmental Consciousness",
Journal of Public Policy & Marketing,
Volume 36(2),
2017

Yatish Joshi, Zillur Rahman,
"Factors Affecting Green Purchase Behaviour and Future Research Directions",
International Strategic Management Review,
Volume 3, Issues 1–2,
2015

Helen Arce Salazar, Leon Oerlemans, Saskia van Stroe-Biezen,
"Social influence on sustainable consumption: evidence froma behavioural experiment",
International Journal of Consumer Studies,
Volume 37, Pages 172–180,
2013

Katherine White, David J. Hardisty, Rishad Habib,
"The Elusive Green Consumer",
Harvard Business Review Home,
July-August Issue,
2019

Yelena Tsarenko, Carla Ferraro, Sean Sands, Colin McLeod,
"Environmentally conscious consumption: The role of retailers and peers as external influences",
Journal of Retailing and Consumer Services,
Volume 20, Issue 3,
2013

Michael P. Hall, Neil A. Lewis, Phoebe C. Ellsworth,
"Believing in climate change, but not behaving sustainably: Evidence from a one-year longitudinal study",
Journal of Environmental Psychology,
Volume 56,
2018

Caroline L. Noblet, Shannon K. McCoy,
"Does One Good Turn Deserve Another? Evidence of Domain-Specific Licensing in Energy Behavior",
Environment and Behavior,
Volume 50(8),
2018

Joanna Goplen, 
"Dedicated vs. Coerced: Internal and External Motivations to Be Proenvironmental",
Electronic Theses, Treatises and Dissertations; Florida University,
2014

Nina Mazar & Chen-Bo Zhong, "Do Green Products Make Us Better People?",
Psychological Science, 
Volume 21(4),
2010


## Getting Started with the Experiment 

These instructions will guide you through the installation process and will give some tips on running the experiment. 

### Prerequisites

For Windows users: 
Go to `Node.js` website, specifically - `nodejs.org/en/downloads`, to download `Node.js` on your computer. 
After the download, you will be able to open Node.js promt window (`node promt`). 

For MacOS users:
Using your Terminal install `Node.js`. By installing it, you will automatically install `npm` (JavaScript package manager) to be able to run the application on your device. 
Install using `pip install`:
```
pip install node
```
Install using Homebrew: 
```
brew install node
```
For both Windows and MacOS users,check if `Node.js` is already installed.
```
node -v
```
To check if `npm` is already installed.
```
npm -v
```
### Running the Experiment

For Windows users, open `node promt` window. 
For MacOS users, open the Terminal. 
Navigate to the direction of a project previously downloaded from GitHub.
```
cd [project path]
```
Install the dependencies needed to run the experiment from `package.json` file.
```
npm install
```
Run the Experiment.
```
npm start
```
Go to your browser and enter `http://localhost:8080/` - LET THE FUN BEGIN!

