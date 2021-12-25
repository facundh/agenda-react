import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

// Contexto creado
const AgendaContext = createContext();
//Funcion para consumir context
export const AgendaConsumir = () => useContext(AgendaContext);
const AgendasProvider = ({ children }) => {

  const data = JSON.parse(localStorage.getItem('agendas'));
  const [agenda, setAgenda] = useState(data || []);

  // Copio agenda y agrego nueva cita
  const agregarCita = (cita) => {
    setAgenda([...agenda, cita]);
    localStorage.setItem('agendas', JSON.stringify([...agenda, cita]));
  };

  const removerCita = (id) => {
    const arrFilter = agenda.filter((e) => e.id !== id);
    setAgenda(arrFilter);
    localStorage.setItem('agendas',JSON.stringify(arrFilter));
  };

  return (
    // Proveo mi context a mis componentes hijos
    <AgendaContext.Provider value={{ agregarCita, removerCita, agenda }}>
      {children}
    </AgendaContext.Provider>
  );
};

export default AgendasProvider;
