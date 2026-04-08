import { CiFileOn, CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import BookCardTags from "../../../../ui/BookCardTags";
import { useNavigate } from "react-router";
const ReadListCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    rating,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
const navigate=useNavigate()
const handleDetailsNavigate=()=>{



navigate(`/bookDetails/${bookId}`)

}

  return (
    <div className="flex flex-col md:items-center md:flex-row gap-6  border rounded-2xl border-zinc-200 p-6">
      <div className="bg-gray-200 rounded-xl  p-7 flex items-center justify-center md:w-57.5">
        <img src={image} alt={bookName} className="h-43 object-cover" />
      </div>

      <div className="space-y-4">
        <h4 className="text-2xl font-bold">{bookName}</h4>
        <p className="font-medium text-gray-500">By : {author}</p>

        <div className="flex gap-3 flex-wrap items-center">
          <strong>Tags</strong>
          {tags.map((x, ind) => (
            <BookCardTags tag={x} key={ind} />
          ))}

          <span className="text-gray-500 inline-flex items-center gap-1">
            <CiLocationOn /> Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        <div className="flex gap-5 flex-wrap items-center border-b text-gray-500 border-zinc-200 pb-5">
          <p className="inline-flex items-center gap-1.5">
            <IoPeople /> Publisher : {publisher}
          </p>

          <p className="inline-flex items-center gap-1.5">
            <CiFileOn /> Page: {totalPages}
          </p>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <span className="badge bg-blue-100 text-(--blueMeno)">
            Category: {category}
          </span>
          <span className="badge bg-(--primaryYellowContent) text-(--primaryYellow)">
            Rating: {rating}
          </span>
          <button
            className="btn rounded-full bg-(--primaryColor) text-white font-semibold"
            onClick={handleDetailsNavigate}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadListCard;
