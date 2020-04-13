import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from "reactstrap";
import { useFormFields } from "../../libs/hooksLib";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

export default function RegisterModal(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: "",
    password: "",
  });

  const toggle = useCallback(() => {
    dispatch(clearErrors());
    setModal(!modal);
  }, [modal, dispatch]);

  useEffect(() => {
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }

    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        toggle();
      }
    }
  }, [error, isAuthenticated, modal, toggle]);

  const onSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = fields;

    // Create user object
    const newUser = {
      name,
      email,
      password,
    };

    // Attempt to register
    dispatch(register(newUser));
  };

  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {msg && <Alert color="danger">{msg}</Alert>}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={handleFieldChange}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={handleFieldChange}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={handleFieldChange}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
