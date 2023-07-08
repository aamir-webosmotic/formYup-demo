import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const RHFTextField = ({ name, onChange, type, ...others }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            onChange={(e) => {
              if (onChange) onChange();
              field.onChange(e.target.value);
            }}
            error={!!error}
            helperText={error?.message}
            {...others}
            type={type}
            fullWidth
          />
        );
      }}
    />
  );
};
