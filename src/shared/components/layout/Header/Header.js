import React from 'react'; 
import PropTypes from 'prop-types'; 
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

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.string
}

export default Header;