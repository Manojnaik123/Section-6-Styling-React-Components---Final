import logo from '../assets/logo.png';
// import classes from './Header.module.css'; // changes
import { styled } from 'styled-components';


export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-16'>
      <img src={logo} alt="A canvas" className="object-contain mb-8 w-44 h-44" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p> {/* changes  */}
    </header>
  );
}
