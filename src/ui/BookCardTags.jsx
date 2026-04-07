
const BookCardTags = ({tag}) => {
  return (
    <>
     <span className="font-semibold badge bg-(--primaryContent) text-(--primaryColor)">{tag}</span> 
    </>
  );
};

export default BookCardTags;