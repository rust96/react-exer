import React from 'react';

const {
  Provider: TrelloServiceProvider,
  Consumer: TrelloServiceConsumer
} = React.createContext();

export {
  TrelloServiceProvider,
  TrelloServiceConsumer
};
