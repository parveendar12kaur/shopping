import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


const Filter = ({classes, filterData, onFilterChange}) => {

    let attrs;
    if (filterData.multiple) {
        attrs = {
            multiple: filterData.multiple,
            renderValue: selected => ''
        }
    };

    const descLabel = (filterData.filterId === 'year')?`${filterData.filterId}Nbr`:`${filterData.filterId}Desc`
    const valueLabel = (filterData.filterId === 'year')?`${filterData.filterId}Desc`:`${filterData.filterId}Nbr`

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={filterData.filterId}>{filterData.title}</InputLabel>
            <Select
                value={filterData.selectedOption}
                disabled={filterData.disabled}
                onChange={(e) => onFilterChange(filterData.filterId, e.target.value)}
                input={<Input id={filterData.filterId} />}
                MenuProps={filterData.MenuProps}
                {...attrs}
            >
                {filterData.options.map((name, index) => (
                    <MenuItem key={index} value={name[valueLabel]}>
                    
                    <ListItemText primary={name[descLabel]} />
                    {
                        (filterData.multiple) ? <Checkbox checked={filterData.selectedOption.indexOf(name[valueLabel]) > -1} /> : null
                    }
                    
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

Filter.propTypes = {
    classes: PropTypes.object.isRequired,
    filterData: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func
}

export default Filter;
