import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
/**
 * Custom hook to handle the flip state of a card.
 * Returns the current flip state and a function to toggle the flip state.
 */
const useFlip = () => {
  const [isFlipped, setIsFlipped] = useState(true);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return [isFlipped, flipCard];
};

export { useFlip };

/**
 * Custom hook to handle AJAX requests and data storage.
 * Accepts a base URL and returns the fetched data and a function to fetch more data.
 */
const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  const fetchData = async (urlExtension = "") => {
    const url = baseUrl + urlExtension;
    try {
      const response = await axios.get(url);
      setData((prevData) => [...prevData, { ...response.data, id: uuidv4() }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, fetchData];
};

export { useAxios };
