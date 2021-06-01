import { SongDetailResponse } from '@/model/song'

export const fetchSongDetail = async () => {
  return new Promise<SongDetailResponse>((resolve) => {
    setTimeout(() => {
      resolve({
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
          likeSinger: true,
          duration: 545,
        },
      })
    }, 1500)
  })
}
