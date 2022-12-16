import axios from "axios";
import React from "react";
import { useState } from "react";

const baseURL = "https://api.chucknorris.io/jokes/random";

export default function ApiCall() {
  const [post, setPost] = useState(null);
  const getJoke = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.value);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className='line_up'>{post}</h1>
      <button className='btn btn-primary' onClick={getJoke}>
        Get me a new one
      </button>
    </div>
  );
}
