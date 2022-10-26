import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serverApi from "../../api/servidor-api";
import estilos from "./ListaCategorias.module.css";

const ListaCategorias = () => {
  /* Atribuição do useState para manipular os dados do componente 
1º parâmetro: variável que terá os dados
2º parâmetro: função responsável por atualizar (setter)
Obs.: o que colocamos no useState representa o valor inicial */
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();

        /* Precisamos passar os dados capturador da API
        para o state do componente via Setter (obrigatório!) */
        setCategorias(dados);

        /* teste do state de categorias */
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {/* {categorias.map((categoria) => {
          return <li key={categoria.id}> {categoria.nome} </li>;
        })} */}

        {categorias.map(({ id, nome }) => {
          return (
            <li key={id}>
              <Link to="">{nome}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
