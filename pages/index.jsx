
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className='navbar'>
        <ul className='navbar-bar'>
          <li className='nav-item'>
            <a className='nav-link' href="#">👉</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">✌️</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">💪</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">🤟</a>
          </li>
        </ul>
      </nav>

      <main></main>
    </div>
  )
}
