import React from 'react'
import Typical from 'react-typical'


export default function Typicaltext() {
    return (
        <>
             <h2> Find local{' '} 
         <Typical
          loop={Infinity} 
          wrapper="span" 
          steps={['doctor',3000 ,'dentist',2000] }  /> 
                  <br />
                You can trust
        </h2>
        </>
    )
}
