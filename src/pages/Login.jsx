import { useForm } from "react-hook-form";
import { FormWrapper } from "../components/form/FormWrapper";
import { RHFTextField } from "../components/form/RHFTextField";
import { Button, Card, Container, Grid, Stack } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").min(6).max(40),
    password: Yup.string().required("Password is required"),
  });

  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Stack>
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)} methods={methods}>
          <Card sx={{ p: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RHFTextField name={"email"} type={"text"} label={"Email"} />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Card>
        </FormWrapper>
      </Container>
    </Stack>
  );
};
