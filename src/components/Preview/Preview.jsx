import React from 'react';
import MountainTab from './MountainTab/MountainTab';
import LavoImg from '../../assets/img/05lyavochorr.png'
import AikyImg from '../../assets/img/04aikyivenchorr.png'
import ChasnaImg from '../../assets/img/01chasnachor.png'
import FersImg from '../../assets/img/02fersmana.png'
import KukiImg from '../../assets/img/06kykisvymchorr.png'
import TahtarImg from '../../assets/img/07tahtarvymchorr.png'
import UdichImg from '../../assets/img/03udichvymchorr.png'
import WoodImg from '../../assets/img/08aikyivenchorr.png'
import landScape from '../../assets/img/landscape 1.png'
import {createUseStyles} from 'react-jss';


const Preview = () => {
  const previewWrapper = createUseStyles({
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
  const style = previewWrapper()
  return <div className={style.previewWrapper}>
    <MountainTab mountainImg={LavoImg} mountainName={'Лявочорр'} pathTo={'/lavo'} positionTop='0' positionLeft='1000'/>
    <MountainTab mountainImg={AikyImg} mountainName={'Айкуайвенчорр'} pathTo={'/aiky'} positionTop='760'
                 positionLeft='950'/>
    <MountainTab mountainImg={ChasnaImg} mountainName={'Часначорр'} pathTo={'/chasna'} positionTop='200'
                 positionLeft='440'/>
    <MountainTab mountainImg={FersImg} mountainName={'Ферсмана'} pathTo={'/fers'} positionTop='360' positionLeft='300'/>
    <MountainTab mountainImg={KukiImg} mountainName={'Кукисвумчорр'} pathTo={'/kuki'} positionTop='260'
                 positionLeft='800'/>
    <MountainTab mountainImg={TahtarImg} mountainName={'Тахтарвумчорр'} pathTo={'/tahtar'} positionTop='510'
                 positionLeft='640'/>
    <MountainTab mountainImg={UdichImg} mountainName={'Юдычвумчорр'} pathTo={'/udich'} positionTop='360'
                 positionLeft='550'/>
    <MountainTab mountainImg={WoodImg} mountainName={'Вудъяврчорр'} pathTo={'/wood'} positionTop='730'
                 positionLeft='600'/>
  </div>
}

export default Preview