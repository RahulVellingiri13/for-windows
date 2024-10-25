import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./FormPage.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().matches(/^[A-Za-z]+$/, "Name must contain only letters, no spaces or digits").required("Name is required"),
  mobileNumber: Yup.string().matches(/^\d{10}$/, "Mobile number must be 10 digits without spaces or letters").required("Mobile number is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  pincode: Yup.string().matches(/^\d{6}$/, "Pincode must be 6 digits").required("Pincode is required"),
  address: Yup.string().required("Address is required"),
});

const FormPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryList = response.data.map(country => ({
          name: country.name.common,
          alpha2Code: country.cca2,
        })).sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };

    fetchCountries();
  }, []);


  const handleCountryChange = async (event) => {
    const selectedCountryName = event.target.value;
    setSelectedCountry(selectedCountryName);
    setStates([]); 
    setCities([]);

    try {
     
      const response = await axios.post("https://countriesnow.space/api/v0.1/countries/states", {
        country: selectedCountryName
      });
      const stateList = response.data.data.states || [];
      setStates(stateList.sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      console.error("Error fetching states", error);
    }
  };

 
  const handleStateChange = async (event) => {
    const selectedStateName = event.target.value;
    setSelectedState(selectedStateName);
    setCities([]);

    try {
     
      const response = await axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
        country: selectedCountry,
        state: selectedStateName
      });
      const cityList = response.data.data || [];
      setCities(cityList.sort((a, b) => a.localeCompare(b)));
    } catch (error) {
      console.error("Error fetching cities", error);
    }
  };

  const onSubmit = async (data) => {
    console.log("Form data", data);
    try {
      const response = await axios.post("http://localhost:3001/api/createForm", data);
      console.log("Response:", response.data);
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title">Fill the details below:</h2>

        {/* Name field */}
        <div className="form-row">
          <div className="form-group full-width">
            <label>Name *</label>
            <input type="text" name="name" placeholder="Enter name" {...register("name")} />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
        </div>

        {/* Mobile and Email fields */}
        <div className="form-row">
          <div className="form-group">
            <label>Mobile Number *</label>
            <input type="text" name="mobileNumber" placeholder="Enter your mobile number" {...register("mobileNumber")} />
            {errors.mobileNumber && <p className="error-message">{errors.mobileNumber.message}</p>}
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" placeholder="Enter your email" {...register("email")} />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
        </div>

        {/* Country and State dropdowns */}
        <div className="form-row">
          <div className="form-group">
            <label>Country *</label>
            <select name="country" {...register("country")} onChange={handleCountryChange}>
              <option value="">Select your Country</option>
              {countries.map(country => (
                <option key={country.alpha2Code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && <p className="error-message">{errors.country.message}</p>}
          </div>

          <div className="form-group">
            <label>State *</label>
            <select name="state" {...register("state")} onChange={handleStateChange}>
              <option value="">Select your State</option>
              {states.map(state => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state && <p className="error-message">{errors.state.message}</p>}
          </div>
        </div>

        {/* City and Pincode */}
        <div className="form-row">
          <div className="form-group">
            <label>City *</label>
            <select name="city" {...register("city")}>
              <option value="">Select your City</option>
              {cities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <p className="error-message">{errors.city.message}</p>}
          </div>

          <div className="form-group">
            <label>Pincode *</label>
            <input type="text" name="pincode" placeholder="Enter your pincode" {...register("pincode")} />
            {errors.pincode && <p className="error-message">{errors.pincode.message}</p>}
          </div>
        </div>

        {/* Address */}
        <div className="form-row">
          <div className="form-group full-width">
            <label>Address *</label>
            <textarea name="address" placeholder="Enter your address" {...register("address")}></textarea>
            {errors.address && <p className="error-message">{errors.address.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button className="submit-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormPage;