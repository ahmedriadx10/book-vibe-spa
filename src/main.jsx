import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/router';
import BooksContext from './contexts/book-list-data/BooksContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>


<BooksContext>


    <RouterProvider router={router} />

</BooksContext>





  </StrictMode>,
)
