import React, { useState } from "react";
import Button from "../Ui/Button";
const Citas = () => {
  return (
    <table className="table table-dark table-striped w-75 align-content-center my-5 mx-auto">
      <thead>
        <tr>
          <th scope="col">Propietario</th>
          <th scope="col">Mascota</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Sintomas</th>
          <th scope="col">Tipo de Animal</th>
          <th scope="col">Tamaño</th>
          <th scope="col">Pagado</th>
          <th>Finalizado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Robert</td>
          <td>pepe</td>
          <td>21/12/21</td>
          <td>00:00</td>
          <td>Vomitos</td>
          <td>Perro</td>
          <td>Mediano</td>
          <td>Si</td>
          <td>
            <Button
              type="submit"
              label="Finalizado"
              btnClassName="btn btn-primary"
            />
          </td>
        </tr>
        <tr>
          <td>Hugo</td>
          <td>Attila</td>
          <td>21/12/21</td>
          <td>00:00</td>
          <td>Lesion</td>
          <td>Gato</td>
          <td>Chico</td>
          <td>No</td>
          <td>
            <Button
              type="submit"
              label="Finalizado"
              btnClassName="btn btn-primary"
            />
          </td>
        </tr>
        <tr>
          <td>Jimmy</td>
          <td>Hendrix</td>
          <td>21/12/21</td>
          <td>00:00</td>
          <td>Insomnio</td>
          <td>Loro</td>
          <td>Grande</td>
          <td>Si</td>
          <td>
            <Button
              type="submit"
              label="Finalizado"
              btnClassName="btn btn-primary"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Citas;
