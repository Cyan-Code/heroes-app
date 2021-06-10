import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher )
  return (
    <div className="card-colums">
      {
        heroes.map( hero => (
         <HeroCard key={ hero.id }
            {...hero} // esto es. el spread, "Riega" todas las propiedades de mis heroes, ya lo que use es cuestion de ese componente
          />
        ))
      }
    </div>
  )
}
