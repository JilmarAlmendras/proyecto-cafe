import React from "react";

export function MainLoader() {
  const loaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "hsl(30, 30%, 20%)", // Fondo café oscuro
    fontFamily: "Arial, sans-serif", // Fuente legible
  };

  const textStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "hsl(30, 40%, 35%)", // Color de texto café oscuro
    animation: "pulse 2s infinite, move 2s infinite",
  };

  return (
    <div style={loaderStyle}>
      <p style={textStyle}>Cargando...</p>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        @keyframes move {
          0% { transform: translateY(0); color: hsl(30, 40%, 35%); }
          50% { transform: translateY(-10px); color: hsl(30, 30%, 45%); }
          100% { transform: translateY(0); color: hsl(30, 40%, 35%); }
        }
      `}</style>
    </div>
  );
}
