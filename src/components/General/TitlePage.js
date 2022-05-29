import React from "react";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const TitlePage = (props) => (
    <div className="p-4">
    <Typography variant="h5" gutterBottom component="div">
        {props.children}
      </Typography>
      <Divider />
    </div>
);
export {TitlePage};