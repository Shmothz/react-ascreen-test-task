import React from 'react'

const AboutMountain = ({mountainName, aboutThisMountain}) => {
  return (
    <div>
      <h1>{mountainName}</h1>
      <p>{aboutThisMountain}</p>
    </div>
  )
}

export default AboutMountain