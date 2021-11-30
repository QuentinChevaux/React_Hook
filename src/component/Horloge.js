import React, {useState, useEffect} from 'react';

function Horloge() {

    const [time, setTime] = useState( new Date().toLocaleTimeString() );

    useEffect( () => {

        setInterval(() => {

            setTime(new Date().toLocaleTimeString())
            
        }, 1000) 

    }, [time])

    return (

        <div className='horloge'>

            <p>Il est {time} heure</p>

        </div>

    )

}

export default Horloge;