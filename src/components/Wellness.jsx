import React from "react";
import "../style/Wellness.css";

const Wellness = () => {
  const programs = [
    {
      label: "Program 1",
      title: "Relaxare",
      text: "Exerciții simple pentru reducerea stresului și revenirea energiei.",
    },
    {
      label: "Program 2",
      title: "Mișcare",
      text: "Activități ușoare, potrivite pentru începutul unei rutine active.",
    },
    {
      label: "Program 3",
      title: "Nutriție",
      text: "Recomandări practice pentru mese echilibrate și program organizat.",
    },
  ];

  return (
    <main className="page">
      <section className="page-card wellness-card">
        <h1 className="page-title">Programe de wellness</h1>
        <p className="page-text">
          Programele sunt prezentate în carduri responsive, ușor de citit pe
          orice dispozitiv.
        </p>

        <div className="wellness-programs">
          {programs.map((program) => (
            <article className="wellness-program" key={program.title}>
              <strong>{program.label}</strong>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Wellness;
