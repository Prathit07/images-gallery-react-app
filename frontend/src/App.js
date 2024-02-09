import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import Spinner from "./components/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// API
const API_URL = process.env.API_URL || "http://127.0.0.1:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSavedImages = async () => {
    try {
      const result = await axios.get(`${API_URL}/get-images`);
      setImages(result.data || []); // if data is empty, set it as an empty array
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getSavedImages();
    };

    fetchData();
  }, []); // empty dependency array, so it only runs once on mount

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // Axios call
    try {
      const result = await axios.get(`${API_URL}/new-image/${word}`);
      setImages([{ ...result.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setWord("");
  };

  const handleDeleteImage = async (id) => {
    try {
      const result = await axios.delete(`${API_URL}/delete-image/${id}`);
      if (result.data?.deleted_id) {
        setImages(images.filter((image) => image.id !== id)); // Keep images where the image id !== delete image id
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id); // Find the image with the id to save in the db
    const updatedImage = { ...imageToBeSaved, saved: true };
    try {
      const result = await axios.post(`${API_URL}/post-image`, updatedImage);
      if (result.data?.inserted_id) {
        setImages((prevImages) =>
          prevImages.map((image) =>
            image.id === id ? { ...image, saved: true } : image,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header title="Images Gallery" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <Container>
            {images.length ? (
              <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => (
                  <Col key={i}>
                    <ImageCard
                      image={image}
                      deleteImage={handleDeleteImage}
                      saveImage={handleSaveImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome></Welcome>
            )}
          </Container>
        </>
      )}
    </div>
  );
};

export default App;
