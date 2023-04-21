import Layout from '../components/layout/Layout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type termsType = {
  title: string;
  paragraph: string;
};

const terms: termsType[] = [
  {
    title: '1. Introducción:',
    paragraph:
      'Enlace es una plataforma digital que conecta organizaciones sin fines de lucro con perfiles en entrenamiento (trainee o junior) con el objetivo en común de realizar un voluntariado o pasantía dentro de un mismo campo de interés con el fin de adquiriendo experiencia laboral sin recibir remuneración alguna. La idea es que puedas obtener una valiosa experiencia y mejorar tus habilidades mientras ayudas a las organizaciones a cumplir su misión. La organización, a su vez, se compromete a educar y apoyar al voluntario durante su trabajo y a proporcionar un certificado y una recomendación al final de su periodo de voluntariado.',
  },
  {
    title: '2. Perfil del voluntario:',
    paragraph:
      'Las búsquedas están dirigidas a perfiles en entrenamiento (trainee o junior), lo que significa que no se requiere experiencia previa para participar. Sin embargo, se espera que el voluntario tenga un conocimiento básico de la materia relacionada con la organización en la que desee colaborar.',
  },
  {
    title: '3. Duración del voluntariado:',
    paragraph: 'El periodo de voluntariado no puede superar los 6 meses.',
  },
  {
    title: '4. Posibilidad de un segundo periodo de contratación:',
    paragraph:
      'La organización puede ofrecer al voluntario la posibilidad de volver a colaborar con ellos en un segundo voluntariado o incluso ofrecerle un contrato, pero esta decisión queda a cargo del voluntario de aceptar y de la organización de realizar.',
  },
  {
    title: '5. Responsabilidad de la página:',
    paragraph:
      'Enlace no se hace responsable por los incumplimientos que puedan surgir entre la organización y el voluntario. No obstante, agradecemos que se nos informe de cualquier problema para poder tomar las medidas necesarias y evitar futuras malas prácticas.',
  },
  {
    title: '6. Modificaciones a las bases y condiciones:',
    paragraph:
      'La página de voluntariado se reserva el derecho de modificar estas bases y condiciones en cualquier momento. Dichas modificaciones entrarán en vigencia inmediatamente después de su publicación en la página.',
  },
  {
    title: '7. Ley aplicable y jurisdicción:',
    paragraph:
      'Estas bases y condiciones se rigen por las leyes Argentinas. Cualquier controversia que surja de o en relación con estas bases y condiciones será sometida a la jurisdicción exclusiva de los tribunales de la nación.',
  },
];

type volunteerType = {
  list: string;
};
const volunteer: volunteerType[] = [
  {
    list: 'La organización se compromete a proporcionar una descripción clara y detallada del trabajo voluntario, incluyendo las responsabilidades y las habilidades requeridas para realizarlo.',
  },
  {
    list: 'La organización debe ofrecer un ambiente de trabajo seguro y saludable para el voluntario, garantizando que se cumplan todas las normas de seguridad y salud pertinentes.',
  },
  {
    list: 'La organización debe estar disponible para responder a preguntas y proporcionar orientación al voluntario en cualquier momento durante su período de voluntariado.',
  },
  {
    list: 'La organización debe tratar al voluntario con respeto y equidad, sin discriminación por motivos de edad, género, raza, orientación sexual, religión, discapacidad u otra condición.',
  },
  {
    list: 'La organización debe informar al voluntario sobre cualquier política o regla interna que deba cumplir mientras realiza su trabajo voluntario, y proporcionarle los recursos y materiales necesarios para llevar a cabo su trabajo',
  },
  {
    list: 'La organización debe estar dispuesta a proporcionar retroalimentación constructiva y apoyo para ayudar al voluntario a mejorar sus habilidades y cumplir con sus objetivos de aprendizaje.',
  },
  {
    list: 'La organización debe proporcionar un certificado de voluntariado y una recomendación al final del período de voluntariado, detallando las tareas realizadas, las habilidades adquiridas y la evaluación del desempeño del voluntario.',
  },
  {
    list: 'La organización debe cumplir con todas las leyes y regulaciones aplicables a su trabajo, incluyendo aquellas relacionadas con el voluntariado y la protección de los derechos laborales.',
  },
];

