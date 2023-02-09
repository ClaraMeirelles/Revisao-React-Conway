import React, { useState } from "react";
import Header from "../../Componentes/Header/Header";
import { turmas } from "../../assets/arrayTurmas";
export default function Cadastro(props) {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [turmaSelect, setTurmaSelect] = useState("")

    
  const enviar = (e) =>{
    console.log(e)
    if(e.key === "Enter"){
        cadastraUsuario()
    }
  }

    const cadastraUsuario = () =>{
        const novoUsuario = {
            nome: nome,
            turma: turmaSelect
        }
        props.setUsuario(novoUsuario)
        const usuarioString = JSON.stringify(novoUsuario)
        localStorage.setItem("usuario", usuarioString)
    }

    return (
        <>
            <Header turma={props.turma} usuarioProps={props.usuario} />
            <h1>Inputs controlados</h1>
            <input value={nome} onChange={(e)=>setNome(e.target.value)} onKeyDown={enviar} />
            <input value={idade} onChange={(e)=>setIdade(e.target.value)} type="number"/>
            <select value={turmaSelect} onChange={(e)=>setTurmaSelect(e.target.value)}>
                <option value="" disabled>Selecione uma turma</option>
                {
                    turmas.map((elemento)=>{
                        return <option key={elemento.turma} value={elemento.turma}>{elemento.turma}</option>
                    })
                }
            </select>
            <button onClick={cadastraUsuario} >Cadastra usuario</button>
         </>
    )
}

