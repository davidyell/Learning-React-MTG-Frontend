import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './home/home'
import ViewDeck from './decks/viewDeck'
import Error from './error'
import { loader as ViewDeckLoader } from './routes/viewDeck.loader'
import MainLayout from './layout/main'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        id: 'home'
      },
      {
        path: "/deck/:deckId",
        element: <ViewDeck />,
        id: 'view-deck',
        errorElement: <Error />,
        loader: ViewDeckLoader
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
