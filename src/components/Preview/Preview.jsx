import React from 'react';
import MountainTab from './MountainTab/MountainTab';

import landScape from '../../assets/img/landscape 1.png'
import {createUseStyles} from 'react-jss';
import {useStore} from 'effector-react';
import {store} from '../../effector/effector';

const Preview = () => {

  const getMountains = useStore(store)

  const objStyles = createUseStyles({
      previewWrapper: {
        position: 'relative',
        width: '100%',
        background: {
          color: 'yellow',
          image: `url(${landScape})`,
          repeat: 'no-repeat'
        }
      }
    }
  )
  const style = objStyles()
  return <div className={style.previewWrapper}>
    {getMountains.map(i => <MountainTab mountainImg={i.icon}
                                        mountainName={i.mountainName}
                                        pathTo={i.link}
                                        positionTop={i.position.top}
                                        positionLeft={i.position.left}/>)}
  </div>
}

export default Preview