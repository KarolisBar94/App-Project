import React, { useSyncExternalStore } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
const SelectPage = () =>( 
  <Box width='250px'>
    <TextField label='Select country' select fullWidth>
      <MenuItem value='US'>United States</MenuItem>
      <MenuItem value='TR'>Turkey</MenuItem>
      <MenuItem value='UK'>United Kingdom</MenuItem>
      <MenuItem value='LT'>Lithuania</MenuItem>
    </TextField>
  </Box>
);

export default SelectPage;
