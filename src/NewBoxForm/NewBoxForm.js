import { useState } from "react";

function NewBoxForm({ addBox }) {
    const INITIAL_STATE = {
        color: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    // Form data change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">
                Color:
                <input
                    type="text"
                    name="color"
                    id="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="width">
                Width:
                <input
                    type="number"
                    name="width"
                    id="width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="height">
                Height:
                <input
                    type="number"
                    name="height"
                    id="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewBoxForm;