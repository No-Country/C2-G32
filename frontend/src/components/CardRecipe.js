
import { useEffect, useState } from 'react';
import { Row, Col, Card, Container, Button, Form, Modal,Table } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';


const CardRecipe = ( props ) => {

    const [show, setShow] = useState(false);
    const [comentario, setComentario] = useState("");
    const [recipe, setRecipe] = useState([]);
    const [ver_comentarios, setVer_comentarios] = useState([]);
    

    const handleClose = () => {
        setShow(false)
        setRecipe({...[]})
        if(ver_comentarios)
            setVer_comentarios([])
    };
    
    const handleShow = (e) => {
        getOneRecipes(parseInt(e.currentTarget.id));
        getCommentRecipes(e.currentTarget.id);
        setShow(true);
    }
    
    const handleSendComment = (e) => {
        
        let values = {
            "recipe_id": parseInt(e.currentTarget.id),
            "name": "anonymous",
            "comment": comentario
            };
        //console.log(values)
        let json_values = JSON.stringify(values)
        console.log(json_values)
        fetch('https://nocountry-g32app.herokuapp.com/api/v1/comment/', {
            mode: 'no-cors',
            method: 'post',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
            body: json_values
        });
    }

    const handleComment = (e) => {
        setComentario(e.target.value);
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

    function getCommentRecipes(id) {
        fetch('https://nocountry-g32app.herokuapp.com/api/v1/comment/'+id)
          .then(response => {
            return response.text();
          })
          .then(data => {
            if(data.includes('"recipe":null')){
                console.log('NO DATA');
                return (<Navigate to="/home" />);
            }
            json=JSON.parse(data)['comment']; //convert JSON to array javascript
            console.log(json);
            setVer_comentarios(json);
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
                                    
                                    <Button onClick={handleShow} className="mb-1"variant="info" size="sm" active id={it.id}>
                                    Ver Receta
                                    </Button>{''}
                                    <Button className="mb-1"variant="light" size="sm" active id={it.id}
                                    onClick={ handleLike }>
                                    💙
                                    </Button>{''}
                                    <Col>
                                        <Form.Control onChange={handleComment} className="mb-1" size="sm" type="text" placeholder="Escribir comentario" />
                                    </Col>
                                    <Button onClick={handleSendComment} variant="link" size="sm" active id={it.id}
                                    >
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
                        <Modal.Title><p><strong>{recipe.recipe_name} - {recipe.likes}💙</strong></p></Modal.Title>
                </Modal.Header>
                
                    <img className='ml-4 mr-4 mb-2 mt-2' src={recipe.thumbnail}></img>
                   
                <div className='ml-2' style={{ textAlign: "center" }}><p><strong>Ingredientes</strong></p></div>
                <Modal.Body>
                <table className="table">
                          <tbody> 
                    {
                        recipe.ingredients ?
                        (
                        recipe.ingredients.map((it, index) => {
                            return (
                            <>
                            
                            <tr key={index}>
                            <th scope="row">*</th>
                            <td>{it}</td>
                            </tr>
                           
                            </>
                        )})
                    )
                    :
                    (
                        <div></div>
                    )}
                     </tbody>
                            </table>
                </Modal.Body>

                <div className='ml-2' style={{ textAlign: "center" }}><p><strong>Pasos a seguir!</strong></p></div>
                <Modal.Body>
                <table className="table">
                          <tbody> 
                    {
                        recipe.description ?
                        (
                        recipe.description.map((it, index) => {
                            return (
                            <>
                            
                            <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{it}</td>
                            </tr>
                           
                            </>
                        )})
                    )
                    :
                    (
                        <div></div>
                    )}
                     </tbody>
                     </table>
                </Modal.Body>

                <hr></hr>
                
                <Table striped bordered hover variant="dark">
                <tbody> 
                {
                        ver_comentarios ?
                        (
                            ver_comentarios.map((it, index) => {
                            return (
                            <>
                            
                            <tr key={index}>
                            <th scope="row">{it.comment}</th>
                            <td>{it.name}</td>
                            <td>{it.created_at}</td>
                            </tr>
                           
                            </>
                        )})
                    )
                    :
                    (
                        <div></div>
                    )
                }
                </tbody>
                </Table>

                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default CardRecipe;