import styles from '../styles/Signup.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [telefoonnummer, setTelefoonnummer] = useState("");

    // set username available / not available
    const [usernameAvailabe, setusernameAvailabe] = useState(true);
    const [emailAvailable, setemailAvailabe] = useState(true);
    const [numberAvailabe, setnumberAvailabe] = useState(true);

    // router
    const router = useRouter()

    // Fetch api to check if username already exists
    function check_username(username) {
        fetch('https://desolate-thicket-70111.herokuapp.com/v1/webapi/signup/check_username', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify({
            username: username
        }),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(data.message == "username available") {
              setusernameAvailabe(true)
          } else {
            setusernameAvailabe(false)
          }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }   

    // Fetch api to check if email already exists
    // https://desolate-thicket-70111.herokuapp.com/v1/webapi/signup/check_email

    // Fetch api to check if username already exists
    function check_email(email) {
        fetch('https://desolate-thicket-70111.herokuapp.com/v1/webapi/signup/check_email', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify({
            email: email
        }),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(data.message == "email available") {
              setemailAvailabe(true)
          } else {
            setemailAvailabe(false)
          }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }   

    // Fetch api to check if telefoonnummer already exists
    // https://desolate-thicket-70111.herokuapp.com/v1/webapi/signup/check_number

    // Fetch api to check if username already exists
    function check_number(telefoonnummer) {
        fetch('https://desolate-thicket-70111.herokuapp.com/v1/webapi/signup/check_number', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify({
            telefoonnummer: telefoonnummer
        }),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(data.message == "number available") {
              setnumberAvailabe(true)
          } else {
            setnumberAvailabe(false)
          }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }  

    // by succes && form validation = Fetch api to post data
    function signup() {

        if (usernameAvailabe && numberAvailabe && emailAvailable) {
            fetch('https://desolate-thicket-70111.herokuapp.com/v1/webapi/signup/', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                telefoonnummer: telefoonnummer
            }),
            })
            .then(response => response.json())
            .then(data => {
            console.log(data);
            router.push('/aangemeld')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            console.log("Dit werkt niet")
        }
    }  

    return(
        <div className={styles.container2}>
            <div className={styles.main}>
                <div className={styles.signup_header}>
                    <h3>Account aanmaken</h3>
                    <h5>Maak een account voor Levitate Culture</h5>
                </div>
                <form onSubmit={e => {
                    e.preventDefault()
                    const username = document.getElementById("gebruikersnaam").value;
                    const email = document.getElementById("email").value;
                    const telefoonnummer = document.getElementById("telefoonnummer").value;

                    signup();

                    console.log(username + email + telefoonnummer)
                  }}>
                    <div className={styles.input_container}>
                        <label>Kies een gebruikersnaam </label>
                        <br></br>
                        <input type='text' id="gebruikersnaam" onChange={(e) => {
                            setUsername("@" + e.target.value);
                            check_username("@" + e.target.value);
                        }}
                         style={{fontFamily: "Poppins", color: "#000"}} placeholder="gebruikersnaam" required></input>
                    </div>
                    <h4 style={{fontWeight: 200, marginTop: "10px", fontSize: 13, color: '#ff0033'}}> {usernameAvailabe ? "" :  "gebruikersnaam al in gebruik"}</h4>
                    <div className={styles.input_container}>
                        <label>Mijn mail adres</label>
                        <br></br>
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                            check_email(e.target.value);
                        }} id="email" style={{fontFamily: "Poppins", color: "#000"}} placeholder="pieter@post.nl" required></input>
                    </div>
                    <h4 style={{fontWeight: 200, marginTop: "10px", fontSize: 13, color: '#ff0033'}}> {emailAvailable ? "" :  "e-mail al in gebruik"}</h4>
                    <div className={styles.input_container}>
                        <label>Mijn telefoonnummer</label>
                        <br></br>
                        <input onChange={(e) => {
                            setTelefoonnummer(e.target.value);
                            check_number(e.target.value);
                        }} id="telefoonnummer" style={{fontFamily: "Poppins", color: "#000"}} placeholder="+31 6 235 842 48" required></input>
                    </div>
                    <h4 style={{fontWeight: 200, marginTop: "10px", fontSize: 13, color: '#ff0033'}}> {numberAvailabe ? "" :  "telefoonnummer is al in gebruik"}</h4>
                    <button type="submit" className={styles.signup_button}>
                        Aanmelden
                    </button>
                </form>
                <div className={styles.info_links}>
                    <h5>Help</h5>
                    <h5>Privacy</h5>
                    <h5>Voorwaarden</h5>
                </div>
            </div>
        </div>
    )
}



export default Signup