import { Component, h } from 'preact';
import { Link } from 'react-router-dom';
import * as style from './style.css';

export default class Header extends Component {
  public render() {
    return (
      <header class={style.header}>
        <h1>Preact App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Me</Link>
          <Link to="/profile/john">John</Link>
        </nav>
      </header>
    );
  }
}
