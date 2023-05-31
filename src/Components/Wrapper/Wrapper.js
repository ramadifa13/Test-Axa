import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { Filter } from "../Filter";
import { DataList } from "../DataList";
import service from "../../Service/service";
import {
  brands,
  getRandomBrand,
  getRandomImage,
  getRandomSize,
  pickColor,
  sizes,
} from "../../constants";
import CheckBox from "@mui/material/Checkbox";
import {
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
function Wrapper() {
  const [dataList, setDataList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);
  const [checkedColor, setCheckedColor] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sortValue, setSortValue] = useState("1");

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };
  const uniqueData = dataList.filter(
    (item, index, self) =>
      index ===
      self.findIndex((i) => i.warna.toUpperCase() === item.warna.toUpperCase())
  );

  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, item]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((checkedItem) => checkedItem !== item)
      );
    }
  };
  const handleCheckboxColor = (element) => {
    if (checkedColor.includes(element)) {
      // Element exists in the array, remove it
      setCheckedColor(checkedColor.filter((item) => item !== element));
    } else {
      // Element doesn't exist in the array, add it
      setCheckedColor([...checkedColor, element]);
    }
    console.log(checkedColor);
  };
  const handleCheckboxSizeChange = (event, item) => {
    if (event.target.checked) {
      setCheckedSize((prevCheckedItems) => [...prevCheckedItems, item]);
    } else {
      setCheckedSize((prevCheckedItems) =>
        prevCheckedItems.filter((checkedItem) => checkedItem !== item)
      );
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.fetchData();
        const data = response;
        const dataWithImages = data.map((item) => ({
          ...item,
          image: getRandomImage(),
          size: getRandomSize(),
          brand: getRandomBrand(),
        }));

        setDataList(dataWithImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSort = () => {
    setShowModal(true);
  };
  const filteredData = dataList.filter((item) => {
    const filteredSize =
      checkedSize.length === 0 || checkedSize.includes(item.size);
    const filteredColor =
      checkedColor.length === 0 || checkedColor.includes(item.warna);
    const filteredBrand =
      checkedItems.length === 0 || checkedItems.includes(item.brand);

    return filteredSize && filteredColor && filteredBrand;
  });
  const sortedData = filteredData.slice().sort((a, b) => {
    if (sortValue === "1") {
      return b.stok - a.stok;
    } else if (sortValue === "2") {
      return a.harga - b.harga;
    } else if (sortValue === "3") {
      return b.harga - a.harga;
    } else if (sortValue === "4") {
      return new Date(b.created_date) - new Date(a.created_date);
    } else if (sortValue === "5") {
      return a.stok - b.stok;
    }
    return 0;
  });
  return (
    <>
      <Grid2 container spacing={2} sx={{ padding: 5, marginTop: "30px" }}>
        <Grid2 xs={2}>
          <Filter
            totalFilter={
              checkedItems.length + checkedSize.length + checkedColor.length
            }
            dataFilter={[
              {
                TitleDropDown: "Ukuran",
                Children: (
                  <div>
                    {sizes.map((d) => {
                      return (
                        <Grid2>
                          <CheckBox
                            checked={checkedSize.includes(d)}
                            onChange={(event) =>
                              handleCheckboxSizeChange(event, d)
                            }
                          />
                          {d}
                        </Grid2>
                      );
                    })}
                  </div>
                ),
              },
              {
                TitleDropDown: "Warna",
                Children: (
                  <Box display="flex" flexWrap="wrap">
                    {uniqueData.map((d, i) => {
                      return (
                        <Button
                          display="flex"
                          alignItems="center"
                          sx={{
                            border: "2px solid #BCBCBC",
                            marginRight: "2px",
                            marginBottom: "2px",
                            textTransform: "capitalize",
                            backgroundColor: checkedColor.includes(d.warna)
                              ? "#323232"
                              : "white",
                            color: checkedColor.includes(d.warna)
                              ? "white"
                              : "black",
                          }}
                          key={i}
                          onClick={() => handleCheckboxColor(d.warna)}
                        >
                          <SquareIcon
                            fontSize="small"
                            sx={{ color: pickColor[d.warna] }}
                          />
                          {d.warna}
                        </Button>
                      );
                    })}
                  </Box>
                ),
              },
              {
                TitleDropDown: "Brand",
                Children: (
                  <div>
                    {brands.map((d) => {
                      return (
                        <Grid2>
                          {" "}
                          <CheckBox
                            checked={checkedItems.includes(d)}
                            onChange={(event) => handleCheckboxChange(event, d)}
                          />
                          {d}{" "}
                        </Grid2>
                      );
                    })}
                  </div>
                ),
              },
            ]}
          />
        </Grid2>
        <Grid2 xs={10}>
          <DataList
            data={sortedData}
            itemsPerPage={9}
            handleSort={handleSort}
          />
        </Grid2>
      </Grid2>
      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogContent>
          <FormControl component="fieldset">
            <RadioGroup
              name="myRadioGroup"
              value={sortValue}
              onChange={handleChange}
            >
              <Typography sx={{ fontFamily: "Font2" }}>
                Urutkan Berdasar
              </Typography>
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Popularitas"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Harga Terendah ke Termahal"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="Harga Termahal ke Terendah"
              />
              <FormControlLabel value="4" control={<Radio />} label="Terbaru" />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="Penjualan Terbaik"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Wrapper;
