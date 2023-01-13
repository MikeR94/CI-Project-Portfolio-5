import React, { useRef, useState } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import styles from "../../styles/ChampionCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import ImagePreview from "../../components/ImagePreview";

function ChampionCreate() {
  useRedirect("loggedOut");
  const history = useHistory();

  const champImageInput = useRef(null);
  const passiveImageInput = useRef(null);
  const ability1ImageInput = useRef(null);
  const ability2ImageInput = useRef(null);
  const ability3ImageInput = useRef(null);
  const ultimateImageInput = useRef(null);

  const [rangeSelected, setRangeSelected] = useState(false);
  const [roleSelected, setRoleSelected] = useState(false);
  const [difficultySelected, setDifficultySelected] = useState(false);
  const [champClassSelected, setChampClassSelected] = useState(false);

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
    ultimate_ability_image: "",
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
    ultimate_ability_image,
  } = champData;

  const handleChange = (event) => {
    console.log(event.target.value);
    if (
      event.target.value === "mid" ||
      event.target.value === "top" ||
      event.target.value === "jungle" ||
      event.target.value === "bottom" ||
      event.target.value === "support"
    ) {
      setRoleSelected(true);
    } else if (
      event.target.value === "low" ||
      event.target.value === "moderate" ||
      event.target.value === "high"
    ) {
      setDifficultySelected(true);
    }
    if (
      event.target.value === "controller" ||
      event.target.value === "fighter" ||
      event.target.value === "mage" ||
      event.target.value === "marksman" ||
      event.target.value === "slayer" ||
      event.target.value === "tank" ||
      event.target.value === "specialist"
    ) {
      setChampClassSelected(true);
    }
    if (event.target.value === "melee" || event.target.value === "ranged") {
      setRangeSelected(true);
    }
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
      URL.revokeObjectURL(ultimate_ability_image);
      setChampData({
        ...champData,
        champ_image: URL.createObjectURL(event.target.files[0]),
        passive_ability_image: URL.createObjectURL(event.target.files[0]),
        ability_1_image: URL.createObjectURL(event.target.files[0]),
        ability_2_image: URL.createObjectURL(event.target.files[0]),
        ability_3_image: URL.createObjectURL(event.target.files[0]),
        ultimate_ability_image: URL.createObjectURL(event.target.files[0]),
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
    formData.append(
      "ultimate_ability_image",
      ultimateImageInput.current.files[0]
    );

    try {
      await axiosReq.post("/champions/create/", formData);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const roleOptions = [
    {
      label: "Middle",
      value: "mid",
    },
    {
      label: "Top",
      value: "top",
    },
    {
      label: "Jungle",
      value: "jungle",
    },
    {
      label: "ADC",
      value: "bottom",
    },
    {
      label: "Support",
      value: "support",
    },
  ];

  const champClassOptions = [
    {
      label: "Controller",
      value: "controller",
    },
    {
      label: "Fighter",
      value: "fighter",
    },
    {
      label: "Mage",
      value: "mage",
    },
    {
      label: "Marksman",
      value: "marksman",
    },
    {
      label: "Slayer",
      value: "slayer",
    },
    {
      label: "Tank",
      value: "tank",
    },
    {
      label: "Specialist",
      value: "specialist",
    },
  ];

  const rangeOptions = [
    {
      label: "Melee",
      value: "melee",
    },
    {
      label: "Ranged",
      value: "ranged",
    },
  ];

  const difficultyOptions = [
    {
      label: "Low",
      value: "low",
    },
    {
      label: "Moderate",
      value: "moderate",
    },
    {
      label: "High",
      value: "high",
    },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mt-5">
        <h1 className={styles.Header}>Create a champion</h1>
        <hr></hr>
      </Row>
      <Row className="mt-5">
        <Col md={6} className={`${styles.ContentBackground} p-4 `}>
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
        </Col>

        <Col md={6} className={`${styles.ContentBackground} p-4 `}>
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
        </Col>
      </Row>

      <Row className={`${styles.ContentBackground} p-4`}>
        <Form.Group>
          <Form.Label className="d-none">Select Role</Form.Label>
          <Form.Control
            as="select"
            name="role"
            onChange={handleChange}
            defaultValue={"default"}
            className={
              roleSelected
                ? `${styles.DropdownUnselected}`
                : `${styles.DropdownSelected}`
            }
          >
            <option value="default" disabled>
              Please select a role
            </option>
            {roleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="d-none">Select Champ Class</Form.Label>
          <Form.Control
            as="select"
            name="champ_class"
            onChange={handleChange}
            defaultValue={"default"}
            className={
              champClassSelected
                ? `${styles.DropdownUnselected}`
                : `${styles.DropdownSelected}`
            }
          >
            <option value="default" disabled>
              Please select a class
            </option>
            {champClassOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="d-none">Select Range</Form.Label>
          <Form.Control
            as="select"
            name="range"
            onChange={handleChange}
            defaultValue={"default"}
            className={
              rangeSelected
                ? `${styles.DropdownUnselected}`
                : `${styles.DropdownSelected}`
            }
          >
            <option value="default" disabled>
              Please select the range
            </option>
            {rangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="d-none">Difficulty</Form.Label>
          <Form.Control
            as="select"
            name="difficulty"
            onChange={handleChange}
            defaultValue={"default"}
            className={
              difficultySelected
                ? `${styles.DropdownUnselected}`
                : `${styles.DropdownSelected}`
            }
          >
            <option value="default" disabled>
              Please select a difficulty
            </option>
            {difficultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Row>

      <Row className={`${styles.ContentBackgroundImage} p-4`}>
        <Col className="text-center">
          <Form.Group controlId="champ_image">
            <Row>
              <span className={styles.ImageText}>Champion</span>
            </Row>
            <Form.Label>
              <Row>
                <ImagePreview
                  width={64}
                  height={64}
                  src={champ_image}
                ></ImagePreview>
                <Form.File
                  htmlFor="champ_image"
                  id="champ_image"
                  accept="image/*"
                  ref={champImageInput}
                  onChange={handleChangeImage}
                />
              </Row>
            </Form.Label>
          </Form.Group>
        </Col>
        <Col className="text-center">
          <Form.Group controlId="passive_ability_image">
            <Row>
              <span className={styles.ImageText}>Passive Ability</span>
            </Row>
            <Form.Label>
              <Row>
                <ImagePreview
                  width={64}
                  height={64}
                  src={passive_ability_image}
                ></ImagePreview>
                <Form.File
                  htmlFor="passive_ability_image"
                  id="passive_ability_image"
                  accept="image/*"
                  ref={passiveImageInput}
                  onChange={handleChangeImage}
                />
              </Row>
            </Form.Label>
          </Form.Group>
        </Col>
        <Col className="text-center">
          <Form.Group controlId="ability_1_image">
            <Row>
              <span className={styles.ImageText}>Ability 1</span>
            </Row>
            <Form.Label>
              <Row>
                <ImagePreview
                  width={64}
                  height={64}
                  src={ability_1_image}
                ></ImagePreview>
                <Form.File
                  htmlFor="ability_1_image"
                  id="ability_1_image"
                  accept="image/*"
                  ref={ability1ImageInput}
                  onChange={handleChangeImage}
                />
              </Row>
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>

      <Row className={`${styles.ContentBackgroundImage} p-4 mb-4`}>
        <Col className="text-center">
          <Form.Group controlId="ability_2_image">
            <Row>
              <span className={styles.ImageText}>Ability 2</span>
            </Row>
            <Form.Label>
              <Row>
                <ImagePreview
                  width={64}
                  height={64}
                  src={ability_2_image}
                ></ImagePreview>
                <Form.File
                  htmlFor="ability_2_image"
                  id="ability_2_image"
                  accept="image/*"
                  ref={ability2ImageInput}
                  onChange={handleChangeImage}
                />
              </Row>
            </Form.Label>
          </Form.Group>
        </Col>
        <Col className="text-center">
          <Form.Group controlId="ability_3_image">
            <Row>
              <span className={styles.ImageText}>Ability 3</span>
            </Row>
            <Form.Label>
              <Row>
                <ImagePreview
                  width={64}
                  height={64}
                  src={ability_3_image}
                ></ImagePreview>
                <Form.File
                  htmlFor="ability_3_image"
                  id="ability_3_image"
                  accept="image/*"
                  ref={ability3ImageInput}
                  onChange={handleChangeImage}
                />
              </Row>
            </Form.Label>
          </Form.Group>
        </Col>
        <Col className="text-center">
          <Form.Group controlId="ultimate_ability_image">
            <Row>
              <span className={styles.ImageText}>Ultimate Ability</span>
            </Row>
            <Form.Label>
              <Row>
                <ImagePreview
                  width={64}
                  height={64}
                  src={ultimate_ability_image}
                ></ImagePreview>
                <Form.File
                  htmlFor="ultimate_ability_image"
                  id="ultimate_ability_image"
                  accept="image/*"
                  ref={ultimateImageInput}
                  onChange={handleChangeImage}
                />
              </Row>
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Button className={`mt-4 ${btnStyles.Button}`} type="submit">
          Create
        </Button>
      </Row>
    </Form>
  );
}

export default ChampionCreate;
