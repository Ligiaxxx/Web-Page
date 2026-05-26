import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <main className="page">
      <section className="page-card about-card">
        <h1 className="page-title">Despre noi</h1>
        <p className="page-text">
          Construim o experiență simplă, utilă și prietenoasă pentru oamenii
          care vor să combine alimentația echilibrată cu obiceiuri bune de zi cu
          zi.
        </p>

        <div className="about-content">
          <article className="about-highlight">
            <h3>Misiunea noastră</h3>
            <p>
              Punem accent pe informații clare, meniuri ușor de urmărit și
              programe potrivite pentru un stil de viață activ.
            </p>
          </article>
          <article className="about-highlight">
            <h3>Ce oferim</h3>
            <p>
              Pagini responsive, secțiuni aerisite și conținut care se vede bine
              pe orice ecran, de la telefon până la monitor mare.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
