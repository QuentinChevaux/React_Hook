import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function Home() {

    let navigate = useNavigate()
    
    return(
        
        <>
            <main>

                <h2>Voiçi la Page D'Accueil</h2>

                <p>Blablablabla</p>

            </main>

            <nav>

                <button onClick = { () => {

                    navigate("/about")

                }}>About</button>

                {/* <Link to = '/about'>About</Link> */}

            </nav>

        </>

    )

}

export default Home;