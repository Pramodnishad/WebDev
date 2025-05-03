import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) =>
      setTimeout(resolve, 5000)
    )
    const fullName = `${data?.firstName} ${data?.lastName}`
    console.log(`Submitted form with full name is ${fullName} and email is ${data?.email}`)
    // alert("Form submitted successfully!");
    reset()
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "50px",
      backgroundColor: "#f2f2f2",

    }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          minWidth: "400px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Basic Details</h2>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold" }}>First Name</label>
          <input style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginTop: "5px",
            border: errors.firstName ? "1px solid red" : "1px solid #ccc",
            borderRadius: "5px"
          }}
            {...register('firstName', { required: "First Name is required" })}
          />
          {errors.firstName && (
            <p style={{ color: 'red', fontSize: "12px" }}>{errors.firstName.message}</p>
          )}

        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold" }}>Last Name</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginTop: "5px",
              border: errors.lastName ? "1px solid red" : "1px solid #ccc",
              borderRadius: "5px"
            }}
            {...register('lastName', {
              required: "Last Name is required",
              // pattern: {
              //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
              //   message: "Must contain 8+ characters with uppercase, lowercase, number & special char"
              // }
            })}
          />
          {errors.lastName && (
            <p style={{
              color: 'red', fontSize: "12px"
            }}>{errors.lastName.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold" }}>Email</label>
          <input
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginTop: "5px",
              border: errors.email ? "1px solid red" : "1px solid #ccc",
              borderRadius: "5px"
            }}
            {...register('email', { required: "Email is required" })}
          />
          {errors.email && (
            <p style={{
              color: 'red', fontSize: "12px"
            }}>{errors.email.message}</p>
          )}
        </div>
        <input
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />


      </form>
    </div>
  );
};

export default App;
