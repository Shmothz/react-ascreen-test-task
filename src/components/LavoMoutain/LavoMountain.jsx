import React from 'react';
import AboutMountain from '../AboutMountain/AboutMountain';
import {useStore} from 'effector-react';
import {store} from '../../effector/effector';

const LavoMountain = () => {

  const getMountains = useStore(store)

  return <div>
    <AboutMountain mountainName={getMountains[0].mountainName} aboutThisMountain={getMountains[0].aboutThisMountain} />
  </div>
}

export default LavoMountain