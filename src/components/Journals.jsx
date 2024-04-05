import {Link } from 'react-router-dom'
import styles from "./Components.module.css";
 
 
 const Journals =() => {
    return(
        <div>
        <h2 className={styles.feature}>Featured and seen in</h2>
        <nav className={styles.journal}>
            
            <ul className={styles.ullist}>
    
              <li >
                <Link className={styles.bttn} to="https://www.forbes.com/sites/davidprosser/2023/02/21/how-chronicle-plans-to-kill-off-the-slide-deck-after-four-decades/?sh=30fc68cf474f">Forbes</Link>
                </li>
                <li>
                <Link className={styles.bttn} to="https://www.businessinsider.com/chronicle-saas-presentation-startup-raises-75-million-2023-2#-7">Business Insider</Link>
                </li>
                <li>
                <Link className={styles.bttn} to="https://venturecapital.cmail20.com/t/d-e-zdhddik-irtiljurdj-t/">The Wall Street Journal</Link>
                </li>
                <li >
                <Link className={styles.bttn} to="https://www.cnbctv18.com/startup/chronicle-raises-75-million-in-seed-funding-round-from-square-peg-and-accel-15997701.htm">CNBC</Link>
                </li>
                <li>
                <Link className={styles.bttn} to="https://www.cnbctv18.com/startup/chronicle-raises-75-million-in-seed-funding-round-from-square-peg-and-accel-15997701.htm">On Deck</Link>
                </li>
                <li>
                <Link className={styles.bttn} to="/https://techcrunch.com/2023/02/21/chronicle/">TechCruch</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Journals;