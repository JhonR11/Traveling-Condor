import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link}from "@nextui-org/react";
import { TiDeleteOutline } from "react-icons/ti";

const Alerta = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
       <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">RUTA</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <p> </p>
                  }
                  label="Nombre"
                  placeholder="Ingresa el nombre de la ruta"
                  variant="bordered"
                />

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
    </Modal>
  );
};

export default Alerta;
