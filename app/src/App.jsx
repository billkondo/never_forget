import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'evergreen-ui';

const App = () => (
  <div>
    <p>Never forget</p>
    <Button>I am using Evergreen!</Button>
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
