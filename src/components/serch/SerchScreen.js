import React, {useMemo} from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroByName'

export const SerchScreen = ({history}) => {

  const location = useLocation()
  // Usando el query para parsear el search que viene en el location pasado por los providers del router
  const {q = ''} = queryString.parse(location.search) // se desestructura porque es un objeto lo que nos retorna 
  // se iguala a un string vacio ya que la desestructuracion lo permite, se previene que sea undefined y ser vacio   
  // otra cosa es que se desestructura solo la q que hace referencia a que solo interesa la query
  const [values, handleInputChange] = useForm({
    serchText: q // aqui se iguala el valor del form al query
  })
  
  const { serchText } = values
  const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])
  
  const handleSerch = (e) => {
    e.preventDefault()
    history.push(`?q=${ serchText } `)
  }

  return (
    <div>
      <h1> SerchScreen </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />

          <form onSubmit={ handleSerch }>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete = "off"
              name = "serchText"
              value = { serchText }
              onChange = { handleInputChange }
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />
          {
            (q === '')
            &&
            <div className="alert alert-info">
              Serch a Hero!
            </div>
          }
          {
            (q !== '' && heroesFiltered.length === 0)
              &&
              <div className="alert alert-danger">
                This is no a hero: {q}
              </div>
          }
          {
            heroesFiltered.map( hero => (
              <HeroCard
                key = { hero.id }
                {...hero}
              />
            ))
          }
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
