import { useEffect } from "react";
import { UseDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "@reduxjs/toolkit/query";
import { setProducts, type Products } from "../redux/productsSlice";
import { fetchProducts } from "../services/fetchProduct";
import type {User} from "../redux/userSlice"
import ProductCard from "../componentes/productCard";

export const CartPage = () => {


  const {data, isLoading, error} = fetchProducts; 
  const producto = useSelector((state:RootState) => state.products)
  const userType = useSelector ((state:RootState)=> state.user.userType); 

  const isAdmin = userType === "Admin "
  
  useEffect(()=> {

    if(data && setProducts.lengh === 0){

      dispatch(setProducts( data as Products[]))
    }
  }), [dispatch, data. products.lengh];

  return (
    <>

      <button onClick={navigate('/store')}>Cart</button>
      <button>Create</button>

      {isLoading && <p>cargando</p>}
      {error && <p>error</p>}

      <div>
        {data.map((products: Products)=>
        
          <ProductCard 
          key= {producto.id} 
          description={product.description}
          price= {product.price}
          category={producto.category}
          title={producto.title}
          isAdmin{isAdmin}
          onDelete{()=>Dispatch(DeleteProducts(products.id))}
          onAdd{()=>DisPatch(AddProducts(products.id))}
          />      
          
        )}
      </div>
    </>
  );
};

export default CartPage;