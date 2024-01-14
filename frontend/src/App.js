import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";

// API
const API_URL = process.env.API_URL || "http://127.0.0.1:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`${API_URL}/new-image/${word}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setImages([{ ...data, title: word }, ...images]); // Add new images at the start to show them at the top
      })
      .catch((error) => {
        console.log(error);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id)); // Keep images where the image id !== delete image id
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container>
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i}>
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome></Welcome>
        )}
      </Container>
    </div>
  );
};

export default App;
