import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './home/Home'
import AllDecks from './decks/AllDecks'
import ViewDeck from './decks/ViewDeck'
import ErrorPage from './ErrorPage'
import { loader as ViewDeckLoader } from './routes/viewDeck.loader'
import MainLayout from './layout/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        id: 'home'
      },
      {
        path: '/decks',
        element: <AllDecks />,
        id: 'all-decks'
      },
      {
        path: '/deck/:deckId',
        element: <ViewDeck />,
        id: 'view-deck',
        errorElement: <ErrorPage />,
        loader: ViewDeckLoader
      }
    ]
  }
])

const App = (): JSX.Element => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
