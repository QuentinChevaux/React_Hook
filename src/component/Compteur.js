import React, { useState } from 'react'

function Compteur() {

    const [count, setCount] = useState(0)

    return (

        <div className='bouton'>

            <h2>Vous avez cliqué sur le bouton {count} fois</h2>

            <button onClick = {() => setCount(count + 1 )}>Cliquez içi</button>

            <button onClick = { () => setCount(0)}>Remettre le compteur à 0</button>

        </div>


    )
    
}

export default Compteur;