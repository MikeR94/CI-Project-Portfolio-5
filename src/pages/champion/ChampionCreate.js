import React, { useRef, useState } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

function ChampionCreate() {
  useRedirect("loggedOut");

  const [champData, setChampData] = useState({
    name: "",
    alias: "",
    champ_image: "",
  });

  const { name, alias, champ_image } = champData;

  const imageInput = useRef(null);

  const handleChange = (event) => {
    setChampData({
      ...champData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(champ_image);
      setChampData({
        ...champData,
        champ_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <Row className={styles.Row}>
      <Col md={6}>
        <Container className={`${styles.ContentBackground} p-4 `}>
          <h1 className={styles.Header}>Create a champion</h1>
          <hr></hr>

          <Form onSubmit="">
            <Form.Group controlId="name">
              <Form.Label className="d-none">Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="alias">
              <Form.Label className="d-none">Alias</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Alias"
                name="alias"
                value={alias}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="d-flex">Champ Image</Form.Label>
              <Form.File
                htmlFor="champ-image"
                id="champ-image"
                accept="image/*"
                ref={imageInput}
                onChange={handleChangeImage}
              />
            </Form.Group>

            <Form.Group controlId="lore">
              <Form.Label className="d-none">Lore</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Lore"
                name="lore"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Option menu */}
            <Form.Group controlId="role">
              <Form.Label className="d-none">Role</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Role"
                name="role"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Option menu */}
            <Form.Group controlId="champ_class">
              <Form.Label className="d-none">Class</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Class"
                name="champ_class"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Option menu */}
            <Form.Group controlId="range">
              <Form.Label className="d-none">Range</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Range"
                name="range"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Option menu */}
            <Form.Group controlId="difficulty">
              <Form.Label className="d-none">Difficulty</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Difficulty"
                name="difficulty"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="passive_ability">
              <Form.Label className="d-none">Passive</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Passive"
                name="passive_ability"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="passive_description">
              <Form.Label className="d-none">Passive Description</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Passive Description"
                name="passive_description"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group>
              <Form.Label className="d-flex">Passive Image</Form.Label>
              <Form.File
                htmlFor="passive-image"
                id="passive-image"
                accept="image/*"
                ref={imageInput}
                onChange={handleChangeImage}
              />
            </Form.Group>

            <Form.Group controlId="ability_1_ability">
              <Form.Label className="d-none">Ability 1</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 1"
                name="ability_1_ability"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ability_1_description">
              <Form.Label className="d-none">Ability 1 Description</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 1 Description"
                name="ability_1_description"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ability_1_image">
              <Form.Label className="d-none">Ability 1 Image</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 1 Image"
                name="ability_1_image"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ability_2_ability">
              <Form.Label className="d-none">Ability 2</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 2"
                name="ability_2_ability"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ability_2_description">
              <Form.Label className="d-none">Ability 2 Description</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 2 Description"
                name="ability_2_description"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ability_2_image">
              <Form.Label className="d-none">Ability 2 Image</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 2 Image"
                name="ability_2_image"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ability_3_ability">
              <Form.Label className="d-none">Ability 3</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 3"
                name="ability_3_ability"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ability_3_description">
              <Form.Label className="d-none">Ability 3 Description</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 3 Description"
                name="ability_3_description"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ability_3_image">
              <Form.Label className="d-none">Ability 3 Image</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 3 Image"
                name="ability_3_image"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ultimate_ability">
              <Form.Label className="d-none">Ultimate</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ultimate"
                name="ultimate_ability"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ultimate_description">
              <Form.Label className="d-none">Ultimate Description</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ultimate Description"
                name="ultimate_description"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ultimate_image">
              <Form.Label className="d-none">Ultimate Image</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ultimate Image"
                name="ultimate_image"
                value=""
                onChange={handleChange}
              />
            </Form.Group>

            <Button className={`mt-4 ${btnStyles.Button}`} type="submit">
              Create
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}

export default ChampionCreate;
