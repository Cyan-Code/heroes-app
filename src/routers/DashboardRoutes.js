import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SerchScreen } from '../components/serch/SerchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2" >
        <Switch>
          <Route exact path = "/marvel" component={ MarvelScreen } />
          <Route exact path = "/hero/:heroeId" component = { HeroScreen } />
          <Route exact path = "/dc" component = { DcScreen } />
          <Route exact path = "/serch" component = {SerchScreen } />
          <Redirect to = "/marvel"/>
        </Switch>
      </div>
    </>
  )
}