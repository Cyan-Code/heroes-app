import React from 'react';
import {mount} from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar/>', () => {

  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn()
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'luis'
    }
  }
  
  const wrapper = mount(
    <MemoryRouter>
      <Route history = { historyMock }>
        <Navbar />
      </Route>
    </MemoryRouter>
  )

  afterEach( ()=>{
    jest.clearAllMocks()
  })

  test('Debe de mostrarse correctamente', () => {
   
    expect ( wrapper ).toMatchInlineSnapshot()
    expect ( wrapper.find('.text-info').text().trim() ).toBe('luis')
    
  })
  
  test('Debe de llamar el logOut y el usar el history', () => {
    wrapper.find('button').prop('onClick')()
    
    expect ( contextValue.dispatch ).toHaveBeenCalledWith({
      types: types.logout
    })
    
    expect( historyMock.replace ).toHaveBeenCalledWith('/login')

  })
})