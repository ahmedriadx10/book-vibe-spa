import { use } from "react";

import BookCard from "../../ui/BookCard";


const Books = ({booksPromise}) => {
  
  const booksData=use(booksPromise)
  console.log(booksData)
  return (
   <section className="py-25 max-w-7xl mx-auto w-[90%]">

<h2 className="text-[40px] text-center font-bold">Books</h2>


<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">

{booksData.map((book)=><BookCard  book={book} key={book.bookId} />)}

  
</section>

   </section>
  );
};

export default Books;