import axios, { AxiosResponse } from 'axios';
import { OngInterface } from '../types/VolunteerPosition';
// import { v4 as uuidv4 } from 'uuid';

//==========================
// Obtener usuario por Email
//=========================
export async function getUserByEmail(email: string) {
  try {
    const response = await axios.get(`https://enlace-ong.onrender.com/user?email=${email}`);
    const data = response.data;
    console.log('usuario buscado', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

//==========================
// Obtener usuario por id
//=========================
export async function getUserById(id: string) {
  try {
    const response = await axios.get(`https://enlace-ong.onrender.com/user/${id}`);
    const data = response.data;
    console.log(`usuario con id${id}`, data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// ============
// Create user
// ============
export interface User {
  id: string;
  isLoggin?: boolean;
  userName: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
  aboutme?: string;
  postulaciones_id_ong?: OngInterface;
  city?: string;
  country?: string;
  workmodality?: string;
  disponibilidad?: string;
  areas?: string;
  postulaciones?: string[];
  habilidades?: string;
  ubicacionTrabajo?: string;
  puestoTrabajo?: string;
}

export async function createUser(newUser: User): Promise<void> {
  // const newId: string = uuidv4();
  // newUser.id = ;

  try {
    const response: AxiosResponse<User> = await axios.post<User>(
      'https://enlace-ong.onrender.com/user',
      newUser,
    );
    const data: User = response.data;
    console.log('newUser', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// ===============
// Actualizar user
// ===============
export async function updateUser(emailspot: string, updateUser: User) {
  try {
    const dataArr = await getUserByEmail(emailspot);
    const user: User = dataArr.find((usuario: User) => usuario.email === emailspot);
    //
    console.log('usdser', user);

    const response: AxiosResponse<User> = await axios.put<User>(
      `https://enlace-ong.onrender.com/user/${user.id}`,
      updateUser,
    );
    const data: User = response.data;
    console.log('newUpdate', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function updateStatus(id: string, updateUser: User): Promise<void> {
  try {
    const statusUser = updateUser;
    statusUser.isLoggin = !statusUser.isLoggin;

    const response: AxiosResponse<User> = await axios.put<User>(
      `https://enlace-ong.onrender.com/user/${id}`,
      statusUser,
    );
  } catch (error) {
    console.error('Error:', error);
  }
}

// =======================
// Login con email y pass
// ======================
export async function loginWithEmailAndPass(
  email: string,
  pass: string,
): Promise<User | undefined> {
  try {
    const dataArr = await getUserByEmail(email);
    const user: User = dataArr.find(
      (usuario: User) => usuario.email === email && usuario.password === pass,
    );

    const userLogged: User = await getUserById(user.id);
    console.log(userLogged);

    if (userLogged) {
      // userLogged.isLoggin = true;
      console.log('USUARIO LOGEADO', userLogged);
      updateStatus(userLogged.id, userLogged);
      return userLogged;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// =======================
// logout
// ======================
export async function logout(email: string): Promise<User | undefined> {
  try {
    const dataArr = await getUserByEmail(email);
    const user: User = dataArr.find((usuario: User) => usuario.email === email);
    const userLogged: User = await getUserById(user.id);
    if (userLogged) {
      console.log('INICIANDO LOGOUT DE USER', userLogged);
      updateStatus(userLogged.id, userLogged);
      return userLogged;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// ===============================
//    aeditar secciones de usuario
// ===============================
