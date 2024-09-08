import { Button, Modal } from "flowbite-react";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ModalMyPokemon = (props) => {
  const {
    openModal,
    setOpenModal,
    pokemonData,
    currentIndex,
    handlePrevious,
    handleNext,
  } = props;

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>{pokemonData?.name}</Modal.Header>
      <Modal.Body>
        <div>
          {pokemonData?.image && pokemonData.image.length > 0 ? (
            <div className="flex flex-row items-center">
              <button onClick={handlePrevious}>
                <FaAngleLeft className="" />
              </button>
              <img
                src={pokemonData.image[currentIndex]}
                alt={"pokemon"}
                className="w-40 h-40"
              />
              <button onClick={handleNext}>
                <FaAngleRight className="" />
              </button>
            </div>
          ) : (
            <p>No image available</p>
          )}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMyPokemon;
