import { useEffect } from "react";
import { UseDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "@reduxjs/toolkit/query";
import { setProducts, type Products } from "../redux/productsSlice";
import { fetchProducts } from "../services/fetchProduct";
import type {User} from "../redux/userSlice"


export const LoginPage: React.FC = () => {


  const userType = useSelector((state.RootState) => state.user.userType); 
  const isAdmin = userType === "admin",
  


  return (
    <>
  <input type="submit" value="name" />
  <button onChange={isAdmin}></button>
    </>
  );

};
