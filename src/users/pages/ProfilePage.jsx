import { Box, Container, Grid, TextField } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export default function ProfilePage() {
  const { user } = useContext(UserContext);
//   TODO get user data
//   const userData = getUserData(user._id);
  

  if (!user) {
    return <></>;
  }

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        autoComplete="off"
        noValidate
        sx={{ mt: 2, p: { xs: 1, sm: 2 }, maxWidth: "800px" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={user.first}
              fullWidth
              name="first"
              label="first name"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="middle"
              label="middle name"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="last"
              label="last name"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="phone"
              label="phone"
              type="phone"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="email"
              label="email"
              type="email"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="password"
              label="password"
              type="password"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="url"
              label="image url"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="alt"
              label="image alt"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="state"
              label="state"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="country"
              name="country"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="city" label="city" disabled sm={6} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="street" label="street" disabled sm={6} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="houseNumber"
              label="house Number"
              type="number"
              disabled
              sm={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="zip"
              label="zip"
              disabled
              sm={6}
              required={false}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
    // </Form>
  );
}
