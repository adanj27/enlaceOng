import mockup from '../assets/aboutUs/mockup.svg';
import lady from '../assets/aboutUs/ladyOnCouch.svg';
import man from '../assets/aboutUs/manAndTrees.svg';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';

export function AboutUs() {
  return (
    <>
      <Layout>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10 mt-14 mb-20">
            <div className="grid w-full xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-2">
              <div className="flex mx-3 flex-col gap-6">
                <h1 className="font-medium leading-7 xl:text-4xl md:text-2xl text-lg text-start text-[#FF983D]">
                  ¿Qué es Enlace ONG?
                </h1>
                <p className="font-medium xl:text-base md:text-lg text-sm leading-6 text-justify text-[#3C3C3C]">
                  Enlace es una plataforma digital que tiene como objetivo conectar organizaciones
                  sin fines de lucro con estudiantes y nuevos profesionales que buscan oportunidades
                  de prácticas laborales. Nuestra misión es contribuir a la sociedad al ayudar a
                  causas benéficas, al mismo tiempo que brindamos a los jóvenes profesionales
                  oportunidades de crecimiento en su carrera y la posibilidad de conectar con
                  personas en su campo de interés. Creemos que al proporcionar experiencias de
                  trabajo realistas, podemos ayudar a nuestros usuarios a desarrollar habilidades
                  valiosas y hacer una diferencia positiva en sus comunidades.
                </p>
              </div>
              <img className="px-3" src={mockup} alt="" />
            </div>

            <div className="grid px-3 w-full xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-2">
              <img className="px-3" src={lady} alt="" />
              <div className="flex flex-col xl:gap-28 md:gap-16 gap-10">
                <Card className="flex items-center justify-center rounded-3xl">
                  <p className="p-2 text-[#3C3C3C] font-normal xl:text-lg md:text-lg text-sm text-justify">
                    Ofrecemos un espacio seguro y confiable para profesionales y organizaciones,
                    donde persevere la ayuda y la colaboración colectiva.
                  </p>
                </Card>
                <Card className="flex items-center justify-center rounded-3xl">
                  <p className="text-[#3C3C3C] font-normal xl:text-lg md:text-lg text-sm text-justify p-2">
                    Fomentamos la ayuda voluntaria a causas sociales y brindamos oportunidades
                    reales para el desarrollo profesional.
                  </p>
                </Card>
              </div>
            </div>

            <div className="grid w-full xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-2">
              <div className="flex flex-col xl:gap-28 md:gap-20 gap-10 xl:w-[595px] mx-3">
                <Card className="flex items-center justify-center rounded-3xl">
                  <p className="text-[#3C3C3C] font-normal xl:text-lg md:text-lg text-sm text-justify xl:w-[320px]">
                    Buscamos ser el enlace conector entre profesionales en busca de su primera
                    experiencia y organizaciones sociales.
                  </p>
                </Card>
                <Card className="flex items-center justify-center rounded-3xl  xl:w-[400px] xl:h-32">
                  <p className="text-[#3C3C3C] font-normal xl:text-lg md:text-lg text-sm text-justify xl:w-[320px]">
                    Facilitamos la conexión entre partes para lograr una colaboración efectiva en
                    beneficio de la sociedad.
                  </p>
                </Card>
              </div>
              <img className="px-3" src={man} alt="" />
            </div>

            <div className="w-full flex items-center justify-center self-center h-36 rounded-3xl bg-[#FF983D]">
              <p className="text-white h-14 font-medium xl:text-xl md:text-xl text-lg leading-7 text-center">
                Únete a nuestra comunidad y ayúdanos a <br /> construir un mundo más justo y
                sostenible.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
