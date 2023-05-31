import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/system";

export const TitleFilter = styled(Grid2)(() => ({
  fontFamily: "Font2",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "19px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#323232",
}));
export const GridClick = styled(Grid2)(() => ({
  backgroundColor: "#ffff",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#bdbdbd",
  },
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop:10,
}));
export const GridFilterContainer = styled("div")(() => ({
  paddingBottom: 20,
}));
export const GridContent = styled(Grid2)(() => ({
  paddingLeft: 20,
  paddingRight: 20,
}));
