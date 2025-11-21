import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { UseSelector, useDispatch } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";


export const AdminCreate = () => {

  const {id} =useParams<[id.string]>();
  const navigate = useNavigate()
  const productos = useSelector((State: RootState)) => StaticRange.products.find((item)=> item.id === String (id))



  const newProduct ={
    id: date.now(), 
    title: values.title
  } dispatch(addProduct(newProduct))navigate('/store')

  return (
    <>
      <form>
          <input type="text" placeholder="title" />
          <input type="text" placeholder="price" />
          <input type="text" placeholder="description" />
          <input type="text" placeholder="category" />

      </form>
    </>
  );
};

export default AdminCreate;