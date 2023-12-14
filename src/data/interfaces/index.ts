export default interface Root {
  data: Data;
}

export interface Data {
  products: Products;
}

export interface Products {
  errors: any;
  products: Product[];
  pages: Pages;
  externalResponses: any;
  traceId: string;
}

export interface Product {
  colorways: Colorway[];
  id: string;
  images: Images2;
  isBestSeller: boolean;
  label?: string;
  price: Price3;
  productType: string;
  subtitle: string;
  title: string;
  specialLabel?: string;
}

export interface Colorway {
  images: Images;

  price: Price;
  cloudProductId: string;
}

export interface Images {
  portraitURL: string;
  squarishURL: string;
}

export interface Price {
  currency: string;
  currentPrice: number;
  discounted: boolean;
  employeePrice?: number | null;
  fullPrice: number;
}

export interface Images2 {
  portraitURL: string;
  squarishURL: string;
}

export interface NbyColorway {
  colorDescription: string;
  images: Images3;
  pdpUrl: string;
  price: Price2;
}

export interface Images3 {
  portraitURL: string;
  squarishURL: string;
}

export interface Price2 {
  currency: any;
  currentPrice: number;
  discounted: any;
  employeePrice: number;
  fullPrice: number;
  minimumAdvertisedPrice: any;
}

export interface Price3 {
  currency: string;
  currentPrice: number;
  discounted: boolean;
  employeePrice: number | null;
  fullPrice: number;
}

export interface Pages {
  prev: string;
  next: string;
  totalPages: number;
  totalResources: number;
  searchSummary: any;
}

export interface Category {
  id: number;
  categoryName: string;
}
