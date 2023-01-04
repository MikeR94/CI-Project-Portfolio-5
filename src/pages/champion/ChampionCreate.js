import React, { useRef, useState } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

function ChampionCreate() {
  useRedirect("loggedOut");

  const [champData, setChampData] = useState({
    name: "",
    alias: "",
    champ_image: "",
    lore: "",
    role: "",
    champ_class: "",
    range: "",
    difficulty: "",
    passive_ability: "",
    passive_ability_description: "",
    passive_ability_image: "",
    ability_1: "",
    ability_1_description: "",
    ability_1_image: "",
    ability_2: "",
    ability_2_description: "",
    ability_2_image: "",
    ability_3: "",
    ability_3_description: "",
    ability_3_image: "",
    ultimate_ability: "",
    ultimate_ability_description: "",
    ultimate_image: "",
  });

  const {
    name,
    alias,
    champ_image,
    lore,
    role,
    champ_class,
    range,
    difficulty,
    passive_ability,
    passive_ability_description,
    passive_ability_image,
    ability_1,
    ability_1_description,
    ability_1_image,
    ability_2,
    ability_2_description,
    ability_2_image,
    ability_3,
    ability_3_description,
    ability_3_image,
    ultimate_ability,
    ultimate_ability_description,
    ultimate_image,
  } = champData;

  const champImageInput = useRef(null);
  const passiveImageInput = useRef(null);
  const ability1ImageInput = useRef(null);
  const ability2ImageInput = useRef(null);
  const ability3ImageInput = useRef(null);
  const ultimateImageInput = useRef(null);

  const handleChange = (event) => {
    setChampData({
      ...champData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(champ_image);
      URL.revokeObjectURL(passive_ability_image);
      URL.revokeObjectURL(ability_1_image);
      URL.revokeObjectURL(ability_2_image);
      URL.revokeObjectURL(ability_3_image);
      URL.revokeObjectURL(ultimate_image);
      setChampData({
        ...champData,
        champ_image: URL.createObjectURL(event.target.files[0]),
        passive_ability_image: URL.createObjectURL(event.target.files[0]),
        ability_1_image: URL.createObjectURL(event.target.files[0]),
        ability_2_image: URL.createObjectURL(event.target.files[0]),
        ability_3_image: URL.createObjectURL(event.target.files[0]),
        ultimate_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("alias", alias);
    formData.append("champ_image", champImageInput.current.files[0]);
    formData.append("lore", lore);
    formData.append("role", role);
    formData.append("champ_class", champ_class);
    formData.append("range", range);
    formData.append("difficulty", difficulty);

    formData.append("passive_ability", passive_ability);
    formData.append("passive_ability_description", passive_ability_description);
    formData.append(
      "passive_ability_image",
      passiveImageInput.current.files[0]
    );

    formData.append("ability_1", ability_1);
    formData.append("ability_1_description", ability_1_description);
    formData.append("ability_1_image", ability1ImageInput.current.files[0]);

    formData.append("ability_2", ability_2);
    formData.append("ability_2_description", ability_2_description);
    formData.append("ability_2_image", ability2ImageInput.current.files[0]);

    formData.append("ability_3", ability_3);
    formData.append("ability_3_description", ability_3_description);
    formData.append("ability_3_image", ability3ImageInput.current.files[0]);

    formData.append("ultimate_ability", ultimate_ability);
    formData.append(
      "ultimate_ability_description",
      ultimate_ability_description
    );
    formData.append("ultimate_image", ultimateImageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/champions/create/", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col md={6}>
        <Container className={`${styles.ContentBackground} p-4 `}>
          <h1 className={styles.Header}>Create a champion</h1>
          <hr></hr>

          <Form onSubmit={handleSubmit}>
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
                htmlFor="champ_image"
                id="champ_image"
                accept="image/*"
                ref={champImageInput}
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
                value={lore}
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
                value={role}
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
                value={champ_class}
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
                value={range}
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
                value={difficulty}
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
                value={passive_ability}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="passive_ability_description">
              <Form.Label className="d-none">Passive Description</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Passive Description"
                name="passive_ability_description"
                value={passive_ability_description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group>
              <Form.Label className="d-flex">Passive Image</Form.Label>
              <Form.File
                htmlFor="passive_ability_image"
                id="passive_ability_image"
                accept="image/*"
                ref={passiveImageInput}
                onChange={handleChangeImage}
              />
            </Form.Group>

            <Form.Group controlId="ability_1">
              <Form.Label className="d-none">Ability 1</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 1"
                name="ability_1"
                value={ability_1}
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
                value={ability_1_description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ability_1_image">
              <Form.Label className="d-flex">Ability 1 Image</Form.Label>
              <Form.File
                htmlFor="ability_1_image"
                id="ability_1_image"
                accept="image/*"
                ref={ability1ImageInput}
                onChange={handleChangeImage}
              />
            </Form.Group>

            <Form.Group controlId="ability_2">
              <Form.Label className="d-none">Ability 2</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 2"
                name="ability_2"
                value={ability_2}
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
                value={ability_2_description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ability_2_image">
              <Form.Label className="d-flex">Ability 2 Image</Form.Label>
              <Form.File
                htmlFor="ability_2_image"
                id="ability_2_image"
                accept="image/*"
                ref={ability2ImageInput}
                onChange={handleChangeImage}
              />
            </Form.Group>

            <Form.Group controlId="ability_3">
              <Form.Label className="d-none">Ability 3</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ability 3"
                name="ability_3"
                value={ability_3}
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
                value={ability_3_description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ability_3_image">
              <Form.Label className="d-flex">Ability 3 Image</Form.Label>
              <Form.File
                htmlFor="ability_3_image"
                id="ability_3_image"
                accept="image/*"
                ref={ability3ImageInput}
                onChange={handleChangeImage}
              />
            </Form.Group>

            <Form.Group controlId="ultimate_ability">
              <Form.Label className="d-none">Ultimate</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ultimate"
                name="ultimate_ability"
                value={ultimate_ability}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ultimate_ability_description">
              <Form.Label className="d-none">Ultimate Description</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Champion Ultimate Description"
                name="ultimate_ability_description"
                value={ultimate_ability_description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Image field */}
            <Form.Group controlId="ultimate_image">
              <Form.Label className="d-flex">Ultimate Image</Form.Label>
              <Form.File
                htmlFor="ultimate_image"
                id="ultimate_image"
                accept="image/*"
                ref={ultimateImageInput}
                onChange={handleChangeImage}
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
