import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { TitleFilter } from "./FilterStyles";
import { DropDownFilter } from "../DropDownFilter";

function Filter({ totalFilter = 0, dataFilter, ...props }) {
  return (
    <Paper elevation={2}>
      <Grid2
        sx={{
          paddingX: "20px",
          paddingY: "20px",
        }}
        container
      >
        <Grid2 xs={12} container sx={{borderBottom: "1px solid #BCBCBC",paddingBottom:'20px'}}>
          <TitleFilter>Filter ({totalFilter})</TitleFilter>
        </Grid2>
      </Grid2>
      {dataFilter.map((d, i) => {
        return (
          <div key={i}>
            <DropDownFilter
              TitleDropDown={d.TitleDropDown}
              Children={d.Children}
            />
          </div>
        );
      })}
    </Paper>
  );
}

export default Filter;
