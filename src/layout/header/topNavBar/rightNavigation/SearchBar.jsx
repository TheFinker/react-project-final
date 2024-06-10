import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import useCards from "../../../../cards/hooks/useCards";
const SearchBar = ({ posts, setSearchResults }) => {
  const [search, setSearch] = useState("");
  const { cards, setCards } = useCards();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCards(cards.filter(card => card.title.includes(event.target.value)))
  };
  return (
    <>
      <TextField
        onChange={handleSearchChange}
        value={search}
        label="search.."
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </>
  );
};
export default SearchBar;
