import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Messages from './components/messages';

const App: React.FunctionComponent = () => {
  return (
    <>
      <h1>Message Logger</h1>
      <Messages title='Messages' />
    </>
  )
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);