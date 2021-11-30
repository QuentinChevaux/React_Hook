import { Link } from "react-router-dom";

function Home() {

    return(

        <>
            <main>

                <h2>Voiçi la Page D'Accueil</h2>

                <p>Blablablabla</p>

            </main>

            <nav>

                <Link to = '/about'>About</Link>

            </nav>

        </>

    )

}

export default Home;