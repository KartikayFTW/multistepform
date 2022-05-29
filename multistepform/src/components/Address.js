import React from "react";

const Address = ({ formData, setFormData }) => {
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Country..."
        value={formData.country}
        onChange={(e) =>
          setFormData({
            ...formData,
            country: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="State..."
        value={formData.state}
        onChange={(e) =>
          setFormData({
            ...formData,
            state: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="District..."
        value={formData.district}
        onChange={(e) =>
          setFormData({
            ...formData,
            district: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="City..."
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
      />
    </div>
  );
};

export default Address;
