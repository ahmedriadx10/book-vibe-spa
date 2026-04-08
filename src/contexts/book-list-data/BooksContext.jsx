import { createContext, useState } from "react";
import { getReadListBooksData, getWishListBooksData, setReadListLs, setWishListLs } from "../../local-storage-management/BooksDataManage";
import { toast } from "react-toastify";

export const booksContext = createContext("");

const BooksContext = ({ children }) => {
  const [readListData, setReadListData] = useState(getReadListBooksData());
  const [wishListData, setWishListData] = useState(getWishListBooksData());

  const handleAddtoReadList = (book) => {
    const isExist = readListData.find((x) => x.bookId === book.bookId);
const isExistWishList=wishListData.find((x)=>x.bookId===book.bookId)
    if (isExist) {
      toast.error("book already added to read list");
      return;
    } 

if(isExistWishList){

  setWishListData(wishListData.filter((x)=>x.bookId!== isExistWishList.bookId))
  setReadListData([...readListData,{...isExistWishList}])
setReadListLs([...readListData,{...isExistWishList}])
setWishListLs(wishListData.filter((x)=>x.bookId!== isExistWishList.bookId))
toast.success('books added to read list')

return
}

      setReadListData([...readListData, book]);
setReadListLs([...readListData,book])
      toast("booklist add successfull");
   
  };
  const handleAddtoWishList = (book) => {
    const isExist = readListData.find((x) => x.bookId === book.bookId);
const isExistWishList=wishListData.find((x)=>x.bookId===book.bookId)
    if (isExist) {
      toast.error("book is available on read list");
      return;
    }  


    if(isExistWishList){
      toast.error('books is already added on whishlist')
    return
    }



      setWishListData([...wishListData, book]);

      toast("wishlist add successfull");
  setWishListLs([...wishListData,book])
  };

  return (
    <booksContext.Provider
      value={{ readListData, handleAddtoReadList, wishListData, handleAddtoWishList}}
    >
      {children}
    </booksContext.Provider>
  );
};

export default BooksContext;
