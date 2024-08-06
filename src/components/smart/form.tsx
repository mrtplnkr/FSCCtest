import { useFormik } from "formik";
import { ReusableButton } from "../dumb/reusableButton";
import { ReusableInput } from "../dumb/reusableInput";

interface SimpleFormProps {
  onSubmit: (email: string, password: string) => void;
}

export interface LoginFormData {
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
      alert(JSON.stringify(values, null, 2));
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
        <ReusableButton className="primary" type="submit">
          Login
        </ReusableButton>
      </form>
    </>
  );
}
