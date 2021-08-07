import React from 'react';
import {mount} from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';

import { SearchScreen } from '../../../components/serch/SerchScreen'

describe('Pruebas sonbre el componente <SearchScreen />', () => {
  
  test('Mostrarse con los valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path = "/search" component = { SearchScreen }/>
      </MemoryRouter>
    )

    expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero')

  })

  test('Debe de mostrar a batman y el input con el valor del queryString', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path = "/search" component = { SearchScreen }/>
      </MemoryRouter>
    )

    expect( wrapper.find('input').prop('value') ).toBe('batman')
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('Debe de mostrar un error si no encuentra el hero', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmanasdf']}>
        <Route path = "/search" component = { SearchScreen }/>
      </MemoryRouter>
    )

    expect( wrapper.find('.alert-danger').exists() ).toBe(true)
  })

  test('Debe de llamar el push del history', () => {

    const history = {
      push: jest.fn(),
    }
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmanasdf']}>
        <Route path = "/search" component = { () => <SearchScreen history = {history} /> }/>
      </MemoryRouter>
    )

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    })

    expect( history.push ).toHaveBeenCalledWith(`?=batman`)

  })
  
  
  
})
