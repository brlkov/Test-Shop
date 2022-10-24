import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createCountry} from "../../http/coinAPI";

const CreateCountry = ({show, hide}) => {

    const [value, setValue] = useState("")

    const addCountry = () => {
        createCountry({name: value}).then(data => {
            setValue("")
            hide()
        })
    }

    return (
        <Modal show={show} onHide={hide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add country
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Enter country name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addCountry}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCountry;