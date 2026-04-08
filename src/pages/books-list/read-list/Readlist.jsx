import { useContext } from "react";
import { booksContext } from "../../../contexts/book-list-data/BooksContext";
import ReadListCard from "./readList-card/ReadListCard";


const Readlist = () => {

const {readListData}=useContext(booksContext)
  


if(readListData.length===0){
  return(

<div className="py-20 flex justify-center items-center my-10 bg-zinc-200 rounded-2xl">

<h2 className="text-4xl font-bold">Read List is empthy</h2>

</div>

  )
}



return (
    <section className="space-y-5 py-5">

{readListData.map((book)=><ReadListCard key={book.bookId} book={book} />)}


    </section>
  );
};

export default Readlist;