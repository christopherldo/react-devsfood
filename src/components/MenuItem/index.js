import React from 'react';
import PropTypes from 'prop-types';
import { LinkArea, LinkIcon } from './styled';

const MenuItem = ({ icon, link }) => (
  <LinkArea href={link}>
    <LinkIcon src={icon} />
  </LinkArea>
);

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;
