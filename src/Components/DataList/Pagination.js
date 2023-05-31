import React from "react";
import { Box, Button } from "@mui/material";

const Pagination = ({ currentPage, totalPages,start,end, onChange, data }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onChange(newPage);
    }
  };

  const renderPageButtons = () => {
    const maxVisibleButtons = 10;
    const ellipsisThreshold = maxVisibleButtons - 2;

    if (totalPages <= maxVisibleButtons) {
      return Array.from(Array(totalPages), (_, index) => (
        <Button
          key={index + 1}
          variant={currentPage === index + 1 ? "contained" : "outlined"}
          onClick={() => handlePageChange(index + 1)}
          sx={{
            marginRight: "5px",
            marginLeft: "5px",
            width: "20px",
            height: "40px",
            backgroundColor: currentPage === index + 1 ? "#323232" : "#ffff",
          }}
        >
          {index + 1}
        </Button>
      ));
    } else {
      const visibleButtons = [];

      if (currentPage <= ellipsisThreshold - 1) {
        for (let i = 1; i <= ellipsisThreshold; i++) {
          visibleButtons.push(
            <Button
              key={i}
              variant={currentPage === i ? "contained" : "outlined"}
              onClick={() => handlePageChange(i)}
              sx={{
                marginRight: "5px",
                marginLeft: "5px",
                width: "20px",
                height: "30px",
                backgroundColor:
                  currentPage === i + 1 ? "#323232" : "#ffff",
              }}
            >
              {i}
            </Button>
          );
        }

        visibleButtons.push(
          <Button key="ellipsis-end" disabled>
            ...
          </Button>
        );

        visibleButtons.push(
          <Button
            key={totalPages}
            variant="outlined"
            onClick={() => handlePageChange(totalPages)}
            sx={{
              marginRight: "5px",
              marginLeft: "5px",
              width: "20px",
              height: "30px",
              borderColor: "#323232",
            }}
          >
            {totalPages}
          </Button>
        );
      } else if (currentPage >= totalPages - ellipsisThreshold + 2) {
        visibleButtons.push(
          <Button
            key={1}
            variant="outlined"
            onClick={() => handlePageChange(1)}
            sx={{
              marginRight: "5px",
              marginLeft: "5px",
              width: "20px",
              height: "30px",
              borderColor: "#323232",
            }}
          >
            1
          </Button>
        );

        visibleButtons.push(
          <Button key="ellipsis-start" disabled>
            ...
          </Button>
        );

        for (let i = totalPages - ellipsisThreshold + 1; i <= totalPages; i++) {
          visibleButtons.push(
            <Button
              key={i}
              variant={currentPage === i ? "contained" : "outlined"}
              onClick={() => handlePageChange(i)}
              sx={{
                marginRight: "5px",
                marginLeft: "5px",
                width: "20px",
                height: "30px",
                backgroundColor:
                  currentPage === i + 1 ? "#323232" : "#ffff",
              }}
            >
              {i}
            </Button>
          );
        }
      } else {
        visibleButtons.push(
          <Button
            key={1}
            variant="outlined"
            onClick={() => handlePageChange(1)}
            sx={{
              marginRight: "5px",
              marginLeft: "5px",
              width: "20px",
              height: "30px",
              backgroundColor: "#323232",
            }}
          >
            1
          </Button>
        );

        visibleButtons.push(
          <Button key="ellipsis-start" disabled>
            ...
          </Button>
        );

        const startPage = currentPage - Math.floor(ellipsisThreshold / 2);
        const endPage = currentPage + Math.floor(ellipsisThreshold / 2);

        for (let i = startPage; i <= endPage; i++) {
          visibleButtons.push(
            <Button
              key={i}
              variant={currentPage === i ? "contained" : "outlined"}
              onClick={() => handlePageChange(i)}
              sx={{
                marginRight: "5px",
                marginLeft: "5px",
                width: "20px",
                height: "30px",
                backgroundColor:
                  currentPage === i + 1 ? "#323232" : "#ffff",
              }}
            >
              {i}
            </Button>
          );
        }

        visibleButtons.push(
          <Button key="ellipsis-end" disabled>
            ...
          </Button>
        );

        visibleButtons.push(
          <Button
            key={totalPages}
            variant="outlined"
            onClick={() => handlePageChange(totalPages)}
            sx={{
              marginRight: "5px",
              marginLeft: "5px",
              width: "20px",
              height: "30px",
              backgroundColor: "#323232",
            }}
          >
            {totalPages}
          </Button>
        );
      }

      return visibleButtons;
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" marginTop={2}>
      <Box display="flex">
        <Box
          sx={{
            fontFamily: "Font1",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0em",
            color: "#323232",
          }}
        >
          {start} - {end} dari {data.length} produk
        </Box>
      </Box>
      <Box display="flex">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="contained"
          sx={{ backgroundColor: "#323232" }}
        >
          Previous
        </Button>
        {renderPageButtons()}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="contained"
          sx={{ backgroundColor: "#323232" }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
export default Pagination;
