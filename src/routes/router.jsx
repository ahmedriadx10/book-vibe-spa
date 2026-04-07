import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/homepage/Home";
import BooksList from "../pages/books-list/BooksList";
import Chart from "./../pages/chart/Chart";
import Details from "./../pages/details-page/Details";
import PageError from "../components/error-page/PageError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <PageError />,
    children: [
      { index: true, Component: Home },
      { path: "booklist", Component: BooksList },
      { path: "chart", Component: Chart },
      {
        path: "bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: Details,
      },
    ],
  },
]);
