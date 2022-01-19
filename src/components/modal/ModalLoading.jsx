import React from "react";
import { Modal} from "react-bootstrap";
import Loading from "../loading/loading"

export default function ModalLoading({set}) {
  return (
    <div>
      <Modal
        show={set}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <div>
              <Loading post={true} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
