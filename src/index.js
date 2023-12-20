import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Form from "./Form";
import Header from "./Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App/Header/Form bileşenlerine ayırın, kendi adlarıyla ayrı dosyalara koyun
function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <Form />
    </div>
  );
}
