import { Button, Modal } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ModalSuccessCatch = (props) => {
  const { openModal, setOpenModal, selectedPokemon } = props;
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Congratsss !!!</Modal.Header>
      <Modal.Body>
        <div>
          <p>You got the pokemon {selectedPokemon?.toUpperCase()}!</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Link
          to={`/pokemon/${selectedPokemon}`}
          className="border p-2.5 rounded-lg text-sm"
        >
          See Detail
        </Link>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSuccessCatch;
