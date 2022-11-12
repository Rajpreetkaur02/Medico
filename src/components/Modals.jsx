import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Modals = ({imgs}) => {
  const [modalShow, setModalShow] = React.useState(true);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            NFT TOKEN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{"display" : "flex" , "justifyContent" : "center" , "height" : "40vh"}}> 
            <img src={imgs} alt="" />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Claim</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Modals;
