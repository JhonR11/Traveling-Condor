import React from "react";
import {Tooltip, Button} from "@nextui-org/react";
import PruebaTool from "./PruebaTool";

export default function TooltipoPunto(entrada) {
  return (
    <Tooltip
      content={
        <PruebaTool imagen={entrada.imagen} texto={entrada.texto}/>
      }
    >
      <Button variant="bordered">
        {entrada.titulo}
      </Button>
    </Tooltip>
  );
}
