import React, { useState } from "react";
import Header from "../../Componentes/Header/Header";
import { turmas } from "../../assets/arrayTurmas";
import CardTurma from "../../Componentes/CardTurma/CardTurma";

export default function Home(props) {
    const [arrayTurmas, setArrayTurmas] = useState(turmas)
    console.log(turmas)

    return (
        <>
            <Header turma={props.turma} />
            <h1>Revisão de React</h1>
            <button onClick={props.trocaNome}>senway</button>
            {arrayTurmas.map((turma)=>{
                return <CardTurma key={turma.turma} turma={turma}/>
            })}
        </>
    )
}

