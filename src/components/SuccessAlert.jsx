import React from "react";
import { CheckCircle } from "lucide-react";
import "./Alert.css";

const SuccessAlert = ({ children }) => {
  return (
    <div className="alert-success">
      <CheckCircle size={20} className="alert-icon" />
      <span>{children}</span>
    </div>
  );
};

export default SuccessAlert;