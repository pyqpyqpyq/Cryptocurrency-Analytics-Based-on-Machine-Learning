Description:
This is a project (COMP90055 COMPUTING PROJECT) named Cryptocurrency Analytics Based on Machine Learning.
The website is completed from React.
There have installed 6 API that is used in the frontend. 
1 React.js
2 React-router.dom
3 React-Bootstrap
4 React-Plotly
5 CanvasJSReact
6 React-Calendar and moment 

The following will provide the introduction of src file:
1 containers:
App: The container is the entrance of frontend, and it provides the link address for each page. Each page has become the components in the container, so it includes 20 components (pages). 

2 components:
The component not only contains each page presented on the website, but also includes the element that is utilized in each page. For example, table is responsible for listing the sentiment variation, Jumbotron can be applied in each page to adjust the page exchange. 

File name: components
GetCalendar.js: A component of react-calendar.
Jumbotron.js: A component of Jumbotron, which is located on each page's top.
Home.js: Load the total cryptocurrency information.
About.js: Introduce all project member.
CoinInfo.js: CoinInfo presents the Bitcoin one day one week variation under the table, sentiment percentage by pie chart, and  sentiment variation by line chart

File name: CoinDetail
Bitcoin.js: Query the date of Bitcoin's  the sentiment variation
KNN.js: Bitcoin variation of KNN model.
SVM.js: Bitcoin variation of SVM model.
Linear.js: Bitcoin variation of Linear model.
ARIMA.js: Bitcoin variation of KNN model.
MovingAverage.js: Bitcoin variation of MovingAverage model.
LSTM30.js: Bitcoin variation of LSTM30 model.
LSTM60.js: Bitcoin variation of LSTM60 model.
LSTM90.js: Bitcoin variation of LSTM90 model.

File name: Twitter
KNNTwitter.js: Bitcoin variation of KNN model with Twitter sentiment.
SVMTwitter.js: Bitcoin variation of SVM model with Twitter sentiment.
LinearTwitter.js: Bitcoin variation of Linear model with Twitter sentiment.

File name: Gov
KNNGov.js: Bitcoin variation of KNN model with Government sentiment.
SVMGov.js: Bitcoin variation of SVM model with Government sentiment.
LinearGov.js: Bitcoin variation of Linear model with Government sentiment.

3. Assets:
Assets store all figures that is used in the project evidenced by portfolio, model predictions.