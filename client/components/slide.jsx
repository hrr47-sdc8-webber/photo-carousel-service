import React from 'react';

const Slide = ({ url }) => {
  const styles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="slide" style={styles}> <img src={url} /> </div>
  );
};

export default Slide;
