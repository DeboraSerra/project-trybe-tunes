import React from 'react';
import Header from '../components/Header';
import '../styles/NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <Header />
        <section className="page-not-found">
          <img className="notFound" src="https://www.pngitem.com/pimgs/m/116-1163025_music-icon-png-free-download-desenho-de-notas.png" alt="Music symbol" />
          <p className="not-found-p">Page not found (404)</p>
        </section>
      </div>
    );
  }
}

export default NotFound;
