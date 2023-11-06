import { useState } from "react";
import "./App.css";
import { Addcategoria } from "./component/AddCategoria";
import { Gifcategoria } from "./component/GifCategoria";
import Accordion from "react-bootstrap/Accordion";

function App() {
  const [categories, setCategory] = useState([]);

  return (
    <>
      <Addcategoria
        onSetCategory={(valor) => setCategory([valor, ...categories])}
      />
      <button onClick={() => setCategory([...categories.slice(1)])}>
        Limpiar Actual
      </button>
      <button onClick={() => setCategory([])}>Limpiar Todo</button>
      <Accordion defaultActiveKey="0">
        {categories.length > 0 ? (
          categories.map((element, index) => {
            return (
              <>
                <Accordion.Item key={index} eventKey={index}>
                  <Accordion.Header>{element}</Accordion.Header>
                  <Accordion.Body>
                    <Gifcategoria
                      key={element}
                      categoria={element}
                    ></Gifcategoria>
                  </Accordion.Body>
                </Accordion.Item>
              </>
            );
          })
        ) : (
          <Accordion.Item>
            <Accordion.Header>Ningun resultado</Accordion.Header>
          </Accordion.Item>
        )}
      </Accordion>
    </>
  );
}

export default App;
