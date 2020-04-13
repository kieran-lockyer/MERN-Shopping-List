import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form,
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import { addItem } from '../actions/itemActions';

export default function ItemModal() {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const toggle = () => {
        setModal(!modal);
    };

    const onChange = (event) => {
        setName(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name
        };

        dispatch(addItem(newItem));
        toggle();
    };

    return (
        <div>
            <Button color="dark" style={{marginBottom: '2rem'}} onClick={toggle}>Add Item</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input type="text" name="name" id="item" placeholder="Add Shopping Item" onChange={onChange} />
                            <Button color="dark" style={{marginTop: '2rem'}} block>Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};
