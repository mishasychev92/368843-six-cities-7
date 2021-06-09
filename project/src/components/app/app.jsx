import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App({places}) {
  return <MainPage places={places} />;
}

App.propTypes = {
  places: PropTypes.array.isRequired,
};

export default App;
