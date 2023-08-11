import React, { useState } from "react";

import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Technology from "./components/Technology";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm && <ModalForm closeForm={closeForm} />}
      <Navbar />
      <Hero openForm={openForm} />
      <Card openForm={openForm} />
      <Technology />
      <Portfolio />
      <Contact openForm={openForm} />
    </>
  );
}

export default App;
