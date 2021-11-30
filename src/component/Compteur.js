import React, { useState, useEffect } from 'react'

function Compteur() {

    const [count, setCount] = useState(0)

    useEffect ( () => {

        document.title = 'Vous avez cliqué ' + count + ' fois'

    }, [count]) // Un useEffect à toujours besoin de dépendances, si [] alors l'effet ne s'execute qu'au départ de la page, sinon il faut mettre la variable ciblée

    return (

        <div className='bouton'>

            <h2>Vous avez cliqué sur le bouton {count} fois</h2>

            <button onClick = { () => setCount(count + 1 )}>Cliquez içi </button>

            <button onClick = { () => setCount(0)}>Remettre le compteur à 0 </button>

        </div>

    )
    
}

export default Compteur;