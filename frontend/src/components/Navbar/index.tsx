import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

export default function index() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/rangel20">
            <div className='contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
