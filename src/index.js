import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyC9i1zm6nLbWqofCwPfd7IgEPVDwP-JbgY';

// Create a new component. This component should produce some HTML.
const App = () => {
  return <div>Hi!</div>
};
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));