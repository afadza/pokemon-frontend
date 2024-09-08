import { Button, Modal } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ModalSuccessAdd = (props) => {
  const { openModal, setOpenModal } = props;
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Congratsss !!!</Modal.Header>
      <Modal.Body>
        <div>
          <p>Successfully saved pokemon!</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Link to={`/my-pokemon`} className="border p-2.5 rounded-lg text-sm">
          OK
        </Link>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSuccessAdd;
