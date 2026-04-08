import { createContext, useState } from "react";
import { getReadListBooksData } from "../../local-storage-management/BooksDataManage";

export const booksContext=createContext('')

const BooksContext = ({children}) => {

  
const [readListData,setReadListData]=useState(getReadListBooksData())
const [wishListData,setWishListData]=useState(getReadListBooksData())
  return (
    <booksContext.Provider value={{readListData,setReadListData,wishListData,setWishListData}}
    >
      {children}
    </booksContext.Provider>
  );
};

export default BooksContext;