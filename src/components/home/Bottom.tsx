import Button from '../Button';
import Card from '../Card';
import CardOng from '../CardOng';
import LandingOrgsSVG from '../../assets/landing-orgs.svg';

export default function LandingPageBottom() {
  return (
    <div className="text-white max-w-7xl mx-auto">
      <div className="flex justify-evenly mb-5">
        <div className="border xl:px-16 md:px-16 px-5 py-2 border-[#FF983D] text-[#434343] rounded-2xl">
          Diseño
        </div>
        <div className="border xl:px-16 md:px-16 px-5 py-2 border-[#FF983D] text-[#434343] rounded-2xl">
          Comunicación
        </div>
        <div className="border xl:px-16 md:px-16 px-5 py-2 border-[#FF983D] text-[#434343] rounded-2xl">
          Tecnología
        </div>
      </div>

      <div className="bg-[#FFDC72] rounded-lg xl:mx-12 md:mx-10 mb-20 py-20 flex justify-around text-black">
        <div className="pl-12 w-full grid grid-flow-col  gap-9  overflow-x-scroll md:grid  md:grid-flow-col">
          <CardOng />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center h-[25rem] bg-[#313131]">
        <div className="flex items-center flex-col">
          <h3 className="xl:text-5xl md:text-3xl text-2xl mb-5 font-medium">Enlace - ONG</h3>
          <svg
            width="150"
            height="100"
            viewBox="0 0 61 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-96 xl:h-48 md:w-80"
          >
            <path
              d="M24.9616 14.3553C24.9998 15.8855 23.7757 17.1096 22.2456 17.0713C20.7537 17.0713 19.5296 15.8472 19.5296 14.3553C19.5296 6.896 25.5927 0.832903 33.0521 0.832902L46.5936 0.832901C54.053 0.832902 60.1161 6.896 60.1161 14.3553C60.1161 21.8147 54.053 27.8778 46.5936 27.8778L40.8939 27.8778C42.4814 26.3285 43.8012 24.5115 44.7575 22.4841L46.5745 22.465C51.0692 22.4841 54.7033 18.8501 54.6841 14.3553C54.7033 9.86061 51.0692 6.22657 46.5745 6.2457L33.0712 6.2457C28.5765 6.22658 24.9424 9.86061 24.9616 14.3553ZM38.4649 11.6394C39.9567 11.6394 41.1808 12.8635 41.1808 14.3553C41.1808 21.8147 35.1177 27.8778 27.6584 27.8778L14.1168 27.8778C6.65749 27.8778 0.594387 21.8147 0.594388 14.3553C0.594388 6.896 6.65749 0.832902 14.1168 0.832901L19.8165 0.832903C18.229 2.38215 16.9093 4.19916 15.9338 6.2457L14.136 6.2457C9.64122 6.22657 6.00719 9.86061 6.02632 14.3553C6.00719 18.8501 9.64122 22.4841 14.136 22.465L27.6393 22.465C32.134 22.4841 35.768 18.8501 35.7489 14.3553C35.7106 12.8252 36.9347 11.6011 38.4649 11.6394Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mx-3">
          <h3 className="xl:text-6xl md:text-4xl text-2xl font-bold">Newsletter</h3>
          <p className="xl:text-2xl md:text-2xl font-light">
            Sé el primero en conocer todas las búsquedas
          </p>
          <form>
            <div className="relative z-0 w-full mb-6 group mt-2">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo Electrónico
              </label>
              <span className="font-light text-sm">Podés desuscribirte en cualquier momento.</span>
            </div>
            <Button type="submit" className="bg-[#FF983D] xl:p-3 md:p-3 p-2 text-xl  rounded-md">
              Suscribirme
            </Button>
          </form>
        </div>
      </div>

      <Card className="bg-[#A8A1DF] xl:my-44 md:my-28 my-10 rounded-3xl xl:mx-20 mx-3 pr-0 grid xl:grid-cols-2 items-center">
        <div className="xl:p-10 md:pl-10 px-20 flex">
          <img src={LandingOrgsSVG} title="img" />
        </div>
        <Card className="bg-[#FF983D] w-full rounded-l-xl rounded-r-none">
          <h3 className="xl:text-4xl md:text-3xl text-xl font-medium text-black">
            Organizaciones:
          </h3>
          <div className="">
            <p className="xl:text-xl md:text-xl text-lg text-white xl:mt-9 md:mt-7 mt-2">
              Si sos una organización o formás parte de una y te interesa sumarte a esta iniciativa
              ofreciendo prácticas a nuevos profesionales, te invitamos a registrarte y a leer las
              bases y condiciones.{' '}
            </p>
            <div className="flex mt-3 justify-between">
              <Button
                className="xl:px-10 px-4 md:px-10 xl:py-2 md:py-2 py-1 border bg-[#EEBD87]"
                type="button"
              >
                Registrarme
              </Button>
              <Button className="xl:px-10 px-4 md:px-10 xl:py-2 md:py-2 py-1 border" type="button">
                Base y condiciones
              </Button>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}
