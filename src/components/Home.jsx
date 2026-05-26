import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

function Home() {
  return (
    <main className="page">
      <section className="page-card home-hero">
        <div>
          <h1 className="page-title">Bine ai venit</h1>
          <p className="page-text">
            O pagină modernă pentru prezentare, meniu, programe de wellness și
            contact. Layout-ul se adaptează automat pe telefon, tabletă și
            desktop.
          </p>
          <div className="home-actions">
            <Link className="home-button" to="/menu">
              Vezi meniul
            </Link>
            <Link className="home-button secondary" to="/contact">
              Contactează-ne
            </Link>
          </div>
        </div>
        <div className="home-image-box" aria-label="Healthy food illustration">
          <span>🥗</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
