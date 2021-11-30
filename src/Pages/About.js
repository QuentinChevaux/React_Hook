import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function About() {

    let navigate = useNavigate()

    return (

        <>

            <main>

                <h2>Voiçi la Page About</h2>

                <p>Blablablabla</p>

            </main>

            <nav>

                <button onClick = { () => {

                    navigate('/')

                }}>Home</button>

                {/* <Link to = '/'>Home</Link> */}

            </nav>

        </>

    )

}

export default About;