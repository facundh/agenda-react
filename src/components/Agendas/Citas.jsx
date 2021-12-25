import React, { useEffect, useState } from "react";
import { AgendaConsumir } from "../../context/AgendasProvider";
import Button from "../Ui/Button";
import Fila from "../Ui/Fila";
import TableHead from "../Ui/TableHead";
const Citas = () => {
  const { removerCita, agenda } = AgendaConsumir();

  useEffect(() => {}, [agenda]);
  return (
    <table className="table table-dark table-striped w-75 align-content-center my-5 mx-auto">
      <thead>
        <tr>
          <TableHead
            nombres={[
              "Propietario",
              "Mascota",
              "Fecha",
              "Hora",
              "Sintomas",
              "Tipo de Animal",
              "Tamaño",
              "Pagado",
              "Finalizado",
            ]}
          />
        </tr>
      </thead>

      {agenda.length > 0 ? (
        <tbody>
          {agenda.map((cita, index) => (
            <Fila cita={cita} key={index} />
          ))}
        </tbody>
      ) : (
        <h1 className="text-dark text-center">No hay citas</h1>
      )}
    </table>
  );
};

export default Citas;
