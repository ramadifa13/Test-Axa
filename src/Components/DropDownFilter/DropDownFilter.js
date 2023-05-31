import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import {
  GridClick,
  GridContent,
  GridFilterContainer,
  TitleFilter,
} from "./DropDownFilterStyles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
function DropDownFilter({ TitleDropDown, Children, ...props }) {
  const [show, setShow] = useState(false);
  return (
    <GridFilterContainer>
      <GridClick
        container
        justifyContent="space-between"
        onClick={() => setShow(!show)}
      >
        <TitleFilter item>{TitleDropDown}</TitleFilter>
        <Grid2 item>
        {show ? <ArrowDropDownIcon />:
          <ArrowDropUpIcon/>}
        </Grid2>
      </GridClick>
      {show && <GridContent>{Children}</GridContent>}
    </GridFilterContainer>
  );
}

export default DropDownFilter;
