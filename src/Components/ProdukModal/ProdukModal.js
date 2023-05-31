import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, Typography, Button, SvgIcon } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { formatRupiah, renderImage } from "../../constants";
import SvgShop from "../../Assets/image/shop2.png";

const ProdukModal = ({ visible, onRequestClose, item }) => {
  return (
    <Dialog open={visible} onClose={onRequestClose}>
      <DialogContent>
        <Grid2 container spacing={1}>
          <Grid2 xs={4}>
            {renderImage(item.brand)}
            {renderImage(item.brand)}
          </Grid2>
          <Grid2 xs={4} >
            {renderImage(item.brand)}
            {renderImage(item.brand)}
          </Grid2>
          <Grid2 xs={4} sx={{paddingLeft:2}}>
            <Typography sx={{ fontFamily: "Font1", fontSize: 16 }}>
              {item.nama}
            </Typography>
            <Typography sx={{ fontFamily: "Font2" }}>
              Rp. {formatRupiah(item.harga)}
            </Typography>
            <Typography
              sx={{ fontFamily: "Font1", fontSize: 12, marginTop: 2 }}
            >
              Ukuran
            </Typography>
            <Typography sx={{ fontFamily: "Font2", fontSize: 16 }}>
              {item.size}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ marginTop: 1 }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#323232",paddingRight:5,paddingLeft:5 }} onClick={onRequestClose} >
                Beli
              </Button>
              <img src={SvgShop} />
            </Box>
          </Grid2>
        </Grid2>
      </DialogContent>
    </Dialog>
  );
};

export default ProdukModal;
