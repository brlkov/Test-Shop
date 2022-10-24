import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createCoin} from "../../http/coinAPI";

const CreateCoin = observer(({show, hide}) => {
    const {coin} = useContext(Context)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addCoin = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('description', description)
        formData.append('countryId', coin.selectedCountry.id)
        formData.append('img', file)
        createCoin(formData).then(data => hide())
    }

    return (
        <Modal show={show} onHide={hide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add coin
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{coin.selectedCountry.name || "Country"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {coin.countries.map(country =>
                                <Dropdown.Item onClick={() => coin.setSelectedCountry(country)} key={country.id}>{country.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Enter coin name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Enter coin description"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        type="number"
                        placeholder={"Enter coin price"}
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addCoin}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCoin;