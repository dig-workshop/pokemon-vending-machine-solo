import styles from './HomeScreen.module.scss'
import Contents from '../../Contents'
import { packImages } from './packImages'
export default function HomeScreen() {

  return (
    <Contents>
      <h1 className={styles.title}>Pokemon Vending Machine</h1>
      {packImages.map(elem => {
        return (
          <div key={elem.id}>
            <img src={elem.image} alt={`pack_ver${elem.id}`}/>
            <div>{elem.price}</div>
          </div>
        )
      })}
    </Contents>
  )
}