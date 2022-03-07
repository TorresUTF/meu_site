
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className='navbar'>
        <ul className='navbar-bar'>
          <li className='nav-item'>
            <a className='nav-link' href="#">
              <h1>👉</h1>
              <span className='link-text'>Pro lado</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">
              <h1>✌️</h1>
              <span className='link-text'>Paz e amor</span>
            </a>
            
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">
              <h1>💪</h1>              
              <span className='link-text'>Birlllll</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">
              <h1>❤️</h1>
              <span className='link-text'>Nicole</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">
              <h1>🤟</h1>
              <span className='link-text'>Rock n Roll</span>
            </a>          
          </li>
        </ul>
      </nav>

      <main>
        <div className='lado'></div>
        <div className='paz'></div>
        <div className='birl'></div>
        <div className='heart'></div>
        <div className='swag'></div>
      </main>
    </div>
  )
}
