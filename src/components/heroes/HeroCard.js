import React from 'react'

export const HeroCard = ({ // para recibir todas estas propiedades de manera que no se alargue el cod: ver HerloList
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }) => {
  
    return (
      <div className="card ms-3" style = {{padding: 10, maxWidth: 540}}>
        <div className="row no-gutters">
          <img src={ `./assets/heroes/${ id }.jpg` } className="card-img-top" alt={ superhero } />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
  )
}
