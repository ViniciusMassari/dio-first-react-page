import React from "react";
import { useState, useMemo } from "react";

const Teste = () => {
  const [name, setName] = useState("Vinícius");

  const handleChangeName = () => {
    setName((prev) => (prev === "José" ? "José" : "Vinícius"));
  };

  // const changeUser = () => {
  //   handleChangeName();
  //   alert("nome alterado");
  // };

  // useEffect(() => {
  //   changeUser();
  // }, [name]);

  const calculo = useMemo(() => {
    console.log("calculou");
    return 10 * 10;
  }, []);

  console.log("renderizou", calculo);

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChangeName}>alterar</button>
    </div>
  );
};

export default Teste;
