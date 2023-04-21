import React from 'react';
import Layout from '../components/layout/Layout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type questionVolunteerType = {
  question: string;
  answer: string;
};
const questionVol: questionVolunteerType[] = [
  {
    question: '¿Cómo puedo saber si soy elegible para una oportunidad de voluntariado en Enlace?',
    answer:
      'Enlace publicará los requisitos específicos para cada oportunidad de voluntariado en su sitio web y redes sociales. Los voluntarios deben revisar los requisitos y asegurarse de cumplirlos antes de postularse.',
  },
  {
    question:
      '¿Necesito tener experiencia previa en mi área de interés para aplicar a una oportunidad de voluntariado en Enlace?',
    answer:
      'No es necesario tener experiencia previa para aplicar a las oportunidades de voluntariado en Enlace, ya que están diseñadas para perfiles junior.',
  },
  {
    question: '¿Qué sucede después de que presento mi solicitud de voluntariado en Enlace?',
    answer:
      'La organización revisará tu solicitud y, si cumplís con los requisitos, te contactará para una entrevista. Si eres seleccionado para el trabajo voluntario, se te asignará un supervisor que te proporcionará orientación y apoyo.',
  },
  {
    question:
      '¿Cómo puedo obtener un certificado y una recomendación después de completar mi trabajo voluntario en Enlace?',
    answer:
      'Enlace proporcionará un certificado y una recomendación a los voluntarios que completen su trabajo voluntario con éxito. Los voluntarios deben comunicarse con la organización al final de su trabajo voluntario para solicitar estos documentos.',
  },
  {
    question:
      '¿Puedo trabajar en más de una oportunidad de voluntariado al mismo tiempo en Enlace?',
    answer:
      'Los voluntarios solo pueden trabajar en una oportunidad de voluntariado a la vez. Una vez que hayan completado su trabajo voluntario actual, pueden solicitar otra oportunidad de voluntariado si están interesados.',
  },
  {
    question: '¿Cómo puedo encontrar oportunidades de voluntariado en Enlace?',
    answer:
      'Enlace publicará oportunidades de voluntariado en su sitio web y en sus redes sociales. Los voluntarios pueden aplicar directamente a las oportunidades que les interesen.',
  },
  {
    question: '¿Qué tipo de trabajo puedo esperar realizar como voluntario en Enlace?',
    answer:
      'Enlace ofrece oportunidades de voluntariado para perfiles junior en diversas áreas, como marketing, finanzas, diseño, desarrollo de software y más.',
  },
  {
    question: '¿Cuánto tiempo dura el trabajo voluntario en Enlace?',
    answer: 'Los trabajos voluntarios disponibles en Enlace tienen una duración máxima de 6 meses.',
  },
  {
    question: '¿Recibiré una compensación por mi trabajo voluntario?',
    answer:
      'No se proporcionará compensación por el trabajo voluntario, ya que se trata de oportunidades de pasantías sin remuneración.',
  },
  {
    question: '¿Qué sucede si tengo que abandonar mi trabajo voluntario antes de que se complete?',
    answer:
      'Si por alguna razón un voluntario necesita abandonar su trabajo voluntario antes de que se complete, debe notificar a la organización lo antes posible y explicar las razones.',
  },
];

