// @flow

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../../style/Layout';

import { CoinInfo } from '../../components/CoinInfo';
import { Home } from '../../components/Home';
import { About } from '../../components/About';
import { Model } from '../../components/Model';
import { NavigationBar } from '../../components/NavigationBar';
import { Jumbotron } from '../../components/Jumbotron'
import { Bitcoin } from '../../components/CoinDetail/Bitcoin';
import { BitcoinTwi } from '../../components/CoinDetail/BitcoinTwi';

import { KNN } from '../../components/CoinDetail/KNN';
import { SVM } from '../../components/CoinDetail/SVM';
import { Linear } from '../../components/CoinDetail/Linear';
import { MovingAverage } from '../../components/CoinDetail/MovingAverage';
import { ARIMA } from '../../components/CoinDetail/ARIMA';
import { LSTM30 } from '../../components/CoinDetail/LSTM30';
import { LSTM60 } from '../../components/CoinDetail/LSTM60';
import { LSTM90 } from '../../components/CoinDetail/LSTM90';

import { KNNTwitter } from '../../components/CoinDetail/Twitter/KNNTwitter';
import { SVMTwitter } from '../../components/CoinDetail/Twitter/SVMTwitter';
import { LinearTwitter } from '../../components/CoinDetail/Twitter/LinearTwitter';

import { KNNGov } from '../../components/CoinDetail/Gov/KNNGov';
import { SVMGov } from '../../components/CoinDetail/Gov/SVMGov';
import { LinearGov } from '../../components/CoinDetail/Gov/LinearGov';

// App is the entrance of the frontend, which controls all components 
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar /> 
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/coinInfo' component={CoinInfo}/>
              <Route exact path='/model' component={Model}/>
              <Route exact path='/about' component={About}/>
              <Route exact path="/detail/bitcoin" component={Bitcoin} />
              <Route exact path="/detail/bitcoin/twitter" component={BitcoinTwi} />
              <Route exact path="/model/KNN" component={KNN} />
              <Route exact path="/model/SVM" component={SVM} />
              <Route exact path="/model/Linear" component={Linear} />
              <Route exact path="/model/MovingAverage" component={MovingAverage} />
              <Route exact path="/model/ARIMA" component={ARIMA} />
              <Route exact path="/model/LSTM30" component={LSTM30} />
              <Route exact path="/model/LSTM/LSTM60" component={LSTM60} />
              <Route exact path="/model/LSTM/LSTM90" component={LSTM90} />
              <Route exact path="/model/KNN/KNNTwitter" component={KNNTwitter} />
              <Route exact path="/model/SVM/SVMTwitter" component={SVMTwitter} />
              <Route exact path="/model/Linear/LinearTwitter" component={LinearTwitter} />                 
              <Route exact path="/model/KNN/KNNGov" component={KNNGov} />
              <Route exact path="/model/SVM/SVMGov" component={SVMGov} />
              <Route exact path="/model/Linear/LinearGov" component={LinearGov} />
            </Switch>
          </Router>
         </Layout>
      </React.Fragment>
    );
  }
}

export default App;
