import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/homepage/Home";
import BooksList from "../pages/books-list/BooksList";
import Chart from './../pages/chart/Chart';


export const router=createBrowserRouter([
  {
    path:'/',
     Component:MainLayout,
     children:[
      {index:true,Component:Home},
      {path:'booklist',Component:BooksList},
      {path:'chart',Component:Chart}
     ]
  }
])





