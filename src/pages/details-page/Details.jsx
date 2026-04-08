import { useLoaderData, useParams } from "react-router";
import BookCardTags from "../../ui/BookCardTags";
import { useContext } from "react";
import { booksContext } from "../../contexts/book-list-data/BooksContext";



/**
 * 
 * 
    "bookId": 2,
    "bookName": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "image": "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 281,
    "rating": 4.8,
    "category": "Fiction",
    "tags": [
        "Drama",
        "Social Justice"
    ],
    "publisher": "J.B. Lippincott & Co.",
    "yearOfPublishing": 1960
}
 */

const Details = () => {
  const bookData = useLoaderData();

  const { id } = useParams();



  const needBook = bookData.find((book) => book.bookId === Number(id));

const {readListData, handleAddtoReadList}=useContext(booksContext)
const {wishListData, handleAddtoWishList}=useContext(booksContext)


  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    rating,
    category,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
  } = needBook;

  

  



  return (
    <section className="my-20 flex flex-col lg:flex-row lg:justify-center gap-13 max-w-7xl mx-auto w-[90%]">
      <div className="rounded-3xl bg-gray-200 max-w-lg   p-10">
        <img
          src={image}
          className="h-full aspect-square object-fill mx-auto "
          alt={bookName}
        />
      </div>

      {/* books details */}
      <div className="max-w-2xl">
        {/* books title area */}

        <div className="space-y-4">
          <h2 className="font-bold text-[40px]">{bookName}</h2>
          <p className="text-gray-600 font-medium text-xl">By : {author}</p>
        </div>

        <div className=" border-y border-zinc-200 py-4 my-6">
          <span className="text-gray-600 font-medium text-xl">{category}</span>
        </div>

        {/* review section */}

        <div>
          <p className="text-gray-500 font-medium">
            <strong className="text-[#111111]">Review: </strong> {review}
          </p>
        </div>

        <div className="py-6 flex gap-3 flex-wrap">
          <span className="font-bold">Tag </span>
          {tags.map((x, index) => (
            <BookCardTags tag={x} key={index} />
          ))}
        </div>

        <div className="border-t border-zinc-200 pt-6">
          <div className="grid grid-cols-2 ">
            <ul className="space-y-3">
              <li>
                <span className="text-gray-500">Number of Pages:</span>{" "}
              </li>

              <li>
                <span className="text-gray-500">Publisher::</span>
              </li>
              <li>
                <span className="text-gray-500">Year of Publishing:</span>
              </li>
              <li>
                <span className="text-gray-500">Rating:</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex gap-20">
                <span className="font-semibold text-black">{totalPages}</span>
              </li>
              <li className="flex gap-20">
                {" "}
                <span className="font-semibold text-black">{publisher}</span>
              </li>
              <li className="flex gap-20">
                {" "}
                <span className="font-semibold text-black">
                  {yearOfPublishing}
                </span>
              </li>
              <li className="flex gap-20">
                {" "}
                <span className="font-semibold text-black">{rating}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-x-4">
          <button className="btn" onClick={()=>handleAddtoReadList(needBook)}>
            Add Readlist
          </button>
          <button
            className="btn text-white bg-(--blueMeno)"
            onClick={()=>handleAddtoWishList(needBook)}
          >
            Add Whislist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
