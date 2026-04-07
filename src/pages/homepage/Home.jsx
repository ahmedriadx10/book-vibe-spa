import { Suspense } from "react";
import Books from "../../components/books/Books";
import Hero from "../../components/hero/Hero";

const booksPromise=fetch('/booksData.json').then(res=>res.json())


const Home = () => {
  return (
<>
<Hero/>

<Suspense fallback={<span>Data is loading...</span>}>
  <Books booksPromise={booksPromise}/>

</Suspense>
</>
  );
};

export default Home;