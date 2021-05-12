import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './MountainTab.module.css'
import {createUseStyles} from 'react-jss';

const MountainTab = ({mountainImg, mountainName, pathTo, positionTop, positionLeft}) => {
  const positionStyle = createUseStyles({
    tabWrapper: {
      position: 'absolute',
      top: positionTop + 'px',
      left: positionLeft + 'px'
    }
  })
  const styles = positionStyle()
  return <div className={styles.tabWrapper}>
    <img src={mountainImg} alt={'mountain'}/>
    <NavLink to={pathTo}>
        <span className={s.textWrapper}>
          {mountainName}
        </span>
    </NavLink>
  </div>
}

export default MountainTab
