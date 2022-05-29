import React from "react";

const Payments = ({
  formData = { formData },
  setFormData = { setFormData },
}) => {
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Name On Card..."
        value={formData.cardName}
        onChange={(e) =>
          setFormData({
            ...formData,
            cardName: e.target.value,
          })
        }
      />
      <input
        type="number"
        placeholder="16 digit..."
        value={formData.digit}
        onChange={(e) =>
          setFormData({
            ...formData,
            digit: e.target.value,
          })
        }
      />
      <input
        type="number"
        placeholder="CVV..."
        value={formData.cvv}
        onChange={(e) =>
          setFormData({
            ...formData,
            cvv: e.target.value,
          })
        }
      />
    </div>
  );
};

export default Payments;
