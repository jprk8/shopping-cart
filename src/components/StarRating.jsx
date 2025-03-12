import styles from '../styles/StarRating.module.css';

export default function StarRating({ rating }) {
    const starWidth = `${(rating / 5) * 100}%`;

    return (
      <div className={styles.stars} style={{ position: "relative" }}>
        <div className={styles.filledStars} style={{ width: starWidth }}></div>
      </div>
    )
}