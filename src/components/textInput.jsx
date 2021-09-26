import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({ value, name }) => {
  return (
    <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
      <TextField
        fullWidth
        label={name}
        id="outlined-size-small"
        defaultValue=""
        size="small"
        value={value}
        name={name}
      />
    </div>
  );
};

export default TextInput;
