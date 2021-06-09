import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';

function PlacesList({places}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((name, i) => <PlaceCard key={name} />)}
    </div>
  );
}

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
};

export default PlacesList;
