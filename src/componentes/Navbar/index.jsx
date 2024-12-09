import './index.css';
import logo from '../../assets/logo.jpeg'

const Header = () => {
  return (
    <header className='header'>
      <a href="/">
      <img src={logo} alt=""  className='logo'/>
      </a>

      <nav className='navbar'>
        <a href="/">INICIO</a>
        <a href="/">VALORES</a>
        <a href="/nuestro-servicio">NUESTRO SERVICIO</a>
        <a href="/">CONSULTAS</a>
        <a href="/">CONTACTO</a>

      </nav>

    </header>
  )
}

export default Header