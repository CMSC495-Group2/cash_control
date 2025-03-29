import React,{useState} from "react";


function GetStartedForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // placeholder logic until backend exists
        console.log("Form Submitted: ", formData);
        alert(`Welcome, ${formData.name}!`)
    };

    return(
        
        <form className="get-started-form" onSubmit={handleSubmit}>
            <h2>Get Started!</h2>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required/>
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>
            </label>
            <button type="submit">Create Account</button>
        </form>
     
    );
}

export default GetStartedForm;