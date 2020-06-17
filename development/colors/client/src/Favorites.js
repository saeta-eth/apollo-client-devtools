import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SAVED_COLORS } from './queries';
import Color from './components/Color';

const Favorites = () => {
  const { data, loading } = useQuery(GET_SAVED_COLORS);

  if (loading) {
    return null;
  }

  const colors = data?.favoritedColors;
  return (colors.length === 0 ? (
    <div className="favorites favorites--empty">You haven't favorited any colors yet!</div>
  ) : (
    <div className="favorites">
      {colors.map(({ contrast, hex, name }, index) => (
        <Color 
          key={`${hex}-${index}`}
          className="favorites__color"
          contrast={contrast}
          hexCode={hex} 
          name={name}
          isSaved
        />
      ))}
    </div>
  ));
};

export default Favorites;