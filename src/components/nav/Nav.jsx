import React from 'react'
import logoR from '../../img/logoR.svg'
import logo from '../../img/logo.svg'
import lupa from '../../img/lupa.svg'
import menu from '../../img/menu.svg'
import sobre from '../../img/sobre.svg'
import team from '../../img/team.svg'
import bandera from '../../img/bandera.svg'


export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-bar">
    <img className="logo d-none d-lg-block d-xl-block mt-1" src={logo} alt="logo" />
    <img className="logo-skyteam d-none d-lg-block mt-1" src={team} alt="team" />
    <img className="d-md-block d-xl-none d-lg-none pt-2" style={{width: 30}} src={logoR} alt="logo" />
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active"><span href="#" className="nav-link">Reserva</span></li>
        <li className="nav-item active"><span href="#" className="nav-link">Tu Viaje</span></li>
        <li className="nav-item active"><span href="#" className="nav-link">Check-in</span></li>
        <li className="nav-item active"><span href="#" className="nav-link">Salud e higiene</span></li>
        <li className="nav-item active"><span href="#" className="nav-link">Club Premier</span></li>
      </ul>
      <ul className="menuDer pt-3  d-lg-inline-block d-none">
        <li className="d-lx-inline-block d-lg-inline-block h">Promociones</li>
        <li className="active d-lx-inline-block d-lg-inline-block d-none-md h">Rastre un vuelo</li>
        <li className="d-lx-inline-block d-none d-lg-inline-block d-none-md ">Destinos</li>
        <li className="d-lx-inline-block d-none d-lg-inline-block d-none-md ">Más </li>
        <li className="d-lx-inline-block d-none d-lg-inline-block d-none-md "> 
        <img className="buscar" src={lupa} alt="lupa" /> 
        </li>
        <li className="seg-seccion d-sm-inline-block">
          <img className="sobre" src={sobre} alt="sobre"/>
        </li>
        <li><img src={bandera} className="icono-mexico" alt="bandera" /></li>
        <li>Iniciar sesión</li>
        <li className="d-lg-inline-block d-xl-none"><img src={menu} style={{width: 30}} alt="Iniciar sesión"/></li>
      </ul>
    </div>
  </nav>
    )
}
