import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

const MenuItem = ({ icon, link }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <LinkArea isActive={isActive}>
      <Link to={link}>
        <LinkIcon src={icon} />
      </Link>
    </LinkArea>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;
