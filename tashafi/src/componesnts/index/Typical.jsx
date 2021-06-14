import React, { useEffect, useState } from 'react'
import Typical from 'react-typical'


export default function Typicaltext(props) {
    // const [speciality , setSpeciality] = useState(props.speciality)
    // const speciality2= props.specialit

    // useEffect(()=>{
    //     let arr= []
    //     console.log("speciality in typical")
    //     console.log(props.speciality)
    //     props.speciality.forEach((ele)=>{
    //         arr.push(ele.name)
    //         arr.push(4000)
    //     })
    //     console.log(arr)

    //     setSpeciality(arr)
    // },[])



    return (
        <>
            <h2> Find local{' '}
                <Typical
                    loop={Infinity}
                    wrapper="span"
                    steps={['doctor', 4000, 'dentist', 4000,'Family medicine',4000,'Surgery',4000]}
                //   steps={ [props.speciality] }
                />
                <br />
                You can trust
            </h2>
        </>
    )
}
