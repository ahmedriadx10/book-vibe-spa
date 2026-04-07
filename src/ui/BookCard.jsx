import { FaRegStar } from "react-icons/fa";
import BookCardTags from "./BookCardTags";
import { useNavigate } from "react-router";








/**
 * 
 *     "bookId": 1,
    "bookName": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 192,
    "rating": 4.5,
    "category": "Classic",
    "tags": ["Fiction", "Romance"],
    "publisher": "Scribner",
    "yearOfPublishing": 1925
 */





const BookCard = ({book}) => {

  const navigate=useNavigate()

  const {bookId,bookName,author,image,tags,rating,category}=book

  return (
<div className="card gap-6 rounded-2xl bg-base-100  p-5  border border-zinc-200" onClick={()=>navigate(`/bookDetails/${bookId}`)}>
  <figure className="bg-[#F3F3F3] h-57.5 rounded-2xl">
    <img
      src={image}
      alt={bookName}
      className=" h-41.5 object-contain " />
  </figure>
  <div className="card-body p-0 gap-4 ">
    {/* batch area */}

    <div> {tags.map((tag,ind)=><BookCardTags tag={tag} key={ind} />)} </div>
    <h2 className="text-2xl font-bold">{bookName}</h2>
    <p className="font-medium text-gray-600">By : {author}</p>


<div className="pt-3 border-t border-dashed flex justify-between items-center">

<p className="text-xl text-gray-600">{category}</p>
<p className="flex items-center gap-2 text-xl text-gray-600 text-right justify-end"><span>{rating}</span> <FaRegStar /></p>
</div>
  </div>
</div>
  );
};

export default BookCard;