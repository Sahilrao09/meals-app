import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search your meal"
          className="form-input"
          onChange={handleOnChange}
          value={text}
          style={{ color: "black" }}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={fetchRandomMeal}
        >
          Surprise me!
        </button>
      </form>
    </header>
  );
};

export default Search;
