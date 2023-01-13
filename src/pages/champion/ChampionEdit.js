import React, { useEffect, useRef, useState } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import styles from "../../styles/ChampionCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory, useParams } from "react-router-dom";

function ChampionEdit() {
  useRedirect("loggedOut");
  const history = useHistory();
  const { id } = useParams();

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
    const imageRef = {
      champ_image: "champ_image",
      passive_ability_image: "passive_ability_image",
      ability_1_image: "ability_1_image",
      ability_2_image: "ability_1_image",
      ability_3_image: "ability_1_image",
      ultimate_ability_image: "ultimate_ability_image",
    };

    if (event.target.id === imageRef.champ_image) {
      if (event.target.files.length) {
        URL.revokeObjectURL(champ_image);
        setChampData({
          ...champData,
          champ_image: URL.createObjectURL(event.target.files[0]),
        });
      }
    }

    if (event.target.id === imageRef.passive_ability_image) {
      if (event.target.files.length) {
        URL.revokeObjectURL(passive_ability_image);
        setChampData({
          ...champData,
          passive_ability_image: URL.createObjectURL(event.target.files[0]),
        });
      }
    }

    if (event.target.id === imageRef.ability_1_image) {
      if (event.target.files.length) {
        URL.revokeObjectURL(ability_1_image);
        setChampData({
          ...champData,
          ability_1_image: URL.createObjectURL(event.target.files[0]),
        });
      }
    }

    if (event.target.id === imageRef.ability_2_image) {
      if (event.target.files.length) {
        URL.revokeObjectURL(ability_2_image);
        setChampData({
          ...champData,
          ability_2_image: URL.createObjectURL(event.target.files[0]),
        });
      }
    }

    if (event.target.id === imageRef.ability_3_image) {
      if (event.target.files.length) {
        URL.revokeObjectURL(ability_3_image);
        setChampData({
          ...champData,
          ability_3_image: URL.createObjectURL(event.target.files[0]),
        });
      }
    }

    if (event.target.id === imageRef.ultimate_ability_image) {
      if (event.target.files.length) {
        URL.revokeObjectURL(ultimate_ability_image);
        setChampData({
          ...champData,
          ultimate_ability_image: URL.createObjectURL(event.target.files[0]),
        });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    let champBlob = await fetch(champ_image).then((r) => r.blob());
    let passiveBlob = await fetch(passive_ability_image).then((r) => r.blob());
    let ability1Blob = await fetch(ability_1_image).then((r) => r.blob());
    let ability2Blob = await fetch(ability_2_image).then((r) => r.blob());
    let ability3Blob = await fetch(ability_3_image).then((r) => r.blob());
    let ultimateBlob = await fetch(ultimate_ability_image).then((r) =>
      r.blob()
    );
    formData.append("champ_image", champBlob, "image1.jpg");
    formData.append("passive_ability_image", passiveBlob, "image2.jpg");
    formData.append("ability_1_image", ability1Blob, "image3.jpg");
    formData.append("ability_2_image", ability2Blob, "image4.jpg");
    formData.append("ability_3_image", ability3Blob, "image5.jpg");
    formData.append("ultimate_ability_image", ultimateBlob, "image6.jpg");
    for (const data in champData) {
      formData.append(`${data}`, champData[data]);
    }
    try {
      await axiosReq.put(`/champions/${id}/`, formData);
      history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/champions/${id}`);
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
        } = data;
        setChampData({
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
        });
      } catch (error) {
        console.log(error);
      }
    };
    handleMount();
  }, [id]);

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
            defaultValue={role}
            className={styles.DropdownUnselected}
          >
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
            defaultValue={champ_class}
            className={styles.DropdownUnselected}
          >
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
            defaultValue={range}
            className={styles.DropdownUnselected}
          >
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
            defaultValue={difficulty}
            className={styles.DropdownUnselected}
          >
            {difficultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Row>

      <Row className={`${styles.ContentBackgroundImage} p-4`}>
        <Col className="">
          <Form.Group className="">
            <Form.Label className="">Champ Image</Form.Label>
            <Form.File
              htmlFor="champ_image"
              id="champ_image"
              accept="image/*"
              ref={champImageInput}
              onChange={handleChangeImage}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="">Passive Image</Form.Label>
            <Form.File
              htmlFor="passive_ability_image"
              id="passive_ability_image"
              accept="image/*"
              ref={passiveImageInput}
              onChange={handleChangeImage}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="ability_1_image">
            <Form.Label className="">Ability 1 Image</Form.Label>
            <Form.File
              htmlFor="ability_1_image"
              id="ability_1_image"
              accept="image/*"
              ref={ability1ImageInput}
              onChange={handleChangeImage}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className={`${styles.ContentBackgroundImage} p-4 mb-4`}>
        <Col className="">
          <Form.Group controlId="ability_2_image">
            <Form.Label className="">Ability 2 Image</Form.Label>
            <Form.File
              htmlFor="ability_2_image"
              id="ability_2_image"
              accept="image/*"
              ref={ability2ImageInput}
              onChange={handleChangeImage}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="ability_3_image">
            <Form.Label className="">Ability 3 Image</Form.Label>
            <Form.File
              htmlFor="ability_3_image"
              id="ability_3_image"
              accept="image/*"
              ref={ability3ImageInput}
              onChange={handleChangeImage}
            />
          </Form.Group>
        </Col>
        <Col className="mb-4">
          <Form.Group controlId="ultimate_ability_image">
            <Form.Label className="">Ultimate Image</Form.Label>
            <Form.File
              htmlFor="ultimate_ability_image"
              id="ultimate_ability_image"
              accept="image/*"
              ref={ultimateImageInput}
              onChange={handleChangeImage}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Button className={`mt-4 ${btnStyles.Button}`} type="submit">
          Update
        </Button>
      </Row>
    </Form>
  );
}

export default ChampionEdit;
