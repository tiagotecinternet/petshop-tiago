import Cabecalho from "./components/Cabecalho/Cabecalho";
import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";

const App = () => {
  return (
    <>
      <Cabecalho />
      <main className="limitador">
        <Home />
        <Produtos />
        <Sobre />
        <Contato />
      </main>
    </>
  );
};

export default App;
