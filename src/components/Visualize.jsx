import styles from "./Components.module.css";

export default function Visual(){
    return(
        <>
        <section className="section">
            <div className="grids">
                <div className={styles.maingrid}>
                    <div className={styles.divtext0} >
                        <p style={{textAlign:"center" ,color:"rgb(112 83 255)"}}>VISUALIZE INFO</p>
                        <h1 style={{textAlignLast:"center"}}> World class <br /> information design at <br /> your fingertip </h1>
                        <p style={{textAlignLast:"center", fontSize:"18px"}}><span> Blocks are carefully crafted to help you distill powerful </span> <br /><span> messages from your information and data - no matter how </span><br /><span> complex.</span></p>
                    </div>
                    <div className={styles.image0}>
                        <img src="easy.png" alt="easy" width={"500px"} />
                    </div>
                    
                </div>
            </div>
                <div className="sidegrid" >
                    <div className={styles.grid1}>
                        <div className={styles.images}>
                            <img className={styles.image1} src="easy-02.png" alt="02" width={"280px"}/>
                            <img className={styles.image2} src="easy-01.png" alt="01" width={"310px"}/>
                        </div>
                        <div className={styles.divtext1}>
                            <p className={styles.p} style={{color:"rgb(112 83 255)"}}>CUSTOMIZE</p>
                            <h1 className={styles.h1}>Easy to customise. <br />
                             Hard to get wrong.</h1>
                            <p className={styles.p}>Blocks are responsive and designed to be <br /> customised easily. No matter how you edit, <br /> they will always look stunning.</p>
                        </div>
                    </div>
                    <div className={styles.grid2}>
                        <div className={styles.svgcontainer}>
                            <div className={styles.svgrow}>
                                <img src="insta.png" alt="insta" width={"100px"} />
                                <img src="spotify.jpeg" alt="spotify" width={"100px"} />
                                <img src="N.webp" alt="N" width={"100px"} />
                            </div>
                            <div className={styles.svgrow}>
                                <img src="twitter.png" alt="twitter" width={"100px"}/>
                                <img src="vk.png" alt="vk" width={"100px"}/>
                                <img src="tiktok.png" alt="hub" width={"100px"}/>
                            </div>
                        </div>
                        <div className={styles.divtext2}>
                            <p className={styles.p} style={{color:"rgb(112 83 255)"}}>EMBED</p>
                            <h1 className={styles.h1}>A window <br />
                                into your work.</h1>
                            <p className={styles.p}>Simply paste a link to any of the hundreds <br /> of tools you use and Chronicle will <br /> seamlessly package your outputs.</p>
                        </div>
                    </div>
                </div>    
        </section>
        </>
    )
}