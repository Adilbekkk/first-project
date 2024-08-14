import Tabcard from "./TabCard"
import styles from "./Components.module.css";

import { Parallax, useParallax } from 'react-scroll-parallax';
import { useParallaxController } from 'react-scroll-parallax';


const Header= ()=>{ 

    // const parallax = useParallax<HTMLDivElement>({
    //     rotateX: [0, 360],
    //   });

    //const parallax = useParallax<HTMLDivElement>({
    // rotateY: [0, 360],
      // });

    return(
        <Parallax >
         <div  className={styles.main}>
        
        <div className={styles.maincard}>
            <div className={styles.textcard}>
                <h1>Become the best boxer in the room with Stratton </h1>
                <p>Stratton is the teaching website where you can learn the most nesessary exersices for becoming boxer!</p>
            </div>
            <div className={styles.tabcard}>
               <Tabcard/>
            </div>   
            
        </div>  
        
        // </div>   
        </Parallax> 
    )
}
export default Header;