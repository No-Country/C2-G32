
import { useEffect, useState } from 'react';
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';

/*const recipes = [
    {
        id:1,
        name: "Aros de Cebolla y Calabazas",
        thumbnail: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/01/calabazas-con-aros-de-cebolla.jpg",
        ingredientes: {
            ingrediente1: "Calabacita", 
            ingrediente2: "Cebolla",
            ingrediente3: "Aceite de Oliva",
            ingrediente4: "Harina",
            ingrediente5: "Queso Parmesano",
            ingrediente6: "Aceite"
        },
        descripcion: {
            proced1: "Asa 2 calabacitas a la plancha con 2 cuacharadas de aceite de oliva. Reserva.",
            proced2: "De una de harina, guarda dos cucharadas de harina y enharina 1 manojo de aros de cebolla en ellas. Mezcla el resto con 3/4 de taza de cerveza y salpimienta. Pasa los aros por la mezcla y fríelos en aceite caliente hasta que doren y dejen de salir burbujas en el aceite.",
            proced3: "Sírvelos sobre rebanadas de calabaza y espolvorea 1/2 taza de queso parmesano sobre ellas."
        }
    },
    {
        id:2,
        name: "Trufas de Chocolate Vegana",
        thumbnail: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/01/bolitas-de-chocolate-veganas.jpg",
        ingredientes: {
            ingrediente1: "Datil", 
            ingrediente2: "Cacao",
            ingrediente3: "Pepitas de calabazas tostadas y peladas",
            ingrediente4: "Miel"
        },
        descripcion: {
            proced1: "Coloca 1 taza de datiles sin hueso, 4 cucharadas de cacao, 1 taza de pepitas y 1 taza de miel en el procesador de alimentos. Tritura hasta formar una masa uniforme.",
            proced2: "Forma bolitas con la mezcla y mantenlas en refrigeración hasta servir."
        }
    },
    {
        id:3,
        name: "Ensalada Mediterranea",
        thumbnail: "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-mediterranea.jpg",
        ingredientes: {
            ingrediente1: "Rabanos", 
            ingrediente2: "Jitomates cherry rojo y amarillo",
            ingrediente3: "Pepino",
            ingrediente4: "Mix de hojas verdes",
            ingrediente5: "Jugo de limon"
        },
        descripcion: {
            proced1: "Mezcla los alimentos comenzando con las hojas verdes y los rábanos a gusto. Agrega, posteriormente 1 pepino y al final 1/2 jitomates.",
            proced2:"Para finalizar, baña con jugo de 1 limón."
        }
    },
   {
        id:4,
        name: "Ensalada de mandarina con naranja, miel y hojas de menta",
        thumbnail: "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-dulce.jpg",
        ingredientes: {
            ingrediente1: "Naranjas", 
            ingrediente2: "Mandarinas",
            ingrediente3: "Miel",
            ingrediente4: "Hojas de menta"
        },
        descripcion: {
            proced1: "Coloca en una ensaladera o plato extendido las rodajas de 2 naranjas. Posteriormente acomoda los gajos de 2 mandarinas y agrégales la miel.",
            proced2:"Finalmente, utiliza las hojas de menta para decorar tu ensalada."
        }
    },
    {
        id:5,
        name: "Espagueti rojo",
        thumbnail: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/02/espagueti-rojo.jpg",
        ingredientes: {
            ingrediente1: "1 paquete de espagueti", 
            ingrediente2: " 1/4 de crema agria",
            ingrediente3: "1 taza de puré de jitomate",
            ingrediente4: "1/4 de mantequilla",
            ingrediente5: "1 cubo de sazonador de pollo ",
            ingrediente6: "Queso parmesano",
            ingrediente7: "Sal y pimienta al gusto"
        },
        descripcion: {
            proced1: "Hierve 2 litros de agua y, cuando esté en su punto, agrega 2 cucharadas de sal. Posteriormente, cuece la pasta hasta que esté blanda..",
            proced2:"Retira del fuego, cuela la pasta y desecha el agua.",
            proced3: "Hierve el puré de jitomate a fuego lento y añade la crema, la mantequilla y el cubo sazonador.",
            proced4:"Vierte el espagueti en la salsa y mezcla.",
            proced5: "Sirve. Espolvorea con el queso parmesano al gusto. "
        },
    },
    {
        id:6,
        name: "Costillas de cerdo a la barbacoa",
        thumbnail: "https://dam.cocinafacil.com.mx/wp-content/uploads/2015/05/costillas-de-cerdo-barbecue.jpg",
        ingredientes: {
            ingrediente1: "Un costillar de costilla corta de cerdo", 
            ingrediente2: "1 taza de cátsup",
            ingrediente3: "2 cucharadas de azúcar",
            ingrediente4: " 1 cucharada de salsa maggi",
            ingrediente5: " 1 cucharada de salsa inglesa",
            ingrediente6: "1 cucharada de soya",
            ingrediente7: "2 cucharadas de salsa ahumada",
            ingrediente8: "2 cucharadas de aceite"
        },
        descripcion: {
            proced1: "Cuece las costillas en agua hasta que llegue al hervor y cuece por cinco minutos más.",
            proced2:"Mezcla los ingredientes restantes y baña las costillas.",
            proced3: "Hornea durante 1 hora a 170oC, trocea y sirve."
        }
    
    }

]*/

const CardRecipe = () => {

    //const [item, setItem]  = useState([]);
    const [recipes, setRecipes] = useState([]);
    var json;
    /*const getRecipes = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(recipes);
            }, 3000);
        })
    }*/


    useEffect(() => {
        getAllRecipes();
            /*getRecipes()
            .then((res) => {
                setItem(res);
            });*/

        
    }, [])

    function getAllRecipes() {
        fetch('http://localhost:8000/api/v1/posts')
          .then(response => {
            return response.text();
          })
          .then(data => {
            json=JSON.parse(data)['recipe']; //convert JSON to array javascript
            console.log(json);
            setRecipes(json);
          });
    }


    return (
        <>
            <Container>
            <Row xs={1} md={2} className="g-4">
                {recipes.map((it, index) => {
                    return (
                        <Col key={index}> 
                            <Card>
                                <Card.Body className="cardBody" >
                                <Card.Img variant="top" src={it.thumbnail} />
                                
                                    <Card.Title>{it.recipe_name}</Card.Title>
                                    
                                    <Button className="mb-1"variant="primary" size="sm" active>
                                    Ver Receta
                                    </Button>{''}
                                    <Col>
                                        <Form.Control className="mb-1" size="sm" type="text" placeholder="Escribir comentario" />
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
                ); })}
            
            </Row>
            </Container>
        
        </>

    )
}

export default CardRecipe;