import {createStore} from 'effector'
import LavoImg from '../assets/img/05lyavochorr.png'
import AikyImg from '../assets/img/04aikyivenchorr.png'
import ChasnaImg from '../assets/img/01chasnachor.png'
import FersImg from '../assets/img/02fersmana.png'
import KukiImg from '../assets/img/06kykisvymchorr.png'
import TahtarImg from '../assets/img/07tahtarvymchorr.png'
import UdichImg from '../assets/img/03udichvymchorr.png'
import WoodImg from '../assets/img/08aikyivenchorr.png'

const initialState = {
  lavo: {
    mountainName: 'Лявочорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/lavo',
    icon: LavoImg,
    position: {
      top: '0',
      left: '1000'
    }
  },
  aiky: {
    mountainName: 'Айкуайвенчорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/aiky',
    icon: AikyImg,
    position: {
      top: '760',
      left: '950'
    }
  },
  chasna: {
    mountainName: 'Часначорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/chasna',
    icon: ChasnaImg,
    position: {
      top: '200',
      left: '440'
    }
  },
  fers: {
    mountainName: 'Ферсмана',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/fers',
    icon: FersImg,
    position: {
      top: '360',
      left: '300'
    }
  },
  kuki: {
    mountainName: 'Кукисвумчорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/kuki',
    icon: KukiImg,
    position: {
      top: '260',
      left: '800'
    }
  },
  tahtar: {
    mountainName: 'Тахтарвумчорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/tahtar',
    icon: TahtarImg,
    position: {
      top: '510',
      left: '640'
    }
  },
  udich: {
    mountainName: 'Юдычвумчорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/udich',
    icon: UdichImg,
    position: {
      top: '360',
      left: '550'
    }
  },
  wood: {
    mountainName: 'Вудъяврчорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/wood',
    icon: WoodImg,
    position: {
      top: '730',
      left: '600'
    }
  }
}

export const store = createStore(initialState)