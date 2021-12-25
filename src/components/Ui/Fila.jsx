import React from "react";
import { AgendaConsumir } from "../../context/AgendasProvider";
import Button from "./Button";

const Fila = ({ cita }) => {
  const {removerCita} = AgendaConsumir();

  const handleRemove = () =>{
      removerCita(cita.id);
  }

  return (
    <>
      <tr>
        <td>{cita.propietario}</td>
        <td>{cita.mascota}</td>
        <td>{cita.date}</td>
        <td>{cita.time}</td>
        <td>{cita.sintomas}</td>
        <td>{cita.animal}</td>
        <td>{cita.size}</td>
        <td>{cita.pagado}</td>
        <td>
          <Button
            type="submit"
            label="Finalizado"
            btnClassName="btn btn-primary"
            onClick={handleRemove}
          />
        </td>
      </tr>
    </>
  );
};

export default Fila;
