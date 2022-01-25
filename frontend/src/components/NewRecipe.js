import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar from './Navbar'
const NewRecipe = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <>
    <Navbar/>
      <Formik
        initialValues={{
          recipe_name: "",
          recipe_type: "",
          thumbnail: "",
          ingredients: "",
          description: "",
          user_id:""
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.recipe_name) {
            errores.nombre = "Por favor complete el campo";
          } 

          if (!valores.recipe_type) {
            errores.nombre = "Por favor complete el campo";
          } 

          if (!valores.thumbnail) {
            errores.nombre = "Por favor complete el campo";
          } 

          if (!valores.ingredients) {
            errores.nombre = "Por favor complete el campo";
          } 
          
          if (!valores.description) {
            errores.nombre = "Por favor complete el campo";
          } 

          if (!valores.user_id) {
            errores.nombre = "Por favor complete el campo";
          } 

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          let ingredientes = [];
          let descripcion = [];

          ingredientes.push(valores.ingredients);
          descripcion.push(valores.description);

          let values = {
            "recipe_name": valores.recipe_name,
            "recipe_type": valores.recipe_type,
            "thumbnail": valores.thumbnail,
            "ingredients": ingredientes,
            "description": descripcion,
            "user_id": parseInt(valores.user_id)
           };

          let json_values = JSON.stringify(values)
          //console.log(json_values)
          fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/', {
            mode: 'no-cors',
            method: 'post',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
            body: json_values
           });

          resetForm();

          setFormularioEnviado(true);
          setTimeout(() => setFormularioEnviado(false), 4000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre Receta</label>
              <Field
                type="text"
                id="recipe_name"
                name="recipe_name"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="recipe_name"
                component={() => <div className="error">{errors.recipe_name}</div>}
              />
            </div>
            <div>
              <label htmlFor="apellido">Tipo de reseta</label>
              <Field
                type="text"
                id="recipe_type"
                name="recipe_type"
                placeholder="Tipo"
              />
              <ErrorMessage
                name="recipe_type"
                component={() => <div className="error">{errors.recipe_type}</div>}
              />
            </div>
            <div>
              <label htmlFor="username">Thumbnail</label>
              <Field
                type="text"
                id="thumbnail"
                name="thumbnail"
                placeholder="Imagen"
              />
              <ErrorMessage
                name="thumbnail"
                component={() => (
                  <div className="error">{errors.thumbnail}</div>
                )}
              />
            </div>
            
            <div>
              <label htmlFor="correo">Ingredientes</label>
              <Field
                type="text"
                name="ingredients"
                placeholder="Ingredientes"
                id="ingredients"
              />
              <ErrorMessage
                name="ingredients"
                component={() => <div className="error">{errors.ingredients}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo">Descripcion</label>
              <Field
                type="text"
                name="description"
                placeholder="Descripcion"
                id="description"
              />
              <ErrorMessage
                name="description"
                component={() => <div className="error">{errors.description}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo">USER ID</label>
              <Field
                type="text"
                name="user_id"
                placeholder="id"
                id="user_id"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.user_id}</div>}
              />
            </div>


            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
export default NewRecipe;
