import React from 'react'
import {createUseStyles} from 'react-jss'
// eslint-disable-next-line no-unused-vars
import s from './AboutMountain.module.css'
import AboutMountainNav from './AboutMountainNav/AboutMountainNav';

const AboutMountain = ({mountainName, aboutThisMountain}) => {

  const objStyles = createUseStyles({
    textWrapper: {
      width: '500px',
      color: 'white'
    },
    text: {
      padding: '0 60px',
      height: '60vh',
      overflowY: 'scroll'
    },
    title: {
      padding: '0 60px',
    }
  })
  const style = objStyles()

  return (
    <div className={style.textWrapper}>
      <h1 className={style.title}>{mountainName}</h1>
      <p className={style.text}>{aboutThisMountain}</p>
      <AboutMountainNav />
    </div>
  )
}

export default AboutMountain

