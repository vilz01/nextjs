import Lista from './components/lista';
import styles from './page.module.css';

export default function Home() {
  return(
    <>
    <h1>Pörssisähkö</h1>
    <div className={styles.tyyli}>
      <Lista/>
    </div>
    </>
  )
}
