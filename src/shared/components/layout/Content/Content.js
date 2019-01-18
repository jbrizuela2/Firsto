import React from 'react';
import propTypes from 'prop-types';

const Content = (props) => {
  const { children } = props;

  return (
    <main> 
      {children} 
    </main>
  )
}

Content.propTypes = {
  children: propTypes.element.isRequired
};

export default Content