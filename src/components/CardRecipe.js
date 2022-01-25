import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

const recipes = [
  {
    id: 1,
    name: "Aros de Cebolla y Calabazas",
    thumbnail: "calabazas-con-aros-de-cebolla.jpg",
    ingredientes: {
      ingrediente1: "Calabacita",
      ingrediente2: "Cebolla",
      ingrediente3: "Aceite de Oliva",
      ingrediente4: "Harina",
      ingrediente5: "Queso Parmesano",
      ingrediente6: "Aceite",
    },
    descripcion: {
      proced1:
        "Asa 2 calabacitas a la plancha con 2 cuacharadas de aceite de oliva. Reserva.",
      proced2:
        "De una de harina, guarda dos cucharadas de harina y enharina 1 manojo de aros de cebolla en ellas. Mezcla el resto con 3/4 de taza de cerveza y salpimienta. Pasa los aros por la mezcla y fríelos en aceite caliente hasta que doren y dejen de salir burbujas en el aceite.",
      proced3:
        "Sírvelos sobre rebanadas de calabaza y espolvorea 1/2 taza de queso parmesano sobre ellas.",
    },
  },
  {
    id: 2,
    name: "Trufas de Chocolate Vegana",
    thumbnail: "bolitas-de-chocolate-veganas.jpg",
    ingredientes: {
      ingrediente1: "Datil",
      ingrediente2: "Cacao",
      ingrediente3: "Pepitas de calabazas tostadas y peladas",
      ingrediente4: "Miel",
    },
    descripcion: {
      proced1:
        "Coloca 1 taza de datiles sin hueso, 4 cucharadas de cacao, 1 taza de pepitas y 1 taza de miel en el procesador de alimentos. Tritura hasta formar una masa uniforme.",
      proced2:
        "Forma bolitas con la mezcla y mantenlas en refrigeración hasta servir.",
    },
  },
  {
    id: 3,
    name: "Ensalada Mediterranea",
    thumbnail: "ensalada-mediterranea.jpg",
    ingredientes: {
      ingrediente1: "Rabanos",
      ingrediente2: "Jitomates cherry rojo y amarillo",
      ingrediente3: "Pepino",
      ingrediente4: "Mix de hojas verdes",
      ingrediente5: "Jugo de limon",
    },
    descripcion: {
      proced1:
        "Mezcla los alimentos comenzando con las hojas verdes y los rábanos a gusto. Agrega, posteriormente 1 pepino y al final 1/2 jitomates.",
      proced2: "Para finalizar, baña con jugo de 1 limón.",
    },
  },
  {
    id: 4,
    name: "Ensalada de mandarina con naranja, miel y hojas de menta",
    thumbnail: "ensalada-dulce.jpg",
    ingredientes: {
      ingrediente1: "Naranjas",
      ingrediente2: "Mandarinas",
      ingrediente3: "Miel",
      ingrediente4: "Hojas de menta",
    },
    descripcion: {
      proced1:
        "Coloca en una ensaladera o plato extendido las rodajas de 2 naranjas. Posteriormente acomoda los gajos de 2 mandarinas y agrégales la miel.",
      proced2:
        "Finalmente, utiliza las hojas de menta para decorar tu ensalada.",
    },
  },
  {
    id: 5,
    name: "Espagueti rojo",
    thumbnail: "espagueti-rojo.jpg",
    ingredientes: {
      ingrediente1: "1 paquete de espagueti",
      ingrediente2: " 1/4 de crema agria",
      ingrediente3: "1 taza de puré de jitomate",
      ingrediente4: "1/4 de mantequilla",
      ingrediente5: "1 cubo de sazonador de pollo ",
      ingrediente6: "Queso parmesano",
      ingrediente7: "Sal y pimienta al gusto",
    },
    descripcion: {
      proced1:
        "Hierve 2 litros de agua y, cuando esté en su punto, agrega 2 cucharadas de sal. Posteriormente, cuece la pasta hasta que esté blanda..",
      proced2: "Retira del fuego, cuela la pasta y desecha el agua.",
      proced3:
        "Hierve el puré de jitomate a fuego lento y añade la crema, la mantequilla y el cubo sazonador.",
      proced4: "Vierte el espagueti en la salsa y mezcla.",
      proced5: "Sirve. Espolvorea con el queso parmesano al gusto. ",
    },
  },
  {
    id: 6,
    name: "Costillas de cerdo a la barbacoa",
    thumbnail: "costillas-de-cerdo-barbecue.jpg",
    ingredientes: {
      ingrediente1: "Un costillar de costilla corta de cerdo",
      ingrediente2: "1 taza de cátsup",
      ingrediente3: "2 cucharadas de azúcar",
      ingrediente4: " 1 cucharada de salsa maggi",
      ingrediente5: " 1 cucharada de salsa inglesa",
      ingrediente6: "1 cucharada de soya",
      ingrediente7: "2 cucharadas de salsa ahumada",
      ingrediente8: "2 cucharadas de aceite",
    },
    descripcion: {
      proced1:
        "Cuece las costillas en agua hasta que llegue al hervor y cuece por cinco minutos más.",
      proced2: "Mezcla los ingredientes restantes y baña las costillas.",
      proced3: "Hornea durante 1 hora a 170oC, trocea y sirve.",
    },
  },
];

const CardRecipe = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(item);

  const getRecipes = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(recipes);
      }, 3000);
    });
  };

  useEffect(() => {
    setLoading(true);
    getRecipes()
      .then((res) => {
        setItem(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <div className="loading">
            <img
              className="load"
              src="http://www.gifde.com/gif/otros/decoracion/cargando-loading/cargando-loading-041.gif"
            />
          </div>
        ) : (
          <Row xs={1} md={2} className="g-4">
            {item.map((it) => (
              <Col>
                <Card>
                  <Card.Body className="cardBody">
                    <Card.Img variant="top" src={it.thumbnail} />

                    <Card.Title>{it.name}</Card.Title>

                    <Button
                      className="mb-1"
                      variant="primary"
                      size="sm"
                      active
                      onClick={handleShow}
                    >
                      Ver Receta
                    </Button>
                    <Modal
                      backdrop="static"
                      keyboard={false}
                      show={show}
                      onHide={handleClose}
                      animation={true}
                      size="md"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>{it.name}</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <img src={it.thumbnail}></img>
                        <p>
                          Ingredientes: {it.ingredientes.ingrediente1},{" "}
                          {it.ingredientes.ingrediente2},{" "}
                          {it.ingredientes.ingrediente3},{" "}
                          {it.ingredientes.ingrediente4},{" "}
                          {it.ingredientes.ingrediente5},{" "}
                          {it.ingredientes.ingrediente6},{" "}
                          {it.ingredientes.ingrediente7},{" "}
                          {it.ingredientes.ingrediente8}.
                        </p>
                        <p>
                          Preparación: {it.descripcion.proced1}
                          {it.descripcion.proced2} {it.descripcion.proced3}
                        </p>
                        <Col
                        className="pl0">
                          <Form.Control
                            size="md"
                            type="text"
                            placeholder="Escribir comentario"
                          />
                        </Col>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Guardar
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {""}
                    <Col>
                      <Form.Control
                        className="mb-1"
                        size="sm"
                        type="text"
                        placeholder="Escribir comentario"
                      />
                    </Col>
                    <Button className="mb-1" variant="primary" size="sm" active>
                      Borrar
                    </Button>
                    <Button variant="primary" size="sm" active>
                      Enviar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default CardRecipe;
