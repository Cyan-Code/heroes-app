import { mount } from 'enzyme'
import React from 'react'
import { AuthContext } from '../../../auth/AuthContext'
import { LoginScreen } from '../../../components/login/LoginScreen'
import { types } from '../../../types/types'

describe('Pruebas sobre el <LoginScreen />', () => {

  const history = { 
    replace: jest.fn(), // esto es lo unico que necesito y que a su vez usa el componente original para funcionar
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }
  const wrapper = mount(
    <AuthContext.Provider value = { contextValue } >
      <LoginScreen history = { history }/>
    </AuthContext.Provider>
  )    
  
  test('Debe de mostrarse correctamente', () => {
  
    expect( wrapper ).toMatchSnapshot()

  })
  


  test('Debe de realizar el dispatch y la navegacion', () => {
    const handleClick = wrapper.find('button').prop('onClick')

    handleClick()

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'luis'
      }
    })
    expect( history.replace ).toHaveBeenCalled('/')
    
      //Simulacion al localStorage
      localStorage.setItem('lastPath', '/dc')
      handleClick()
      expect( history.replace ).toHaveBeenCalledWith('/dc')
  })

})
