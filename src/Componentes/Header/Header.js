import React from "react";
import { StyledHeader } from "./styles";

export default function Header({turma}) {
    return (
        <StyledHeader>
            <h1>{turma} ♥ ❤️ ♥ React</h1>
        </StyledHeader>
    )
}

