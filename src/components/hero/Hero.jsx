import { useNavigate } from "react-router";
import heroBook from '../../assets/hero-book.png'
const Hero = () => {

const navigate=useNavigate()

  return (
    <section className="py-10  max-w-7xl mx-auto w-[90%] flex flex-col-reverse items-center justify-centerj md:flex-row md:justify-center gap-10 lg:gap-20 md:items-center">
     
     {/* hero introduction area */}

     <div className="max-w-lg">
      <h2 className="text-4xl lg:text-[56px] font-bold">Books to freshen up your bookshelf</h2>
<div className="py-10">      <button onClick={()=>navigate('/booklist')} className="btn bg-(--primaryColor) text-white border-0">View The List</button></div>
     </div>


     {/* hero img area */}

     <div className=" max-w-md">
      <img src={heroBook} className="" alt='book image' />
     </div>

    </section>
  );
};

export default Hero;