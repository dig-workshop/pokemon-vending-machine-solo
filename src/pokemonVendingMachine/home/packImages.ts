import packVer1 from '../images/pack_ver1.png'
import packVer2 from '../images/pack_ver2.jpg'
import packVer3 from '../images/pack_ver3.jpeg'
import packVer4 from '../images/pack_ver4.jpg'
import packVer5 from '../images/pack_ver5.jpeg'
import packVer6 from '../images/pack_ver6.png'

type packImage ={
  id:number
  image:string
  price:string
}
export const packImages:packImage[] =  [
  {
    id: 1,
    image:packVer1,
    price: '￥260'
  },
  {
    id: 2,
    image:packVer2,
    price: '￥180'
  },
  {
    id: 3,
    image:packVer3,
    price: '￥290'
  },
  {
    id: 4,
    image:packVer4,
    price: '￥310'
  },
  {
    id: 5,
    image:packVer5,
    price: '￥170'
  },
  {
    id: 6,
    image:packVer6,
    price: '￥410'
  },
]
