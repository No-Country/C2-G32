
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const RankRecipe = ( props ) => {

    //const [item, setItem]  = useState([]);
    const [recipes, setRecipes] = useState([]);
    var json;
    
    useEffect(() => {
      getRankRecipes();
    }, [])

    function getRankRecipes() {
        fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/rank')
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

    return (
        <>
            <Container>
            <table className="table table-striped table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Receta</th>
                <th scope="col">Tipo</th>
                <th scope="col">Likes</th>
              </tr>
            </thead>
            <tbody>
                {recipes.map((it, index) => {
                    return (
                      <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{it.recipe_name}</td>
                      <td>{it.recipe_type}</td>
                      <td>{it.likes}</td>
                      </tr>
                ); })
                }
            </tbody>
            </table>
            </Container> 

            <div class="container" >
              <div style={{ textAlign: "center" }}><b>Para ver las mas votadas, suscribite!</b></div></div>
        </>

    )
}

export default RankRecipe;