type ongType = {
  list: string;
};
const ong: ongType[] = [
  {
    list: 'Los voluntarios deben proporcionar información precisa y completa sobre su formación, habilidades y experiencia laboral, así como sobre sus motivaciones e intereses en el trabajo voluntario.',
  },
  {
    list: 'Los voluntarios deben cumplir con los horarios y plazos acordados para el trabajo voluntario y realizar sus tareas de manera efectiva y responsable.',
  },
  {
    list: 'Los voluntarios deben seguir las políticas y reglas internas de la organización y respetar las normas de conducta establecidas.',
  },
  {
    list: 'Los voluntarios deben tratar a los empleados y otros voluntarios de la organización con respeto y equidad, sin discriminación por motivos de edad, género, raza, orientación sexual, religión, discapacidad u otra condición.',
  },
  {
    list: 'Los voluntarios deben informar a la organización sobre cualquier problema o inquietud relacionada con su trabajo voluntario de manera oportuna y honesta.',
  },
  {
    list: 'Los voluntarios deben esforzarse por aprender y mejorar sus habilidades y conocimientos mientras realizan su trabajo voluntario, aprovechando las oportunidades de aprendizaje que se les brinden.',
  },
  {
    list: 'Los voluntarios deben mantener la confidencialidad y privacidad de la información confidencial de la organización, incluyendo información de los empleados y los clientes.',
  },
  {
    list: 'Los voluntarios deben respetar y proteger los bienes y recursos de la organización, y utilizarlos solamente para los fines específicos del trabajo voluntario.',
  },
  {
    list: 'Los voluntarios deben estar dispuestos a recibir retroalimentación constructiva y a trabajar en colaboración con la organización para mejorar sus habilidades y desempeño.',
  },
  {
    list: 'Los voluntarios deben cumplir con todas las leyes y regulaciones aplicables al trabajo voluntario, incluyendo aquellas relacionadas con la protección de los derechos laborales y la salud y seguridad en el trabajo.',
  },
];

export const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto my-10 px-3">
        <h1 className="text-orange-500 xl:text-3xl md:text-3xl text-2xl font-semibold mb-5">
          Bases y condiciones
        </h1>
        {terms.map((intro) => (
          <div key={intro.title}>
            <h2 className="font-semibold">{intro.title}</h2>
            <p className="text-sm my-3">{intro.paragraph}</p>
          </div>
        ))}
        <div className="gird divide-y divide-neutral-200 border border-1 border-orange-500 px-6 py-2 my-5 rounded-2xl ">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="xl:text-2xl md:text-xl text-md font-semibold text-orange-500">
                Responsabilidades de la organización
              </h2>
              <span className="text-orange-500 transition group-open:rotate-180">
                <ExpandMoreIcon />
              </span>
            </summary>
            <ul className="mt-3 text-sm list-disc ml-4">
              {volunteer.map((vol) => (
                <li key={vol.list} className="my-4">
                  {vol.list}
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="divide-y divide-neutral-200 border border-1 border-orange-500 px-6 py-2 my-5 rounded-2xl">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="xl:text-2xl md:text-xl text-md font-semibold text-orange-500">
                Responsabilidades del voluntario
              </h2>
              <span className="text-orange-500 transition group-open:rotate-180">
                <ExpandMoreIcon />
              </span>
            </summary>
            <ul className="text-sm list-disc ml-4">
              {ong.map((on) => (
                <li key={on.list} className="my-4">
                  {on.list}
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div className="my-5 flex justify-center">
          <span className="bg-orange-400 xl:text-sm md:text-sm text-xs p-2 rounded-lg text-white font-semibold">
            Al utilizar nuestra página, el voluntario y la organización aceptan y se comprometen a
            cumplir todas las bases y condiciones aquí establecidas.
          </span>
        </div>
      </div>
    </Layout>
  );
};
