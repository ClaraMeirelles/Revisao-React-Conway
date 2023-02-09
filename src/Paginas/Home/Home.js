import React, { useState } from "react";
import Header from "../../Componentes/Header/Header";
import { turmas } from "../../assets/arrayTurmas";
import CardTurma from "../../Componentes/CardTurma/CardTurma";

export default function Home(props) {
    const [arrayTurmas, setArrayTurmas] = useState(turmas)
    const [buscaTurma, setBuscaTurma] = useState("")
    const [buscaModulo, setBuscaModulo] = useState("")
    const [ordenaModulos, setOrdenaModulos] = useState("")
    const [ordenaTurmas, setOrdenaTurmas] = useState("")
    return (
        <>
            <Header turma={props.turma} usuarioProps={props.usuario} />
            <h1>Revisão de React</h1>
            <h3>Filtros das turmas</h3>
            <input value={buscaTurma} onChange={(e) => setBuscaTurma(e.target.value)} placeholder="Turma" />
            <input value={buscaModulo} onChange={(e) => setBuscaModulo(e.target.value)} placeholder="Módulo" type="number" />
            <select value={ordenaModulos} onChange={(e) => setOrdenaModulos(e.target.value)} placeholder="orderar modulos" >
                <option value={""} disabled>selecione uma ordem</option>
                <option value={"cresc"}>Crescente</option>
                <option value={"decresc"}>Decrescente</option>
                <option value={""}>nenhum</option>
            </select>
            <select value={ordenaTurmas} onChange={(e) => setOrdenaTurmas(e.target.value)} placeholder="orderar modulos" >
                <option value={""} disabled>selecione uma ordem</option>
                <option value={"cresc"}>Crescente</option>
                <option value={"decresc"}>Decrescente</option>
                <option value={""}>Nenhum</option>
            </select>
            <hr />
            <button onClick={props.trocaNome}>senway</button>
            {arrayTurmas
                .filter((turma) => {
                    return turma.turma.toLowerCase().includes(buscaTurma.toLowerCase())
                })
                .filter((turma) => {
                    return buscaModulo ? turma.modulo === Number(buscaModulo) : true
                })
                .sort((atual, proximo) => {
                    if (ordenaModulos === "cresc") {
                        return atual.modulo - proximo.modulo
                    } else if (ordenaModulos === "decresc") {
                        return proximo.modulo - atual.modulo
                    }
                })
                .sort((atual, proximo) => {
                    if (ordenaTurmas === "cresc") {
                        return atual.turma < proximo.turma ? -1 : 1
                    } else if (ordenaTurmas === "decresc") {
                        if(atual.turma > proximo.turma){
                            return -1
                        } else {
                            return 1
                        }
                    }
                })
                .map((turma) => {
                    return <CardTurma key={turma.turma} turma={turma} />
                })}
        </>
    )
}

