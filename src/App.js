import { useState } from "react";
import Home from "./Paginas/Home/Home";
import Cadastro from "./Paginas/Cadastro/Cadastro";
function App() {
  // lógica
  const [turma, setTurma] = useState("Conway")
  const [usuario, setUsuario] = useState({})
  const [tela, setTela] = useState("cadastro")

  function trocaNome() {
    setTurma("Senway")
  }

  function trocaTela() {
    if (tela === "cadastro") {
      setTela("home")
    } else {
      setTela("cadastro")
    }
  }
  console.log(usuario)
  return (
    <div>
      {/* o que aparece pro usuário */}
      {
        tela === "cadastro" ?
          <Cadastro turma={turma} setUsuario={setUsuario} usuario={usuario} /> :
          <Home turma={turma} trocaNome={trocaNome} usuario={usuario}/>
      }
      <hr />
      <button onClick={trocaTela}>Muda tela</button>
    </div>
  );
}

export default App;
