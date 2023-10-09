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
import { DateField } from '@mui/x-date-pickers/DateField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="mainContainer">

        <div className="leftBox">
          <div className="amenitiesContainer">
            <h2>
              <span className="spanTxt">Amenities</span>
            </h2>
            <div className="amenitiesBox">
              <ul className="amenities">
                <li className="amenity">WI-FI <img src="/wiFi.svg" alt="Wi-Fi Icon" /></li>
                <li className="amenity">Swimming Pool <img src="/pool.svg" alt="Pool Icon" /></li>
                <li className="amenity">Free Parking <img src="/parking.svg" alt="Parking Icon" /></li>
                <li className="amenity">Air Conditioning <img src="/airConditioner.svg" alt="AC Icon" /></li>
                <li className="amenity">Garden Area <img src="/gardenArea.svg" alt="Garden Icon" /></li>
                <li className="amenity">Scenic Balconies <img src="/balcony.svg" alt="Balcony Icon" /></li>
                <li className="amenity">Outdoor Play Area <img src="/personCelebrate.svg" alt="Play Area Icon" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div id="formComponent" className="rightBox">
          <div className="formContainer">
            <h2>
              <span className="spanTxt">Your Details</span>
            </h2>
            <form
              action="https://airform.io/silamimu@mailgolem.com"
              method="POST"
              className="formBody"
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="Name"
                    type="text"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="Phone Number"
                    type="number"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                </Grid>
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
                {/* <DateField
                    label="Check-in"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    format="DD-MM-YYYY"
                /> */}
                <Grid item xs={6}>
                  <InputLabel>Adults (12yr+)</InputLabel>
                  <Select
                    required
                    name="Adults"
                    native
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Childrens (Upto 12yr)</InputLabel>
                  <Select
                    required
                    name="Childrens"
                    native
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Select>
                </Grid>
              </Grid>
              <div className="btnWrapper">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
