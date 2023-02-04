import React, { useEffect, useRef, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/ChampionCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import ImagePreview from "../../components/ImagePreview";
import { NotificationManager } from "react-notifications";

function ChampionEdit() {
  const champImageInput = useRef(null);
  const passiveImageInput = useRef(null);
  const ability1ImageInput = useRef(null);
  const ability2ImageInput = useRef(null);
  const ability3ImageInput = useRef(null);
  const ultimateImageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const is_staff = currentUser?.is_staff;
  const [errors, setErrors] = useState({});

  if (!is_staff) {
    history.push("/home");
  }

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
      ability_2_image: "ability_2_image",
      ability_3_image: "ability_3_image",
      ultimate_ability_image: "ultimate_ability_image",
    };
    switch (event.target.id) {
      case imageRef.champ_image:
        handleImageChange(event, champ_image, "champ_image");
        break;
      case imageRef.passive_ability_image:
        handleImageChange(
          event,
          passive_ability_image,
          "passive_ability_image"
        );
        break;
      case imageRef.ability_1_image:
        handleImageChange(event, ability_1_image, "ability_1_image");
        break;
      case imageRef.ability_2_image:
        handleImageChange(event, ability_2_image, "ability_2_image");
        break;
      case imageRef.ability_3_image:
        handleImageChange(event, ability_3_image, "ability_3_image");
        break;
      case imageRef.ultimate_ability_image:
        handleImageChange(
          event,
          ultimate_ability_image,
          "ultimate_ability_image"
        );
        break;
      default:
        return null;
    }
  };

  const handleImageChange = (event, image, imageName) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setChampData({
        ...champData,
        [imageName]: URL.createObjectURL(event.target.files[0]),
      });
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
      await axiosReq.put(`/champions/${id}/edit`, formData);
      history.goBack();
      NotificationManager.success(
        "Champion " + name + " successfully edited",
        "Success!"
      );
      setErrors({});
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
      NotificationManager.error(
        "There wan issue updating this champion",
        "Error"
      );
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
      value: "adc",
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
        <h1 className={styles.Header}>Editing champion - {name}</h1>
        <hr></hr>
      </Row>
      <Row className="mt-5">
        <Col md={6} className={`${styles.ContentBackground} p-4 `}>
          <Form.Group controlId="name">
            <Form.Label className={styles.FormLabel}>Name</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.name?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="alias">
            <Form.Label className={styles.FormLabel}>Alias</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Alias"
              name="alias"
              value={alias}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.alias?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="lore">
            <Form.Label className={styles.FormLabel}>Lore</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Lore"
              name="lore"
              value={lore}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.lore?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="passive_ability">
            <Form.Label className={styles.FormLabel}>Passive</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Passive"
              name="passive_ability"
              value={passive_ability}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.passive_ability?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="passive_ability_description">
            <Form.Label className={styles.FormLabel}>
              Passive Description
            </Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Passive Description"
              name="passive_ability_description"
              value={passive_ability_description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.passive_ability_description?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="ability_1">
            <Form.Label className={styles.FormLabel}>Ability 1</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ability 1"
              name="ability_1"
              value={ability_1}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ability_1?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="ability_1_description">
            <Form.Label className={styles.FormLabel}>
              Ability 1 Description
            </Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ability 1 Description"
              name="ability_1_description"
              value={ability_1_description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ability_1_description?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
        </Col>

        <Col md={6} className={`${styles.ContentBackground} p-4 `}>
          <Form.Group controlId="ability_2">
            <Form.Label className={styles.FormLabel}>Ability 2</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ability 2"
              name="ability_2"
              value={ability_2}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ability_2?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="ability_2_description">
            <Form.Label className={styles.FormLabel}>
              Ability 2 Description
            </Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ability 2 Description"
              name="ability_2_description"
              value={ability_2_description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ability_2_description?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="ability_3">
            <Form.Label className={styles.FormLabel}>Ability 3</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ability 3"
              name="ability_3"
              value={ability_3}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ability_3?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="ability_3_description">
            <Form.Label className={styles.FormLabel}>
              Ability 3 Description
            </Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ability 3 Description"
              name="ability_3_description"
              value={ability_3_description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ability_3_description?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="ultimate_ability">
            <Form.Label className={styles.FormLabel}>Ultimate</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ultimate"
              name="ultimate_ability"
              value={ultimate_ability}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ultimate_ability?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}

          <Form.Group controlId="ultimate_ability_description">
            <Form.Label className={styles.FormLabel}>
              Ultimate Description
            </Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Champion Ultimate Description"
              name="ultimate_ability_description"
              value={ultimate_ability_description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ultimate_ability_description?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
        </Col>
      </Row>

      <Row className={`${styles.ContentBackground} p-4`}>
        <Form.Group>
          <Form.Label className={styles.FormLabel}>Role</Form.Label>
          <Form.Control
            as="select"
            name="role"
            onChange={handleChange}
            value={role}
            className={styles.DropdownUnselected}
          >
            {roleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {errors?.role?.map((message, idx) => (
          <div key={idx} className={styles.FormError}>
            {message === '"" is not a valid choice.'
              ? "Please select an option from the dropdown."
              : message}
          </div>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Champ Class</Form.Label>
          <Form.Control
            as="select"
            name="champ_class"
            onChange={handleChange}
            value={champ_class}
            className={styles.DropdownUnselected}
          >
            {champClassOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {errors?.champ_class?.map((message, idx) => (
          <div key={idx} className={styles.FormError}>
            {message === '"" is not a valid choice.'
              ? "Please select an option from the dropdown."
              : message}
          </div>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Range</Form.Label>
          <Form.Control
            as="select"
            name="range"
            onChange={handleChange}
            value={range}
            className={styles.DropdownUnselected}
          >
            {rangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {errors?.range?.map((message, idx) => (
          <div key={idx} className={styles.FormError}>
            {message === '"" is not a valid choice.'
              ? "Please select an option from the dropdown."
              : message}
          </div>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Difficulty</Form.Label>
          <Form.Control
            as="select"
            name="difficulty"
            onChange={handleChange}
            value={difficulty}
            className={styles.DropdownUnselected}
          >
            {difficultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {errors?.difficulty?.map((message, idx) => (
          <div key={idx} className={styles.FormError}>
            {message === '"" is not a valid choice.'
              ? "Please select an option from the dropdown."
              : message}
          </div>
        ))}
      </Row>

      <Row className={`${styles.ImageRow1} p-4`}>
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
          {errors?.champ_image?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
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
          {errors?.passive_ability_image?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
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
          {errors?.ability_1_image?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
        </Col>
      </Row>

      <Row className={`${styles.ImageRow2} p-4 mb-4`}>
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
          {errors?.ability_2_image?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
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
          {errors?.ability_3_image?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
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
          {errors?.ultimate_ability_image?.map((message, idx) => (
            <div key={idx} className={styles.FormError}>
              {message}
            </div>
          ))}
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