type questionOngType = {
  question: string;
  answer: string;
};
const questionOng: questionOngType[] = [
  {
    question: '¿Cómo puedo publicar oportunidades de voluntariado en Enlace?',
    answer: 'Las organizaciones pueden registrarse y crear sus propias búsquedas de voluntarios.',
  },
  {
    question:
      '¿Quién selecciona a los voluntarios adecuados para las oportunidades de voluntariado?',
    answer:
      'Las organizaciones mismas serán las encargadas del proceso de selección, y lo harán en base a sus propios criterios. Enlace no forma parte del seleccionado de voluntarios.',
  },
  {
    question:
      '¿Cómo se garantiza la seguridad de los voluntarios que trabajan con nuestra organización?',
    answer:
      'Las organizaciones deben garantizar la seguridad y salud de los voluntarios y cumplir con las normas de seguridad y salud pertinentes.',
  },
  {
    question: '¿Cómo se proporciona orientación y capacitación a los voluntarios para su trabajo?',
    answer:
      'Las organizaciones deben proporcionar orientación y capacitación a los voluntariospara ayudarlos a realizar su trabajo de manera efectiva y segura.',
  },
  {
    question: '¿Qué sucede si un voluntario no cumple con las expectativas de la organización?',
    answer:
      'Si un voluntario no cumple con las expectativas de la organización, la organización debe comunicar sus preocupaciones al voluntario y tratar de resolver cualquier problema de manera constructiva. En casos graves, la organización puede optar por dar por finalizado el trabajo voluntario antes de la fecha de finalización prevista.',
  },
  {
    question:
      '¿Cómo se puede garantizar que el trabajo voluntario realizado por los voluntarios sea de alta calidad?',
    answer:
      'Las organizaciones deben proporcionar orientación, capacitación y apoyo a los voluntarios para garantizar que realicen su trabajo de manera efectiva y eficiente.',
  },
  {
    question: '¿Cómo se puede medir el éxito del trabajo voluntario realizado por los voluntarios?',
    answer:
      'Las organizaciones deben establecer objetivos claros y medibles para el trabajo voluntario, y luego evaluar el éxito en función de estos objetivos.',
  },
  {
    question: '¿Cómo se pueden manejar los conflictos que surgen durante el trabajo voluntario?',
    answer:
      'Las organizaciones deben establecer un proceso claro para manejar los conflictos que puedan surgir entre los voluntarios y la organización o entre los propios voluntarios.',
  },
  {
    question:
      '¿Cómo pueden las organizaciones mantener a los voluntarios motivados y comprometidos durante su trabajo voluntario?',
    answer:
      'Las organizaciones deben proporcionar oportunidades para que los voluntarios se involucren en proyectos significativos, reciban retroalimentación y se sientan valorados.',
  },
  {
    question:
      '¿Qué sucede si la organización no puede proporcionar apoyo o capacitación adecuados a los voluntarios?',
    answer:
      'Si la organización no puede proporcionar apoyo o capacitación adecuados a los voluntarios, debe comunicar esto claramente antes de que el voluntario acepte la oportunidad de voluntariado. La organización puede optar por no aceptar a un voluntario si no puede proporcionar el apoyo.',
  },
];

export const Faq = () => {
  return (
    <Layout>
      <div className="my-10">
        <h1 className="max-w-7xl mx-auto px-3 text-orange-500 xl:text-3xl md:text-3xl text-2xl font-semibold">
          Preguntas frecuentes
        </h1>
        <h2 className="bg-orange-400 text-xl font-semibold text-white w-full flex justify-center py-3 my-5">
          Voluntarios
        </h2>
        <div className="max-w-5xl mx-auto px-3">
          {questionVol.map((quest) => (
            <details
              key={quest.question}
              className="group border border-1 border-orange-500 px-6 py-2 my-5 rounded-2xl"
            >
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <h3 className="xl:text-xl md:text-xl text-sm font-semibold text-orange-500">
                  {quest.question}
                </h3>
                <span className="text-orange-500 transition group-open:rotate-180">
                  <ExpandMoreIcon />
                </span>
              </summary>
              <p className="xl:text-md md:text-md text-sm my-3 ml-5">{quest.answer}</p>
            </details>
          ))}
        </div>
        <h2 className="bg-orange-400 text-xl font-semibold text-white w-full flex justify-center py-3 my-5">
          Organizaciones
        </h2>
        <div className="max-w-5xl mx-auto px-3">
          {questionOng.map((quest) => (
            <details
              key={quest.question}
              className="group border border-1 border-orange-500 px-6 py-2 my-5 rounded-2xl"
            >
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <h3 className="xl:text-xl md:text-xl text-sm font-semibold text-orange-500">
                  {quest.question}
                </h3>
                <span className="text-orange-500 transition group-open:rotate-180">
                  <ExpandMoreIcon />
                </span>
              </summary>
              <p className="xl:text-md md:text-md text-sm my-3 ml-5">{quest.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Layout>
  );
};
