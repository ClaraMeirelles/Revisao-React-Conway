import React from "react"
import { CardEstilizado } from "./styles"

export default function CardTurma(props) {
    return (
        <CardEstilizado>
            <h1>{props.turma.turma} - {props.turma.modulo}</h1>
        </CardEstilizado>
    )
}
