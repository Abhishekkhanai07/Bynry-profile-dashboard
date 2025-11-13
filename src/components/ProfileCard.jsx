import { Link } from 'react-router-dom'
import styles from './ProfileCard.module.css'
import defaultPhoto from '../assets/default-avatar.webp'

export default function ProfileCard({ p, onSummary }) {
  return (
    <div className={styles.card}>
      <img
        src={p.photo || defaultPhoto}
        alt={p.name}
        className={styles.image}
        onError={(e) => (e.target.src = defaultPhoto)}
      />

      <h3 className={styles.name}>{p.name}</h3>
      <p className={styles.title}>{p.title}</p>
      <p className={styles.location}>
        {p.city}, {p.country}
      </p>

      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.secondary}`} onClick={() => onSummary(p)}>
          Summary
        </button>

        <Link to={`/profile/${p.id}`} className={styles.button}>
          Details
        </Link>
      </div>
    </div>
  )
}
