import React from 'react'

type FizzProps = {
    isFizz: boolean
}

const Fizz =(props:FizzProps) => {
    const {isFizz} = props
    console.log(`Fizzが描画されました, isFizz = ${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

export default Fizz