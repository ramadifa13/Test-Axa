import { styled } from "@mui/system";
import { InputBase, Link, SvgIcon } from '@mui/material';


export const CustomTypography = styled(Link)(() => ({
  marginLeft: 50,
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
  lineHeight: "19px",
  letterSpacing: "0em",
  color: "#323232",
}));
export const StyledImage = styled("img")(() => ({
  height: "10px",
  marginRight: "10px",
}));
export const StyledInputBase = styled(InputBase)(() => ({
  borderBottom:  '1px solid #323232',
  width:'150px'
}));
export const StyledSvgIconSearch = styled(SvgIcon)(() => ({
  marginRight:'10px'
}));
export const StyledSvgIconShop = styled(SvgIcon)(() => ({
  marginRight:'20px',
  marginLeft:'20px'
}));
export const StyledSvgIconProfile = styled(SvgIcon)(() => ({
  marginRight:'20px'
}));
