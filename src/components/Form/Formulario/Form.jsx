import React, { useState } from "react";
import Button from "../../Ui/Button";
import Input from "../../Ui/Input";
import Select from "../../Ui/Select";
import Textarea from "../../Ui/Textarea";

const Form = () => {
  const [form, setForm] = useState({
    propietario: "",
    mascota: "",
    date: "",
    time: "",
    sintomas: "",
    animal: "",
    size: "",
    pagado: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleCheckChange = () => {
    if (pagado) {
      setForm({
        ...form,
        pagado: false,
      });
    } else {
      setForm({
        ...form,
        pagado: true,
      });
    }
  };

  const {
    propietario,
    mascota,
    date,
    time,
    sintomas,
    animal,
    size,
    pagado,
  } = form;
  return (
    <>
      <form className="row g-3 needs-validation m-auto w-50 container">
      <h1 className="text-center display-4 text-uppercase text-white my-0"> formulario </h1>
        <div className="row w-75 mx-auto ">
          <Input
            className="col-md-12  my-2"
            label="Propietario"
            type="text"
            value={propietario}
            required={true}
            name="propietario"
            onChange={handleInputChange}
          />
          <Input
            className="col-md-12  my-2"
            label="Mascota"
            type="text"
            value={mascota}
            required={true}
            name="mascota"
            onChange={handleInputChange}
          />
          <Input
            className="col-md-6  my-2"
            label="Fecha"
            type="date"
            value={date}
            required={true}
            name="date"
            onChange={handleInputChange}
          />
          <Input
            className="col-md-6  my-2"
            label="Hora"
            type="time"
            value={time}
            required={true}
            name="time"
            onChange={handleInputChange}
          />
          <Textarea
            className="input-group my-3"
            ariaLabel="Sintomas"
            name="sintomas"
            value={sintomas}
            label="Sintomas"
            onChange={handleInputChange}
          />
          <Select
            className="col-md-6"
            label="Animal"
            required={true}
            value={animal}
            options={[
              { label: "Perro", value: "perro" },
              { label: "Gato", value: "gato" },
              { label: "Loro", value: "loro" },
              { label: "Raton", value: "raton" },
              { label: "Burro", value: "burro" },
            ]}
            name="animal"
            onChange={handleInputChange}
          />
          <Select
            className="col-md-6"
            label="Tamaño"
            required={true}
            value={size}
            options={[
              { label: "Pequeño", value: "pequeño" },
              { label: "Mediano", value: "mediano" },
              { label: "Grande", value: "grande" },
            ]}
            name="size"
            onChange={handleInputChange}
          />
          <Input
            className="form-check form-switch m-3"
            label="Pagado"
            type="checkbox"
            required={true}
            inputClassName="form-check-input"
            labelClassName="form-check-label"
            name="pagado"
            checked={pagado}
            onChange={handleCheckChange}
          />
          <Button
            className="col-12 my-5"
            type="submit"
            label="Enviar datos"
            btnClassName="btn btn-dark w-100 py-3 fs-5 text-uppercase"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
