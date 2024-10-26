import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { TiDeleteOutline } from "react-icons/ti";

const Tarjeta = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      
      <Button  variant="light" isIconOnly onPress={onOpen}>
        {props.icono}
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.titulo}</ModalHeader>
              <ModalBody>
                <p>
                {props.texto0}
                </p>
                <p>
                  {props.texto1}
                </p>
                <p>
                 {props.texto2}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Tarjeta;
