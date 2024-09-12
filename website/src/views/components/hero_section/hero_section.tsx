import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

interface Props {}

const ResponsiveImg = styled.img`
  height: auto;
  max-height: 100%;

  @media (max-width: 600px) {
    /* xs screens */
    max-height: 13px; /* Set a max-height for xs devices */
  }

  @media (min-width: 600px) {
    /* sm and larger screens */
    max-height: none; /* Remove max-height restriction */
  }
`;

function HeroSection(props: Props) {
  const {} = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: { xs: 10, sm: 20 } }}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        left={80}
        top={-40}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <img src={"images/icons/heart_one.svg"} />
      </Box>
      <Box
        position={"absolute"}
        right={450}
        top={20}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <img src={"images/icons/heart_two.svg"} />
      </Box>
      <Box
        position={"absolute"}
        left={-50}
        top={400}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <img src={"images/icons/heart_three.svg"} />
      </Box>
      <Box
        position={"absolute"}
        left={400}
        top={300}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <img src={"images/icons/heart_four.svg"} />
      </Box>
      <Box
        position={"absolute"}
        right={450}
        top={450}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <img src={"images/icons/heart_two.svg"} />
      </Box>
      <Grid lg={6} md={6} sm={12} xs={12} xl={6} sx={{ mt: { xs: 25, sm: 0 } }}>
        <Box display={"flex"} flexDirection={"column"} mx={isMobile ? 4 : 0}>
          <Box
            sx={{
              width: {
                xs: 100,
                sm: "auto",
              },
              mt: {
                xs: 10,
                sm: 10,
              },
            }}
            mt={100}
          >
            <ResponsiveImg
              src="images/icons/hero_section_text.svg"
              alt="Description"
            />
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                  lg: "3rem",
                  xl: "3rem",
                },
              }}
              fontWeight={600}
            >
              Uniting Souls Online
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography variant="body1">
              Discover Your Soulmate with Us, where Your Journey to Happily Ever
              After Starts Here
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"} mt={3}>
            <Box
              flex={1}
              sx={{
                display: {
                  xs: "none", // Hidden on extra small screens
                  sm: "flex",
                },
              }}
            >
              <FormControl fullWidth variant="outlined">
                <InputLabel>I’m looking for </InputLabel>
                <Select
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    color: "#DFE4EE",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE",
                    },
                  }}
                >
                  <MenuItem value={10}>xyz 1</MenuItem>
                  <MenuItem value={20}>xyz 2</MenuItem>
                  <MenuItem value={30}>xyz 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              flex={1}
              sx={{
                display: {
                  xs: "none", // Hidden on extra small screens
                  sm: "flex",
                },
              }}
            >
              <FormControl fullWidth variant="outlined">
                <InputLabel>Age From</InputLabel>
                <Select
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,

                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRadius: 0,
                    color: "#DFE4EE",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE",
                      borderRightWidth: 0,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE",
                    },
                  }}
                  labelId="select-filter-by-field-labe;"
                  id="select-filter-by-field"
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              flex={1}
              sx={{
                display: {
                  xs: "none", // Hidden on extra small screens
                  sm: "flex",
                },
              }}
            >
              <FormControl fullWidth variant="outlined">
                <InputLabel>Age To</InputLabel>
                <Select
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    color: "#828282",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE",
                      borderLeftWidth: 0,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#DFE4EE",
                    },
                    "& .MuiSelect-select": {
                      color: "#828282",
                    },
                    "&& .MuiMenuItem-root": {
                      color: "#828282",
                    },

                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeftWidth: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                </Select>
                <Box
                  sx={{
                    position: "absolute",
                    right: 10,
                    pointerEvents: "none",
                    zIndex: 10,
                    top: 15,
                    backgroundColor: "#F3E9FF",
                    borderRadius: 0.1,
                  }}
                >
                  <Typography
                    p={0.5}
                    variant="caption"
                    textTransform={"uppercase"}
                  >
                    To
                  </Typography>
                </Box>
              </FormControl>
            </Box>
            <Box flex={1} height={"100%"}>
              <Button
                variant="contained"
                sx={{
                  borderTopLeftRadius: {
                    xs: "8px",
                    sm: 0,
                  },
                  borderBottomLeftRadius: {
                    xs: "8px",
                    sm: 0,
                  },
                  height: {
                    xs: 45,
                    sm: 55,
                  },
                  xs: "auto",
                  sm: "100%",
                  minWidth: 120,
                }}
              >
                Find Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Box>
        <img
          height={isMobile ? 400 : 700}
          src={"images/icons/hero_section.png"}
          style={{
            position: "absolute",
            top: isMobile ? -100 : -200,
            zIndex: 99,
            right: isMobile ? 0 : -126,
          }}
        />
      </Box>
    </Grid>
  );
}

export default HeroSection;
