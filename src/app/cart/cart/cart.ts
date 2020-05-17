
import { Product } from 'src/app/product/product';

export class Cart {
    public itemid:number;
    public totalprice: number;
    public product: Product[];
    public quantity: number;
}