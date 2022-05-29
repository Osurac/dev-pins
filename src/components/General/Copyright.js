import React from "react";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Copyright = (props) => (
    <div className="">
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
);
export {Copyright};

