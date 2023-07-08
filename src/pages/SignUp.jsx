import { useForm } from "react-hook-form";
import { FormWrapper } from "../components/form/FormWrapper";
import { RHFTextField } from "../components/form/RHFTextField";
import { Button, Card, Container, Grid, Stack } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignUp = () => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const SignUpSchema = Yup.object().shape({
    first_name: Yup.string().required("first name is required"),
    last_name: Yup.string().required("last name is required"),
    email: Yup.string().email("Enter a valid email").min(6).max(40),
    password: Yup.string().required("Password is required"),
  });

  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(SignUpSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Stack flex={2} justifyContent={"center"}>
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)} methods={methods}>
          <Card sx={{ p: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"first_name"}
                  type={"text"}
                  label={"First Name"}
                  autoComplete={"off"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"last_name"}
                  type={"text"}
                  label={"Last Name"}
                  autoComplete={"off"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"email"}
                  type={"text"}
                  label={"Email"}
                  autoComplete={"off"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                  autoComplete={"off"}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Register
                </Button>
              </Grid>
            </Grid>
          </Card>
        </FormWrapper>
      </Container>
    </Stack>
  );
};
