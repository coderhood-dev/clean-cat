import React, { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import Loading from "./Loading";

const url = "https://api.thecatapi.com/v1/images/search";

function RandomCat() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const images = await response.json();
      setImages(images);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box d="flex" w="100%" justifyContent="center">
      <Image
        src={images[0].url}
        alt="kitty"
        boxSize="600px"
        objectFit="cover"
      />
    </Box>
  );
}

export default RandomCat;
