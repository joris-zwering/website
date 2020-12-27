import styles from '../styles/Signup.module.css'
import { useState } from 'react'

function Aangemeld() {

    return(
        <div className={styles.container2}>
            <div className={styles.main}>
                <div className={styles.signup_header}>
                    <h3>Account aangemaakt!</h3>
                    <h5>Welkom bij de community! We hebben de <a style={{textDecoration: "underline"}}  href="google.com">downloadlink</a> gestuurd via sms naar je telefoonnummer. </h5>
                </div>
                <div>
                    <video style={{marginTop: 20}} controls={true} autoPlay="autoplay" loop="loop" muted className={styles.video} loop   >
                    <source src="https://levitateculture.s3.eu-west-2.amazonaws.com/zalando.mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <h4 style={{marginBottom: -20}}>Gratis opdracht plaatsen?</h4>
                    <h4><a style={{textDecoration: "underline", padding: "0px", fontWeight: 300}}  href="google.com">Invite iemand uit je netwerk!</a></h4>
                </div>
                <div className={styles.info_links}>
                    <h5>Help</h5>
                    <h5>Privacy</h5>
                    <h5>Voorwaarden</h5>
                </div>
            </div>
        </div>
    )
}



export default Aangemeld;