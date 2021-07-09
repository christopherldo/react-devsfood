import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

const MenuItem = ({ title, icon, link }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <LinkArea data-tip={title} data-for="tip-right" isActive={isActive}>
      <Link to={link}>
        <LinkIcon src={icon} />
      </Link>
    </LinkArea>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;
