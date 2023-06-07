import { useNavigate } from 'react-router-dom'
import styles from './HomeScreen.module.scss'
import Contents from '../../Contents'
import { packImages } from './packImages'
export default function HomeScreen() {

  const navigate = useNavigate()
  return (
    <Contents>
      <h1 className={styles.title}>Pokemon Vending Machine</h1>
      {packImages.map(elem => {
        return (
          <div key={elem.id}>
            <img src={elem.image} alt={`pack_ver${elem.id}`}/>
            <button onClick={()=>navigate('/unpack')}>{elem.price}</button>
          </div>
        )
      })}
    </Contents>
  )
}