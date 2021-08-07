import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { DashboardRoutes } from "../../routers/DashboardRoutes"

describe('Pruebas en el <DashboardRoutes/>', () => {
  
  const contextValue = {
    dispatch: jest.fn(), //consideracion
    user: {
      logged: true,
      name: 'luis'
    }
  }

  test('Debe de mostrarse correctamente', () => {

    const wrapper = mount(
      <AuthContext.Provider value = { contextValue } >
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('.text-info').text().trim() ).toBe('luis')

  })
  
})


