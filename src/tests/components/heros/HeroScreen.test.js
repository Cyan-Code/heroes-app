import { mount, shallow } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { HeroScreen } from "../../../components/heroes/HeroScreen"


describe('Pruebas en <HeroScreen />', () => {

  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  }

  test('Debe mostrar el componente Redirect si no recibe args en la URL', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history = { historyMock } />
      </MemoryRouter>
    )

    expect( wrapper.find('Redirect').exists() ).toBe(true)
    
  })

  test('Debe de mostrar un hero si el parametro existe y es encuentra', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" component = { HeroScreen } />
      </MemoryRouter>
    )

    expect( wrapper.find('.row').exists()).toBe(true)
    
  })
  
  test('Debe de regresar a la pantalla anterior con push', () => {
    
    const historyMock = {
      length: 1, // esto es por logica
      push: jest.fn(),
      goBack: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroeId"
          component = { () => <HeroScreen history = { historyMock  } /> } // si renderizamos por medio de una funcion, esto hace que reciba las props del rauter, eso se hace aqui debido a que en el otro componente se tiene que recibir las props llamadas history
        />
      </MemoryRouter>
    ) 
    
    wrapper.find('button').prop('onClick')() // funcion handle return
    
    expect( historyMock.push ).toHaveBeenCalledWith('/')
    expect( historyMock.goBack ).not.toHaveBeenCalledWith()
  })
  
  test('Debe de regresar a la pantalla anterior GOBACK', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroeId"
          component = { () => <HeroScreen history = { historyMock  } /> } // si renderizamos por medio de una funcion, esto hace que reciba las props del rauter, eso se hace aqui debido a que en el otro componente se tiene que recibir las props llamadas history

        />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')() // funcion handle return
    
    expect( historyMock.push ).toHaveBeenCalledTimes(0)
    expect( historyMock.goBack ).not.toHaveBeenCalledWith()

  })
  
  test('Debe de llamar el redirect si el hero no existe', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroeId"
          component = { () => <HeroScreen history = { historyMock  } /> } 
        />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')() // funcion handle return
    
    expect( wrapper.text() ).toBe('')
    
  })
  

})

