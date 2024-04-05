import Tabcard from "./TabCard"
import styles from "./Components.module.css";


const Header= ()=>{ 
    return(
        <div className={styles.main}>
        <div className={styles.maincard}>
            <div className={styles.textcard}>
                <h1>Become the best boxer in the room with Stratton </h1>
                <p>Stratton is the teaching website where you can learn the most nesessary exersices for becoming boxer!</p>
            </div>
            <div className={styles.tabcard}>
               <Tabcard/>
            </div>   
            
        </div>  
        </div>    
    )
}
export default Header;