import { useContext } from "react";
import { booksContext } from "../../../contexts/book-list-data/BooksContext";
import WishListCard from './WishListCard';

const Whishlist = () => {


const {wishListData}=useContext(booksContext)




if(wishListData.length===0){
  return(
    <div className="py-20 flex justify-center my-10 items-center bg-zinc-200 rounded-2xl">
      <h2 className="text-4xl font-semibold text-center">Wish List is Empthy</h2>
    </div>
  )
}


return (
    <section className="space-y-5 py-5">

{wishListData.map((book)=><WishListCard key={book.bookId} book={book} />)}


    </section>
  );

};

export default Whishlist;