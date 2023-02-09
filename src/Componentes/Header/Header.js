import React, { useEffect, useState } from "react";
import { StyledHeader } from "./styles";

export default function Header({ turma, usuarioProps }) {
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        const usuarioString = localStorage.getItem("usuario")
        if (usuarioString) {
            const usuarioRecebido = JSON.parse(usuarioString)
            setUsuario(usuarioRecebido)
        }
    }, [usuarioProps])
    return (
        <StyledHeader>
            <h1>{turma} ♥ ❤️ ♥ React</h1>
            <p>Olá {usuario.nome}</p>
            {/* <button onClick={mostraUsuario}>mostra nome</button> */}
        </StyledHeader>
    )
}

