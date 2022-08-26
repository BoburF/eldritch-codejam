const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: './assets/Ancients/Azathoth.png',
    easy: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    normal: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    hard: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: './assets/Ancients/Cthulthu.png',
    easy: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    normal: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    hard: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: './assets/Ancients/IogSothoth.png',
    easy: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    normal: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    hard: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: './assets/Ancients/ShubNiggurath.png',
    easy: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    normal: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    hard: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

const BluecardsData = [
  {
    difficulty: 'hard',
    card: [
      {
        id: 'blue1',
        cardFace: './assets/MythicCards/blue/blue1.png',
        difficulty: 'hard',
        color: 'blue'
      },
      {
        id: 'blue2',
        cardFace: './assets/MythicCards/blue/blue2.png',
        difficulty: 'hard',
        color: 'blue'
      },
      {
        id: 'blue6',
        cardFace: './assets/MythicCards/blue/blue6.png',
        difficulty: 'hard',
        color: 'blue'
      },
      {
        id: 'blue8',
        cardFace: './assets/MythicCards/blue/blue8.png',
        difficulty: 'hard',
        color: 'blue'
      },
    ]
  },
  {
    difficulty: 'normal',
    card: [
      {
        id: 'blue7',
        cardFace: './assets/MythicCards/blue/blue7.png',
        difficulty: 'normal',
        color: 'blue'
      },
      {
        id: 'blue9',
        cardFace: './assets/MythicCards/blue/blue9.png',
        difficulty: 'normal',
        color: 'blue'
      },
      {
        id: 'blue11',
        cardFace: './assets/MythicCards/blue/blue11.png',
        difficulty: 'normal',
        color: 'blue'
      },
      {
        id: 'blue12',
        cardFace: './assets/MythicCards/blue/blue12.png',
        difficulty: 'normal',
        color: 'blue'
      },
    ]
  },
  {
    difficulty: 'easy',
    card: [
      {
        id: 'blue3',
        cardFace: './assets/MythicCards/blue/blue3.png',
        difficulty: 'easy',
        color: 'blue'
      },
      {
        id: 'blue4',
        cardFace: './assets/MythicCards/blue/blue4.png',
        difficulty: 'easy',
        color: 'blue'
      },
      {
        id: 'blue5',
        cardFace: './assets/MythicCards/blue/blue5.png',
        difficulty: 'easy',
        color: 'blue'
      },
      {
        id: 'blue10',
        cardFace: './assets/MythicCards/blue/blue10.png',
        difficulty: 'easy',
        color: 'blue'
      },
    ]
  }
]

const BrowncardsData = [
  {
    difficulty: 'hard',
    card: [
      {
        id: 'brown6',
        cardFace: './assets/MythicCards/brown/brown6.png',
        difficulty: 'hard',
        color: 'brown'
      },
      {
        id: 'brown7',
        cardFace: './assets/MythicCards/brown/brown7.png',
        difficulty: 'hard',
        color: 'brown'
      },
      {
        id: 'brown8',
        cardFace: './assets/MythicCards/brown/brown8.png',
        difficulty: 'hard',
        color: 'brown'
      },
      {
        id: 'brown9',
        cardFace: './assets/MythicCards/brown/brown9.png',
        difficulty: 'hard',
        color: 'brown'
      },
      {
        id: 'brown10',
        cardFace: './assets/MythicCards/brown/brown10.png',
        difficulty: 'hard',
        color: 'brown'
      }
    ]
  },
  {
    difficulty: 'normal',
    card: [
      {
        id: 'brown15',
        cardFace: './assets/MythicCards/brown/brown15.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown16',
        cardFace: './assets/MythicCards/brown/brown16.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown17',
        cardFace: './assets/MythicCards/brown/brown17.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown18',
        cardFace: './assets/MythicCards/brown/brown18.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown19',
        cardFace: './assets/MythicCards/brown/brown19.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown20',
        cardFace: './assets/MythicCards/brown/brown20.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown1',
        cardFace: './assets/MythicCards/brown/brown1.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown2',
        cardFace: './assets/MythicCards/brown/brown2.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown3',
        cardFace: './assets/MythicCards/brown/brown3.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown4',
        cardFace: './assets/MythicCards/brown/brown4.png',
        difficulty: 'normal',
        color: 'brown'
      },
      {
        id: 'brown5',
        cardFace: './assets/MythicCards/brown/brown5.png',
        difficulty: 'normal',
        color: 'brown'
      }
    ]
  },
  {
    difficulty: 'easy',
    card: [
      {
        id: 'brown11',
        cardFace: './assets/MythicCards/brown/brown11.png',
        difficulty: 'easy',
        color: 'brown'
      },
      {
        id: 'brown12',
        cardFace: './assets/MythicCards/brown/brown12.png',
        difficulty: 'easy',
        color: 'brown'
      },
      {
        id: 'brown13',
        cardFace: './assets/MythicCards/brown/brown13.png',
        difficulty: 'easy',
        color: 'brown'
      },
      {
        id: 'brown14',
        cardFace: './assets/MythicCards/brown/brown14.png',
        difficulty: 'easy',
        color: 'brown'
      },
      {
        id: 'brown21',
        cardFace: './assets/MythicCards/brown/brown21.png',
        difficulty: 'easy',
        color: 'brown'
      }
    ]
  }
]

