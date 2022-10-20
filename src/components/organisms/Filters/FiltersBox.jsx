import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Slider,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { addProducts } from "../../../store/reducers/productsSlice";

const ThemedCheckbox = ({ onChange }) => {
  return (
    <Checkbox
      onChange={onChange}
      sx={{
        color: "#2a254b",
        "&.Mui-checked": {
          color: "#2a254b",
        },
      }}
    />
  );
};

const FiltersBox = (props) => {
  const {
    filter,
    setFilter,
    onClick,
    productCategoryList,
    sizeList,
    colorList,
  } = props;
  const [priceRange, setPriceRange] = useState({ range: [0, 100] });
  const dispatch = useDispatch();
  const styleH3 = {
    fontFamily: ["Clash Display", "sans-serif"],
    color: "#2a254b",
    fontWeight: "400",
    fontSize: "20px",
    marginTop: "0",
    marginBottom: "10px",
  };

  const styleCheckboxLabel = {
    fontFamily: ["Satoshi", "sans-serif"],
    color: "#2a254b",
    fontSize: "16px",
  };

  const valueLabelFormat = (value) => {
    let res = value * 10000;
    return res;
  };

  return (
    <Box
      sx={{
        maxWidth: "270px",
        ...props.sx,
      }}
    >
      <Stack spacing={props.gap ? props.gap : 2}>
        {/* Product type filter */}
        <FormControl>
          <h3 style={styleH3}>Category</h3>
          {productCategoryList?.map(
            (item, index) =>
              item.active && (
                <FormControlLabel
                  key={item.id}
                  onChange={(event) =>
                    event.target.checked
                      ? setFilter((filter) => ({
                          ...filter,
                          category: [...filter.category, item.name],
                        }))
                      : setFilter((filter) => ({
                          ...filter,
                          category: filter.category.filter(
                            (item2) => item.name !== item2
                          ),
                        }))
                  }
                  control={<ThemedCheckbox />}
                  label={<span style={styleCheckboxLabel}>{item.name}</span>}
                />
              )
          )}
        </FormControl>

        {/* Price range filter */}
        <FormControl>
          <h3 style={styleH3}>Price</h3>
          <Box
            sx={{
              paddingX: "10px",
            }}
          >
            <Slider
              sx={{
                color: "#2a254b",
                "&.MuiSlider-root": {
                  paddingY: "10px",
                },
              }}
              value={priceRange.range}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              onChange={
                (e, newValue) => {
                  setPriceRange({ range: newValue });
                  setFilter((filter) => ({
                    ...filter,
                    price: priceRange,
                  }));
                }
                // console.log(newValue)
              }
              size="small"
              valueLabelDisplay="auto"
              // defaultValue={[0, 2000000]}
            />
          </Box>
        </FormControl>

        {/* Color filter */}
        <FormControl>
          <h3 style={styleH3}>Color</h3>
          {colorList.map((item, index) => (
            <FormControlLabel
              key={index}
              control={<ThemedCheckbox />}
              onChange={(event) =>
                event.target.checked
                  ? setFilter((filter) => ({
                      ...filter,
                      color: [...filter.color, item],
                    }))
                  : setFilter((filter) => ({
                      ...filter,
                      color: filter.color.filter((item2) => item !== item2),
                    }))
              }
              label={<span style={styleCheckboxLabel}>{item}</span>}
            />
          ))}
        </FormControl>

        {/* Size filter */}
        <FormControl>
          <h3 style={styleH3}>Size</h3>
          {sizeList.map((item, index) => (
            <FormControlLabel
              key={index}
              control={<ThemedCheckbox />}
              onChange={(event) =>
                event.target.checked
                  ? setFilter((filter) => ({
                      ...filter,
                      sizes: [...filter.sizes, item],
                    }))
                  : setFilter((filter) => ({
                      ...filter,
                      sizes: filter.sizes.filter((item2) => item !== item2),
                    }))
              }
              label={<span style={styleCheckboxLabel}>{item}</span>}
            />
          ))}
        </FormControl>
        <FormControl>
          <Button onClick={onClick} variant="contained">
            Filter
          </Button>
          <Button
            sx={{ marginTop: "10px" }}
            variant="outlined"
            onClick={async () => {
              const q = query(collection(db, "products"));
              const querySnapshot = await getDocs(q);
              let res = [];
              querySnapshot.forEach((doc) => {
                res.push({ data: doc.data(), id: doc.id });
              });
              dispatch(addProducts(res));
            }}
          >
            Reset filter
          </Button>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default FiltersBox;
