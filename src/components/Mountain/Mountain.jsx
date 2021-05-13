import React, {useState} from 'react';
import AboutMountain from '../AboutMountain/AboutMountain';
import {createUseStyles} from 'react-jss';
import backArrow from '../../assets/img/Polygon 1.png'
import visionModeIcon from '../../assets/img/Group 12.png'
import Slider from '../Slider/Slider';
import {NavLink} from 'react-router-dom';

const Mountain = ({mountain}) => {

  const [visionMode, setVisionMode] = useState(false)

  const objStyles = createUseStyles({
    mountainWrapper: {
      display: 'flex',
      height: '100vh'
    },
    aboutMountain: {
      backgroundColor: '#2170A1',
      padding: '130px 100px 100px 100px',
      width: '800px',
      float: 'right'
    },
    sliderWrapper: {
      backgroundColor: '#2170A1',
      position: 'relative',
      minWidth: '0',
      height: '940px'
    },
    backBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '2',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      backgroundColor: '#EE8460',
      position: 'absolute',
      bottom: '40px',
      left: '40px',
      cursor: 'pointer'
    },
    visionModeBtn: {
      zIndex: '2',
      width: '70px',
      height: '70px',
      outline: 'none',
      border: 'none',
      borderRadius: '50%',
      backgroundColor: '#2170A1',
      position: 'absolute',
      bottom: '40px',
      right: '40px',
      cursor: 'pointer'
    },
    backArrow: {
      marginRight: '7px',
    },
    setMode: {
      marginTop: '3px'
    }
  })
  const style = objStyles()

  return (
    <div className={style.mountainWrapper}>
      <div className={style.sliderWrapper}>
        <NavLink to='/' className={style.backBtn}>
          <img src={backArrow} alt='back-arrow' className={style.backArrow}/>
        </NavLink>

        <Slider />

        <button className={style.visionModeBtn} onClick={() => {
          setVisionMode(!visionMode)
        }}>
          <img src={visionModeIcon} alt='setVisionMode' className={style.setMode}/>
        </button>
      </div>
      {!visionMode
        ? <div className={style.aboutMountain}>
          <AboutMountain mountainName={mountain.mountainName}
                         aboutThisMountain={mountain.aboutThisMountain}/>
        </div>
        : null}

    </div>
  )
}

export default Mountain