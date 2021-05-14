import {createStore} from 'effector'
import LavoImg from '../assets/img/05lyavochorr.png'
import AikyImg from '../assets/img/04aikyivenchorr.png'
import ChasnaImg from '../assets/img/01chasnachor.png'
import FersImg from '../assets/img/02fersmana.png'
import KukiImg from '../assets/img/06kykisvymchorr.png'
import TahtarImg from '../assets/img/07tahtarvymchorr.png'
import UdichImg from '../assets/img/03udichvymchorr.png'
import WoodImg from '../assets/img/08aikyivenchorr.png'
import mountain1 from '../assets/img/mountains/mountain1.jpg'
import mountain2 from '../assets/img/mountains/mountain2.jpg'
import mountain3 from '../assets/img/mountains/mountain3.jpg'
import mountain4 from '../assets/img/mountains/mountain4.jpg'
import mountain5 from '../assets/img/mountains/mountain5.jpg'
import mountain6 from '../assets/img/mountains/mountain6.jpg'
import mountain7 from '../assets/img/mountains/mountain7.jpg'
import mountain8 from '../assets/img/mountains/mountain8.jpg'
import mountain9 from '../assets/img/mountains/mountain9.jpg'
import mountain10 from '../assets/img/mountains/mountain10.jpg'
import mountain11 from '../assets/img/mountains/mountain11.jpg'
import mountain12 from '../assets/img/mountains/mountain12.jpg'
import mountain13 from '../assets/img/mountains/mountain13.jpg'
import mountain14 from '../assets/img/mountains/mountain14.jpg'
import mountain15 from '../assets/img/mountains/mountain15.jpg'

const initialState = {
  lavo: {
    mountainName: 'Лявочорр',
    aboutThisMountain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem et hic maiores placeat quas quidem quis, ratione reprehenderit rerum, suscipit voluptas! Aut autem explicabo modi quo voluptatem! Earum, suscipit?',
    link: '/lavo',
    icon: LavoImg,
    position: {
      top: '0',
      left: '1000'
    },
    photos: {
      first: mountain1,
      second: mountain2,
      third: mountain3
    }
  },
  aiky: {
    mountainName: 'Айкуайвенчорр',
    aboutThisMountain: 'За что еще я люблю горы? За возможность остановиться. В этом огромном бурлящем потоке жизни почувствовать спокойствие и гармонию. Вы не поверите, но создается ощущение, что вы перешли на другой уровень сознания, вы как будто не на этой планете, вы видите вещи которые за гранью понимания, а еще вы начинаете слышать, именно слышать музыку природы, одну из самых приятных музык на свете. Журчит ручей. Упал камешек. Еще один. Ветер. Шелестит листва деревьев. Чирикает птичка. И вот ты уже уносишься куда то своими мыслями. Как ни крути – жизнь прекрасна. Мне кажется в горах начинают отрастать крылья у человека. Не знаю чьи слова, но они точно отражают то состояние — Когда есть крылья у души, то совершенству нет предела. Когда видишь горы вокруг, горную речку, чувствуешь этот чистейший воздух, то происходит осознание того что ты не зря родился. Даже несмотря на то, что ты ничего значимого в этой жизни вроде и не сделал. И хочется жить, и дышать.',
    link: '/aiky',
    icon: AikyImg,
    position: {
      top: '760',
      left: '950'
    },
    photos: {
      first: mountain4,
      second: mountain5,
      third: mountain6
    }

  },
  chasna: {
    mountainName: 'Часначорр',
    aboutThisMountain: 'Прошлым летом мы в составе туристической группы ездили на Алтай. Там горы не просто вызывают уважение, они завораживают, внушают трепет и вводят в состояние, близкое к трансу. Природа в тех местах чиста и первозданна, такая, какой была миллионы лет назад. Само название «Алтай» по одной из версий переводится как «золотые горы». Когда стоишь и смотришь на всю эту красоту, просто дух захватывает. У подножья живописных гор раскинулась зеленая долина, усеянная всевозможными цветами. Она напоминает разноцветное бархатное одеяло.b Это место почти мистическое. Покоряя гору, ты ощущаешь близость небесного купола. Кажется, что достаточно протянуть руку и достанешь до облаков. Находясь в этих местах, чувствуешь себя очень маленьким и незначительным, но, когда удается взобраться на очередную гору, понимаешь, что сила человеческого духа может преодолеть любые преграды. Конечно, на самые большие пики меня не брали, но я подрасту и тогда обязательно покорю их.',
    link: '/chasna',
    icon: ChasnaImg,
    position: {
      top: '200',
      left: '440'
    },
    photos: {
      first: mountain7,
      second: mountain8,
      third: mountain9
    }
  },
  fers: {
    mountainName: 'Ферсмана',
    aboutThisMountain: 'Давайте вместе попробуем завести дедушкин жигуль.. Вививививививививививививививививививививививививививививививививививививививививививививививививививививививививививививи Тртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртр Вививививививививививививививививививививививививививививививививививививививививививививививививививививививививививививи Тртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртртр',
    link: '/fers',
    icon: FersImg,
    position: {
      top: '360',
      left: '300'
    },
    photos: {
      first: mountain10,
      second: mountain11,
      third: mountain12
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
    },
    photos: {
      first: mountain13,
      second: mountain14,
      third: mountain15
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
    },
    photos: {
      first: mountain1,
      second: mountain2,
      third: mountain3
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
    },
    photos: {
      first: mountain4,
      second: mountain5,
      third: mountain6
    }
  },
  wood: {
    mountainName: 'Вудъяврчорр',
    aboutThisMountain: 'Я стою на вершине горы. В лицо дует ветер. Иногда его порывы очень сильны и волосы так и развеваются. Но никто, ни на секунду не жалеет о том, что встал в три часа ночи, для того чтобы прийти и встретить рассвет где то на краю Вселенной. Немножко зябко и мы кутаемся в кофты, шарфики, все, что есть под рукой. Небо чистое, но вокруг достаточно темно. Как будто сумерки и уже вечер. И вот буквально на секунду этот мир застывает в ожидании. Смолкли птицы, даже ветер успокоился, и ты просто своим шестым чувством слышишь эту тишину. Секунда. И как будто из ниоткуда появляется огненно-красный диск. Сначала краешек, потом солнце медленно выползает из-за горы. Каждый из нас открыл новую страницу своей жизни. Забываешь, забываешь обо всем на свете. Все твои проблемы становятся настолько ничтожными, ты чувствуешь себя настолько единым с природой и Вселенной. Ты чувствуешь великое вдохновение. Становится легко дышать. Очень легко. В груди очень медленно начинает нарастать чувство уверенности в себе. Ты можешь все. Это чувство внутри тебя растет, крепнет, набирает силу. Ты никогда уже не будешь прежним. В тебе навсегда останется частичка чего-то вечного, частичка этой Вселенной и ты сам часть этой огромной Вселенной. Ты свободен от предрассудков, стереотипов, человеческих мнений. Возникает ощущение, что ты немножко пересекаешь какую-то грань, ты пересекаешь границу своих возможностей и расширяешь их. Ты обретаешь силу. Ты свободен.',
    link: '/wood',
    icon: WoodImg,
    position: {
      top: '730',
      left: '600'
    },
    photos: {
      first: mountain7,
      second: mountain8,
      third: mountain9
    }
  }
}

export const store = createStore(initialState)