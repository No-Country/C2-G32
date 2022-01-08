import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          contraseña: "",
          confirmacion: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          //Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }
          //validacion apellido
          if (!valores.apellido) {
            errores.apellido = "Por favor ingresa un apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
            errores.apellido = "El apellido solo puede contener letras y espacios";
          }
          //validacion contraseña
           if (!valores.contraseña) {
             errores.contraseña = "Por favor ingresa una contraseña";
           } else if (
             !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
               valores.contraseña
             )
           ) {
             errores.contraseña =
               "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
           }
          // validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, caracteres especiales, guiones y guion bajo.";
          }
          
         

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setFormularioEnviado(true);
          setTimeout(() => setFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="apellido">Apellido</label>
              <Field
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Apellido"
              />
              <ErrorMessage
                name="apellido"
                component={() => <div className="error">{errors.apellido}</div>}
              />
            </div>
            <div>
              <label htmlFor="contraseña">Contraseña</label>
              <Field
                type="password"
                id="contraseña"
                name="contraseña"
                placeholder="Contraseña"
              />
              <ErrorMessage
                name="contraseña"
                component={() => (
                  <div className="error">{errors.contraseña}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="confirmacion"> Verificar Contraseña</label>
              <Field type="password" id="confirmacion" name="confirmacion" />
              <ErrorMessage
                name="contraseña"
                component={() => (
                  <div className="error">{errors.confirmacion}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                name="correo"
                placeholder="correo@correo.com"
                id="correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>

            {/* <div>
              <Field name="pais" as="select">
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="peru">Peru</option>
              </Field>
            </div>
            <div>
              <label>
                <Field type="radio" name="sexo" value="hombre" />
                Hombre
              </label>
              <label>
                <Field type="radio" name="sexo" value="mujer" />
                Mujer
              </label>
            </div>
            <div>
              <Field name="mensaje" as="textarea" placeholder="Mensaje" />
            </div> */}
            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
        {/* {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                name="correo"
                placeholder="correo@correo.com"
                id="correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado &&<p className="exito">Formulario enviado con exito!</p>}
          </form>
        )} */}
      </Formik>
    </>
  );
};
export default Formulario;
