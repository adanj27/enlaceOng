import axios, { AxiosResponse } from 'axios';
import { OngInterface } from '../types/VolunteerPosition';

//==========================
// obtener post por tipo
//=========================
export async function getPost(tipo: string) {
  console.log(tipo);

  try {
    const response = await axios.get(`https://jsonserverong.onrender.com/post`);
    const data: [] = response.data;
    const ongtipo = data.filter(
      (post: OngInterface) => post.categories.toLowerCase() === tipo.toLowerCase(),
    );
    console.log(`TODOS LOST POST`, ongtipo);
    if (ongtipo) {
      return ongtipo;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
