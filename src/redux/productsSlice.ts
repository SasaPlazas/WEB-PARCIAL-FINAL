import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Products {
  
  id: string; 
  title: string;
  price: number;
  category: string; 
  description: string; 
  image: string; 

}
export interface ProductsState {

  products: Products[]; 

}

const initialState: ProductsState = {
  products: []
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload;
    },
     addProduct: (state, action: PayloadAction<Products>) => {
      state.products = [...state.products, action.payload];
    },

     deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product)=> {
        return product.id !== action.payload.id ? action.payload: product
      });
    },
  },
});

export const { setProducts, addProduct, deleteProduct } = AuthSlice.actions;
export default AuthSlice.reducer;