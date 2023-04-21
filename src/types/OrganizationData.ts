export interface RootObject {
  ong: Ong[];
}

export interface Ong {
  id: string;
  name: string;
  img?: string;
  about: string;
  email: string;
  website: string;
  image?: string;
}
