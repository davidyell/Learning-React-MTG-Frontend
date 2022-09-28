import React from 'react'
import { useLoaderData } from 'react-router-dom';
import type { ViewDeck as ViewDeckType } from '../types/decks.type';

const ViewDeck = (props: any) => {
  const response = useLoaderData() as ViewDeckType;

  return (
    <>
      <p>I am the view deck component!</p>
      <p>You are viewing deck id {response.data.deck.id}</p>
    </>
  )
}

export default ViewDeck
