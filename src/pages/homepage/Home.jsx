import { Suspense } from "react";
import Books from "../../components/books/Books";
import Hero from "../../components/hero/Hero";
import { Watch } from "react-loader-spinner";

const booksPromise=fetch('/booksData.json').then(res=>res.json())


const Home = () => {
  return (
<>
<Hero/>

<Suspense fallback={<div className="py-10 flex justify-center items-center"><Watch color="#23BE0A"/></div>}>
  <Books booksPromise={booksPromise}/>

</Suspense>
</>
  );
};

export default Home;