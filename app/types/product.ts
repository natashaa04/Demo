export interface OilProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends OilProduct {
  quantity: number;
}
export interface testimonialsT {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  message: string;
}

export interface blogT{
    id:string;
    image:string,
    title:string,
    desc:string,
    link:string
}
