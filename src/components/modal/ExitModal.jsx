import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ExitModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function logout() {
    console.log("logout");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <>
      <Button className="nextButton text-primary-1 bg-secondary border-0 p-3 rounded-3 w-100" onClick={handleShow}>
        Keluar dari Akun
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center py-5">Anda yakin ingin keluar dari VitQ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="secondary" onClick={logout}>
            Keluar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
