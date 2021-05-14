import React from 'react'
import {createUseStyles} from 'react-jss';
import {NavLink} from 'react-router-dom';
import {useStore} from 'effector-react';
import {store} from '../../../effector/effector';
import navLinkIcon from '../../../assets/img/Group 5.png'
import activeNavLinkIcon from '../../../assets/img/Group 4.png'

const AboutMountainNav = () => {

  const getMountain = useStore(store)



  const objStyles = createUseStyles({
    navWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '60px',
      padding: '0 60px'
    },
    navLink: {
      width: '50px',
      height: '40px',
      backgroundImage: `url(${navLinkIcon})`
    },
    activeNavLink: {
      backgroundImage: `url(${activeNavLinkIcon})`
    }
  })
  const styles = objStyles()

  return (
    <div className={styles.navWrapper}>
      {
        Object.keys(getMountain).map(i => <NavLink to={getMountain[i].link} className={styles.navLink} activeClassName={styles.activeNavLink} />)
      }
    </div>
  )
}

export default AboutMountainNav