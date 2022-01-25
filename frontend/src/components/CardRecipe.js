
import { useEffect, useState } from 'react';
import { Row, Col, Card, Container, Button, Form, Modal } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';


const CardRecipe = ( props ) => {

    const [show, setShow] = useState(false);

    const [recipe, setRecipe] = useState([]);

    const handleClose = () => setShow(false);
    
    const handleShow = (e) => {
        //console.log(recipe_id)
        getOneRecipes(parseInt(e.currentTarget.id));
        setShow(true);
    }
    


    const [recipes, setRecipes] = useState([]);
    var json;
    
    let array=window.location.href.split("/");
    let size=array.length;
    let recipe_params=array[size-1]

    useEffect(() => {
        getAllRecipes();
            /*getRecipes()
            .then((res) => {
                setItem(res);
            });*/
    }, [])

    function getAllRecipes() {
        fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/type/'+recipe_params)
          .then(response => {
            return response.text();
          })
          .then(data => {
            if(data.includes('"recipe":null')){
                console.log('NO DATA');
                return (<Navigate to="/home" />);
            }
            json=JSON.parse(data)['recipe']; //convert JSON to array javascript
            console.log(json);
            setRecipes(json);
          });
    }

    function getOneRecipes(id) {
        fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/'+id)
          .then(response => {
            return response.text();
          })
          .then(data => {
            if(data.includes('"recipe":null')){
                console.log('NO DATA');
                return (<Navigate to="/home" />);
            }
            json=JSON.parse(data)['recipe']; //convert JSON to array javascript
            console.log(json);
            setRecipe(json);
          });
    }

    const handleLike = (e) => {
        let recipe_id=parseInt(e.currentTarget.id);

        fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/like/'+recipe_id, {
            mode: 'no-cors',
            method: 'post',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
           })
           .then(response => {
               console.log(response)
            return response.text();
          })
          .then(data => {
            console.log(data)
          });;

           alert("Gracias por tu like!")
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
                                    
                                    <Button onClick={handleShow} className="mb-1"variant="primary" size="sm" active id={it.id}>
                                    Ver Receta
                                    </Button>{''}
                                    <Button className="mb-1"variant="primary" size="sm" active id={it.id}
                                    onClick={ handleLike }>
                                    Like
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

            <Modal show={show} onHide={handleClose}
            animation={true}
            size="md">
                <Modal.Header closeButton>
                        <Modal.Title>{recipe.recipe_name}</Modal.Title>
                </Modal.Header>

                Ingredientes:
                <Modal.Body>

                    
                    {recipe.ingredients}
                </Modal.Body>

                    Descripcion:
                <Modal.Body>
                    {recipe.description}
                </Modal.Body>

                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        
        </>

    )
}

export default CardRecipe;