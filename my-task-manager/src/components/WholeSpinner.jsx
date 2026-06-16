const WholeSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <div className="text-center">
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "8px solid rgba(255,255,255,0.3)",
            borderTop: "8px solid #fff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto",
          }}
        ></div>

        <h4
          className="mt-4 text-white fw-bold"
          style={{
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        >
          Loading Tasks...
        </h4>

        <style>
          {`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            @keyframes pulse {
              0%, 100% {
                opacity: 0.5;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.1);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default WholeSpinner;