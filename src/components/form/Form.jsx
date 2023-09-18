import React from "react";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import "./Form.css";

const Form = () => {

  return (
    <>
      <div className="formContainer">
        <form action="https://airform.io/silamimu@mailgolem.com" method="POST" className="formBody" >
          <TextField
            required
            name="Name"
            type="text"
            label="Name"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            required
            name="Phone Number"
            type="number"
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                name="City"
                type="text"
                label="City"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                name="Age"
                type="text"
                label="Age"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </Grid>
          </Grid>
          <div className="btnWrapper">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >Submit
          </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
