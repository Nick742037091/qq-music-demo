import Mockjs from 'mockjs'

// 这里要使用正则，避免devServer不生效
Mockjs.mock(/song\/detail/, 'get', {
  code: 0,
  msg: '',
  data: {
    poster:
      'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/aa949440ac397d46fd04fe145e4b9cfd~300x300.image',
    lyric:
      '我的爱明明还在<br/>转身了才明白<br/>该把幸福找回来<br/>而不是各自缅怀<br/>',
    name: '我的爱',
    singer: '孙燕姿',
    isFavorite: false,
    likeSinger: false,
    duration: 545,
    url: 'http://music.163.com/song/media/outer/url?id=447925558.mp3',
  },
})
