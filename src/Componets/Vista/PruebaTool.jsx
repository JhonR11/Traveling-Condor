import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function PruebaTool(props) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <img
        height={200}
        src={props.imagen}
        width={200}
      />
      <CardFooter className="justify-between before:bg-dark/10 border-dark/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-dark/80">{props.texto}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Recomendar
        </Button>
      </CardFooter>
    </Card>
  );
}