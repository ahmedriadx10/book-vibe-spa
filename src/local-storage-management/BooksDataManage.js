export  const getReadListBooksData=()=>{

let readListBooks=JSON.parse(localStorage.getItem('readList')) || []

return  readListBooks


}



export const getWishListBooksData=()=>{

  let wishListBooks=JSON.parse(localStorage.getItem('wishList')) || []


  return wishListBooks
}





export const setReadListLs=(x)=>{

// const storedData=getReadListBooksData()


localStorage.setItem('readList',JSON.stringify(x))



}


export const setWishListLs=(x)=>{

// const storedData=getWishListBooksData()


localStorage.setItem('wishList',JSON.stringify(x))

}



// export const updateWishList=(id)=>{

//   const storedData=getWishListBooksData()

  
// localStorage.setItem('wishList',JSON.stringify(storedData.filter((x)=>x.bookId!==id)))



// }
