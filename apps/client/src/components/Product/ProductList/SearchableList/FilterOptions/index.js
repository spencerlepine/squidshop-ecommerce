import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useStyles from '../styles.js';

const sortOptions = [
  "SORT BY",
  "PRICE",
  "NAME",
  "RATING",
  "POPULARITY"
];

const sortFunctions = {
  "SORT BY": () => 0,
  "NAME": (sortAdjustment, productA, productB) => {
    return (productA.title.localeCompare(productB.title)) * sortAdjustment
  },
  "RATING": (sortAdjustment, productA, productB) => {
    return (productA.rating_rate - productB.rating_rate) * sortAdjustment
  },
  "POPULARITY": (sortAdjustment, productA, productB) => {
    return (productA.rating_count - productB.rating_count) * sortAdjustment
  },
  "PRICE": (sortAdjustment, productA, productB) => {
    return (productA.price - productB.price) * sortAdjustment
  }
}

const orderOptions = [
  "ORDER BY",
  "ASC",
  "DESC"
];

const orderAdjustments = {
  "SORT BY": 0,
  "ASC": -1,
  "DESC": 1
};

const FilterOptions = ({ sortOption, orderOption, setOrderOption, setSortOption, inSearchMode, setFilteredProducts }) => {
  const classes = useStyles();

  const handleSortProducts = () => {
    setFilteredProducts((prevProducts) => {
      const newList = prevProducts.slice()
      return newList.sort((productA, productB) => (
        sortFunctions[sortOption](orderAdjustments[orderOption], productA, productB)
      ))
    })
  }

  const handleChange = (setState, newValue) => {
    setState(newValue.target.value)
    handleSortProducts()
  };
  const queryTextStyle = {
    margin: 0,
    display: 'flex',
    position: 'absolute',
    top: '50%',
    '-ms-transform': 'translateY(-50%)',
    transform: 'translateY(-50%)',
    marginRight: 'auto',
    left: '5em',
  }

  if (inSearchMode) {
    return (
      <Box sx={{ minWidth: 100 }} style={{ position: "relative" }}>
        <div style={queryTextStyle}>
          <FilterAltIcon />
          <Typography variant="body1" color="p">{inSearchMode}</Typography>
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto', width: 'fit-content' }}>
          <InputLabel id="demo-simple-select-label" style={{ margin: 'auto 0.5em' }}>Sort</InputLabel>
          <Select
            className={classes.orderOption}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortOption}
            label="sortOption"
            onChange={(v) => handleChange(setSortOption, v)}
          >
            {sortOptions.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>

          <InputLabel id="demo-simple-select-label" style={{ margin: 'auto 0.5em' }}>Order</InputLabel>
          <Select
            className={classes.orderOption}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={orderOption}
            label="orderOption"
            onChange={(v) => handleChange(setOrderOption, v)}
          >
            {orderOptions.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </div>
      </Box>
    )
  }
  return <></>
}


export default FilterOptions;
