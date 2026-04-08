import { FaChevronDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from "./read-list/Readlist";
import Whishlist from "./whislist/Whishlist";



const BooksList = () => {



  return (
    <section className="py-10 max-w-7xl mx-auto w-[90%]">

      <div className="bg-gray-200 p-8 rounded-2xl text-center font-bold text-3xl"><h2>Books</h2></div>
{/* sort  dropdown button */}

<div className="flex justify-center items-center py-10">
  <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1 bg-(--primaryColor) text-white">Click <FaChevronDown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
</div>






{/* book list tab */}


<Tabs>
    <TabList>
      <Tab> <span className="text-gray-500">Read Books</span></Tab>
      <Tab> <span className="text-gray-500">Whislist Books</span> </Tab>
    </TabList>

    <TabPanel>
<Readlist/>
    </TabPanel>
    <TabPanel>
<Whishlist/>
    </TabPanel>
  </Tabs>




    </section>
  );
};

export default BooksList;