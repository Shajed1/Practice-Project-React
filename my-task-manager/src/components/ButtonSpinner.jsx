const ButtonSpinner = () => {
  return (
    <button className="btn btn-primary w-100" disabled>
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
      ></span>

    </button>
  );
};

export default ButtonSpinner;