export interface OilProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends OilProduct {
  quantity: number;
}
export interface testimonialsT {
  id: number;
  name: string;
  title: string;
  image: string;
  rating: number;
  message: string;
}

export interface blogT{
    id:number;
    image:string,
    title:string,
    desc:string,
    link:string
}
