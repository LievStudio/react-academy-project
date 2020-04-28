import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Grid } from "@material-ui/core";
import "./styles/categories.css";

const Categories = (props) => {
  return (
    <Grid container className="btns-container">
      <ToggleButtonGroup
        variant="contained"
        aria-label="contained primary button group"
      >
        <ToggleButton
          value="all"
          onClick={() => {
            props.changeCategory("all");
          }}
          selected={props.activeCategory === "all" ? true : false}
          className="category-button"
        >
          All
        </ToggleButton>
        <ToggleButton
          value="travel"
          name="travel"
          onClick={() => {
            props.changeCategory("travel");
          }}
          selected={props.activeCategory === "travel" ? true : false}
          className="category-button"
        >
          Travel
        </ToggleButton>
        <ToggleButton
          value="lifestyle"
          name="lifestyle"
          onClick={() => props.changeCategory("lifestyle")}
          selected={props.activeCategory === "lifestyle" ? true : false}
          className="category-button"
        >
          Lifestyle
        </ToggleButton>
        <ToggleButton
          value="business"
          name="business"
          onClick={() => props.changeCategory("business")}
          selected={props.activeCategory === "business" ? true : false}
          className="category-button"
        >
          Business
        </ToggleButton>
        <ToggleButton
          value="food"
          name="food"
          onClick={() => props.changeCategory("food")}
          selected={props.activeCategory === "food" ? true : false}
          className="category-button"
        >
          Food
        </ToggleButton>
        <ToggleButton
          value="work"
          name="work"
          onClick={() => props.changeCategory("work")}
          selected={props.activeCategory === "work" ? true : false}
          className="category-button"
        >
          Work
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};

export default Categories;
