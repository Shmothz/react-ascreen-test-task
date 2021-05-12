import React from 'react'
import {NavLink} from 'react-router-dom';
import {createUseStyles} from 'react-jss';

const MountainTab = ({mountainImg, mountainName, pathTo, positionTop, positionLeft}) => {
  const positionStyle = createUseStyles({
    tabWrapper: {
      position: 'absolute',
      top: positionTop + 'px',
      left: positionLeft + 'px'
    },
    textWrapper: {
      background: {
        color: '#87B0BA'
      },
      borderRadius: '17px',
      padding: '7px 30px',
      color: 'white',
      display: 'block',
      width: '50%',
      margin: '0 auto'
    },
    linkStyle: {
      textDecoration: 'none'
    }
  })
  const styles = positionStyle()
  return (
    <div className={styles.tabWrapper}>
      <img src={mountainImg} alt={'mountain'}/>
      <NavLink to={pathTo} className={styles.linkStyle}>
        <span className={styles.textWrapper}>
          {mountainName}
        </span>
      </NavLink>
    </div>
  )
}

export default MountainTab
