// @flow

import React from 'react';
import styled from "styled-components";
import Table from '../components/Table';
import Data from '../data/coins.json';

const Main = styled.div`
  hight: 100%;
  padding: 20px 8px 0px 8px;
`;

const Columns = {
  name: {
    key: 'name',
    label: 'Name'
  },
  variation: {
    key: 'variation',
    label: 'Variation'
  },
  twitterSentiment:{
    key: 'twitterSentiment',
    label: 'Twitter Sentiment'
  },
  govSentiment: {
    key: 'govSentiment',
    label: 'Government Sentiment'
  },
  newsSentiment:{
    key: 'newsSentiment',
    label: 'News Sentiment'
  }
}

const User = ({match}) => {
  return ( <h1>Hi users {match.params.username}</h1> );
}

const Currency = [
  { id: 1, name: <a href="/bitcoin"> {Data.bitcoin.name} </a>, variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 2, name: <a href="/bitcoin2"> {Data.aa.name} </a>, variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 3, name: 'XRP', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 4, name: 'Litecoin', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 5, name: 'XRP', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 6, name: 'Ethereum', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 7, name: 'XRP', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 8, name: 'Ethereum', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 9, name: 'XRP', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' },
  { id: 10, name: 'Ethereum', variation: '--', twitterSentiment: '--', govSentiment: '--', newsSentiment: '--' }
  
]; 

export const CoinInfo = () => {
    return ( 
      <section className="CoinTable">

        <Main>
            <Table columns={Columns} data={Currency} />
        </Main>
      </section>
    );
}



