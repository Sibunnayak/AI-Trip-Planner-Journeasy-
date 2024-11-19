import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";

const GoMapsAutocomplete = ({ apiKey, onChange }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(
        `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${input}&key=${apiKey}`
      );
      setSuggestions(response.data.predictions || []);
    } catch (error) {
      console.error("Error fetching suggestions", error);
    }
  };

  const handleSelect = (selectedPlace) => {
    setQuery(selectedPlace.description);
    onChange(selectedPlace); // Pass selected place back to parent component
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="relative">
      <Input
        placeholder="Search for a place"
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default GoMapsAutocomplete;