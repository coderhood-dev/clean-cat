import React, { useState, useEffect } from "react";
import { Radio, RadioGroup, Stack, Box } from "@chakra-ui/react";
import Loading from "./Loading";

const url = "https://api.thecatapi.com/v1/categories";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("1");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const categories = await response.json();
      setCategories(categories);
      console.log(categories);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="15px">
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row" spacing={5} padding="1px 8px">
            <Radio value="1">{categories[0].name}</Radio>
            <Radio value="2">{categories[1].name}</Radio>
            <Radio value="3">{categories[2].name}</Radio>
            <Radio value="4">{categories[3].name}</Radio>
            <Radio value="5">{categories[4].name}</Radio>
            <Radio value="6">{categories[5].name}</Radio>
            <Radio value="7">{categories[6].name}</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
};

export default Categories;
