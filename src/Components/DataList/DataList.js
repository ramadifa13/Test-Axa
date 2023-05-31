import React, { useState } from "react";
import { Box, Button, SvgIcon } from "@mui/material";
import Pagination from "./Pagination";
import imageBanner from "../../Assets/image/banner.png";
import { ReactComponent as svgSort } from "../../Assets/image/sort.svg";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { formatRupiah, renderImage } from "../../constants";
import ProdukModal from "../ProdukModal/ProdukModal";
import './DataList.css'


const DataList = ({ data, itemsPerPage, handleSort }) => {
  const { kategori } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [itemModal, setItemModal] = useState({});
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(startIndex + itemsPerPage, data.length);

  return (
    <Box>
      <Banner banner={imageBanner} />
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Box display="flex">
          <Box sx={{ fontFamily: "Font2" }}>KAOS{" " + kategori}</Box>
          <Box sx={{ marginLeft: 5 }}>{data.length + " "} Produk</Box>
        </Box>
        <Box display="flex">
          <Button
            variant="contained"
            endIcon={<SvgIcon component={svgSort} sx={{ marginTop: 1 }} />}
            sx={{
              textTransform: "capitalize",
              fontFamily: "Font1",
              backgroundColor: "#323232",
              color: "white",
            }}
            onClick={handleSort}
          >
            Urutkan
          </Button>
        </Box>
      </Box>
      <Grid2 container spacing={5} sx={{ marginTop: 2, marginBottom: 4 }}>
        {paginatedData.map((items, index) => (
          <Grid2
            item
            xs={4}
            key={index}
            className="modalCard"
            onClick={() => {
              setOpenModal(true);
              setItemModal(items);
            }}
          >
            {renderImage(items.brand)}
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ marginTop: 1 }}
            >
              <Box display="flex" sx={{ fontFamily: "Font2" }}>
                {items.nama}
              </Box>
              <Box display="flex" sx={{ fontFamily: "Font1" }}>
                Rp.{formatRupiah(items.harga)}
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>

      <Pagination
        data={data}
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
        start={start}
        end={end}
      />
      <ProdukModal
        visible={openModal}
        item={itemModal}
        onRequestClose={() => {
          setOpenModal(false);
          setItemModal({});
        }}
      />
    </Box>
  );
};

export default DataList;
