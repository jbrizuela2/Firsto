import React from 'react'; 
import propTypes from 'prop-types'; 
import logo from '../../../images/logo.svg';

const Header = props => {
  const {
    title = 'Welcome to React',
    url = 'http://www.google.com' 
  } = props;

  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.string
}

export default Header;