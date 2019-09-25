import React from 'react';
import ReactDOM from 'react-dom';

import Test from './test';

const App = () => (
  <div>
    <p>React here!</p>
    <Test />
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
