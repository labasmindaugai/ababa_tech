import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import styles from './log-in.module.css';

type LogInInformation = {
    email: String;
    password: String;
};

const LogInPage: React.FC = () => {

    const initialValues = {
        email: '',
        password: '',
};

const validationSchema =yup.object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string()
    .required("Password is required"),
});

const onSubmit = async (information: LogInInformation) => {
    console.log('submiting:', information);
};

const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    errors,
    touched,
    isValid,
    dirty,
} = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
});

return (
    <div className={styles.log_in_container}>
    <div className={styles.box}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.form_input_container}>
                <label htmlFor="email">Email</label>
                <input 
                className={styles.form}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                autoComplete="email"
                autoFocus
                />
                {touched.email && Boolean(errors.email) && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.form_input_container}>
                <label htmlFor="password">Password</label>
                <input 
                className={styles.form}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                />
                {touched.password && Boolean(errors.password) && <span className={styles.error}>{errors.password}</span>}
            </div>
            <input type="submit" value="Log In" disabled={!(isValid && dirty)} />
        </form>
    </div>
    </div>
);
};

export default LogInPage;
