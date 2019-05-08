import { Merchant } from './Merchant';
import { Product } from './Product';

export class Inventory{
  id:number;
  description:string;
  productActualPrice:number;
  productDiscountPrice:number;
  quantity:number;
  productFromInventory: Product;
  merchant: Merchant;
}
