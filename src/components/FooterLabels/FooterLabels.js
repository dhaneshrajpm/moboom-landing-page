import React from 'react'

import styles from './FooterLabels.module.scss';

const FooterLabels = ({ name, labels }) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      {labels.map(label => <p key={label}><a href='javascript:void(0)'>{label}</a></p>)}
    </div>
  )
}

export default FooterLabels;