const GreencardsData = [
  {
    difficulty: 'hard',
    card: [
      {
        id: 'green2',
        cardFace: './assets/MythicCards/green/green2.png',
        difficulty: 'hard',
        color: 'green'
      },
      {
        id: 'green3',
        cardFace: './assets/MythicCards/green/green3.png',
        difficulty: 'hard',
        color: 'green'
      },
      {
        id: 'green4',
        cardFace: './assets/MythicCards/green/green4.png',
        difficulty: 'hard',
        color: 'green'
      },
      {
        id: 'green5',
        cardFace: './assets/MythicCards/green/green5.png',
        difficulty: 'hard',
        color: 'green'
      },
      {
        id: 'green6',
        cardFace: './assets/MythicCards/green/green6.png',
        difficulty: 'hard',
        color: 'green'
      }
    ]
  },
  {
    difficulty: 'normal',
    card: [
      {
        id: 'green13',
        cardFace: './assets/MythicCards/green/green13.png',
        difficulty: 'normal',
        color: 'green'
      },
      {
        id: 'green14',
        cardFace: './assets/MythicCards/green/green14.png',
        difficulty: 'normal',
        color: 'green'
      },
      {
        id: 'green15',
        cardFace: './assets/MythicCards/green/green15.png',
        difficulty: 'normal',
        color: 'green'
      },
      {
        id: 'green7',
        cardFace: './assets/MythicCards/green/green7.png',
        difficulty: 'normal',
        color: 'green'
      },
      {
        id: 'green8',
        cardFace: './assets/MythicCards/green/green8.png',
        difficulty: 'normal',
        color: 'green'
      },
      {
        id: 'green9',
        cardFace: './assets/MythicCards/green/green9.png',
        difficulty: 'normal',
        color: 'green'
      },
      {
        id: 'green10',
        cardFace: './assets/MythicCards/green/green10.png',
        difficulty: 'normal',
        color: 'green'
      },
      {
        id: 'green11',
        cardFace: './assets/MythicCards/green/green11.png',
        difficulty: 'normal',
        color: 'green'
      }
    ]
  },
  {
    difficulty: 'easy',
    card: [
      {
        id: 'green1',
        cardFace: './assets/MythicCards/green/green1.png',
        difficulty: 'easy',
        color: 'green'
      },
      {
        id: 'green12',
        cardFace: './assets/MythicCards/green/green12.png',
        difficulty: 'easy',
        color: 'green'
      },
      {
        id: 'green16',
        cardFace: './assets/MythicCards/green/green16.png',
        difficulty: 'easy',
        color: 'green'
      },
      {
        id: 'green17',
        cardFace: './assets/MythicCards/green/green17.png',
        difficulty: 'easy',
        color: 'green'
      },
      {
        id: 'green18',
        cardFace: './assets/MythicCards/green/green18.png',
        difficulty: 'easy',
        color: 'green'
      }
    ]
  }
]

// const azathoth = document.querySelector('.azathoth');
// const cthulthu = document.querySelector('.cthulthu');
// const IogSothoth = document.querySelector('.IogSothoth');
// const shubNiggurath = document.querySelector('.shubNiggurath');


const btn_levels = document.querySelector('.btn_levels');

// const easy = document.querySelector('.easy');
// const normal = document.querySelector('.normal');
// const hard = document.querySelector('.hard');


const colods = document.querySelector('.colods');


const start = document.querySelector('.start_btn');

    

document.querySelectorAll('.monster').forEach((item, index) => {
  item.addEventListener('click', (e) => {
    
    btn_levels.style.display = 'flex'
    console.log(ancientsData[index]);

    btn_levels.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'easy') {
        console.log(ancientsData[ancientsData.findIndex(x => x.name === item.classList[0])]);
      } else if (e.target.classList[0] === 'normal') {
        console.log(ancientsData[ancientsData.findIndex(x => x.name === item.classList[0])]);
      } else if (e.target.classList[0] === 'hard') {
        console.log(ancientsData[ancientsData.findIndex(x => x.name === item.classList[0])]);
      }

    })

    document.querySelectorAll('.monster').forEach((item2, index) => {
      item2.classList.remove('active_img')
    })
    item.classList.add('active_img')
  })
})