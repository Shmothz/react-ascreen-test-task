import React from 'react';
import MountainTab from './MountainTab/MountainTab';
import landScape from '../../assets/img/landScape1.jpg'
import {createUseStyles} from 'react-jss';
import {useStore} from 'effector-react';
import {store} from '../../effector/effector';

const Preview = () => {

  const getMountains = useStore(store)

  const objStyles = createUseStyles({
      previewWrapper: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: {
          color: 'rgb(33, 112, 161)',
          image: `url(${landScape})`,
          repeat: 'no-repeat',
          size: 'cover',
        },
        backgroundBlendMode: 'multiply'
      }
    }
  )
  const style = objStyles()
  return <div className={style.previewWrapper}>
    {Object.keys(getMountains).map(i => <MountainTab mountainImg={getMountains[i].icon}
                                        mountainName={getMountains[i].mountainName}
                                        pathTo={getMountains[i].link}
                                        positionTop={getMountains[i].position.top}
                                        positionLeft={getMountains[i].position.left}/>)}
  </div>
}

export default Preview