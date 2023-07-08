import { FormProvider } from "react-hook-form";

export const FormWrapper = ({ onSubmit, methods, style, children }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} style={style}>
        {children}
      </form>
    </FormProvider>
  );
};
