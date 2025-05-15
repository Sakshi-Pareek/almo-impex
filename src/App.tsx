import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import FactoryPage from "./pages/FactoryPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#056773]">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="manufacturing" element={<ManufacturingPage />} />
        <Route path="factory" element={<FactoryPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
