import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesByid'

export const HeroScreen = () => {

  const { heroeId } = useParams()

  const hero = getHeroesById(heroeId)
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  return (
    <div>
      <h1>Hero Screen</h1>
    </div>
  )
}
