import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        firstName:'lilly',
        lastName:'kurasala'
    }
    return (
        <div>
            <Andhrabank info={data}/>
            
            
            <Corporationbank info={data}/>
        </div>
    )
}
