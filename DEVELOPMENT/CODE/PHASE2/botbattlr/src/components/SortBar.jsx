import React from "react";
//passing sortCriteria and onSortCriteriaChange props
function SortBar({ sortCriteria, onSortCriteriaChange }) {
  // Declaring an array of options for the select input
  const options = [
    { value: "health", label: "Health" },
    { value: "damage", label: "Damage" },
    { value: "armor", label: "Armor" },
  ];
  // Rendering a div with a label and a select input with options
  return (
    <div className="sort-bar">
      <label htmlFor="sort-criteria">Sort by:</label>
      <select
        id="sort-criteria"
        value={sortCriteria}
        onChange={(event) => onSortCriteriaChange(event.target.value)}
      >
        {/* Mapping through the options array and rendering an option for each item */}
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}
export default SortBar;