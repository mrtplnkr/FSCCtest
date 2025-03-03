import { useFormik } from "formik";
import { ReusableButton } from "../dumb/reusableButton";
import { ReusableInput } from "../dumb/reusableInput";

interface SimpleFormProps {
  onSubmit: (email: string, password: string) => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export function SimpleForm(props: SimpleFormProps) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: LoginFormData) => {
      props.onSubmit(values.email, values.password);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">
            <ReusableInput
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <ReusableInput
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              required
            />
          </label>
        </div>
        <ReusableButton
          disabled={!formik.dirty && formik.isValid}
          className="primary"
          type="submit"
        >
          Login
        </ReusableButton>
      </form>
    </>
  );
}
