import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';
import '../style/Menu.css';

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadMenuItems() {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Error loading menu items:', error);
        return;
      }

      setItems(data);
    }

    loadMenuItems();
  }, []);

  return (
    <section className="menu-page">
      <h1>Menu</h1>

      <div className="menu-grid">
        {items.map((item) => (
          <div className="menu-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <strong>{item.price} lei</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;




/* import React from "react";
import "../style/Menu.css";

const Menu = () => {
  const meals = [
    {
      title: "Mic dejun fresh",
      description: "Iaurt, fructe, granola și semințe.",
      price: "25 lei",
    },
    {
      title: "Prânz echilibrat",
      description: "Piept de pui, orez, salată și dressing light.",
      price: "38 lei",
    },
    {
      title: "Cină ușoară",
      description: "Somon, legume la cuptor și sos de lămâie.",
      price: "45 lei",
    },
  ];

  return (
    <main className="page">
      <section className="page-card menu-card">
        <h1 className="page-title">Meniul zilei</h1>
        <p className="page-text">
          Alege rapid o variantă potrivită pentru ziua ta. Cardurile se așază
          automat pe una, două sau trei coloane, în funcție de ecran.
        </p>

        <div className="menu-list">
          {meals.map((meal) => (
            <article className="menu-item" key={meal.title}>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <span className="menu-price">{meal.price}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
 */