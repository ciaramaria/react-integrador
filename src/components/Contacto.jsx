import React from "react";
import { Formik, Form, Field } from "formik";

const Contacto = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container mx-auto px-4">
    

      <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
      <Formik initialValues={{ name: "", email: "", message: "" }} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nombre
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
          
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Mensaje
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              rows={4}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </Form>
      </Formik>

      
    </div>
  );
};

export default Contacto;
