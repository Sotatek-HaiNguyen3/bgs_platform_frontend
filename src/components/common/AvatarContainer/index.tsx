import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const AvatarContainer = ({ children }: any) => {
  return <div className={styles.avatarContainer}>{children}</div>;
};

AvatarContainer.propTypes = {
  children: PropTypes.element
};

export default AvatarContainer;
