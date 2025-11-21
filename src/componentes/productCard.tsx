import type { Products} from "../redux/productsSlice";

interface ProductsProps{ 
    product: Products, 
    isAdmin: boolean, 
    onDelete: (id: string) => void, 
    onAdd:(id:number) =>void
}

export const ProductCard: React.FC <ProductsProps> = () => {



  return (
    <>
      
      <div>
        {product.image $$ <img src={product.image}/>}
        <h3>{product.title}</h3>
        <h1>{product.description}</h1>
        <h1>{product.price}</h1>
        <h1>{product.category}</h1>
        <h1></h1>
        
        {isAdmin && (

            <button onClick={() => onDelete(product.id)}>Delete</button>
            <button onClick={() => onAdd(product.id)}>Add</button>

        )}
      </div>
    </>
  );
};

export default ProductCard;