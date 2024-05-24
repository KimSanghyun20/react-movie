import React from 'react'
import AdImg from '../img/AdImg.svg'

const Ad = ({ showAd }) => {
  if(!showAd) {
    return null;
  }

  return(
    <div>
      <img src={ AdImg } alt='광고 배너' style={{ width: '100%'}} />
    </div>
  )
}

export default Ad;
