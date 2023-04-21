import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import Input from '../components/Input';

export const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, subject, message } = formValues;
    const data = {
      personalizations: [
        {
          to: [
            {
              email: 'correo@gmail.com',
            },
          ],
          subject: subject,
        },
      ],
      from: {
        email: email,
        name: name,
      },
      content: [
        {
          type: 'text/plain',
          value: message,
        },
      ],
    };
    axios
      .post('https://api.sendgrid.com/v3/mail/send', data, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
          'Content-Type': 'aplication/json',
        },
      })
      .then((response) => {
        alert('Mensaje enviado exitosamente');
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        console.log(response);
      })
      .catch((error) => {
        alert('Ocurrió un error al enviar el mensaje');
        console.error(error);
      });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-10 xl:mb-16  px-3">
        <h1 className="text-orange-500 text-3xl font-semibold">Contactanos</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col my-5">
          <Input
            type="text"
            label="Nombre"
            placeholder="| Ingrese su nombre"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full h-11"
            required
            error=""
          />
          <Input
            type="email"
            label="Email de contacto"
            placeholder="| Ingrese su correo electrónico"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full h-12"
            required
            error=""
          />
          <Input
            type="text"
            label="Asunto"
            id="subject"
            placeholder="| Ingrese el motivo de este mensaje"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            className="w-full h-12"
            required
            error=""
          />
          <div className="mt-3 mb-12">
            <label
              htmlFor="query"
              className="relative top-3 px-2 py-1 font-medium bg-white text-xs text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="query"
              placeholder="| Detalle cuál es el problema que necesita resolver"
              value={formValues.message}
              onChange={handleChange}
              className="w-full rounded-xl border-2 border-black p-3 text-sm h-32"
              required
            ></textarea>
          </div>
          <Button type="submit" className="py-2 font-semibold text-white">
            Enviar
          </Button>
        </form>
      </div>
    </Layout>
  );
};
