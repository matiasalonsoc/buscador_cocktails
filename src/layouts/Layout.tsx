import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      {/* Contenido que aparece en TODAS las paginas */}
      <Header />

      <main className=' container mx-auto py-16'>
        {/* Contenido del componente ACTUAL */}
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};
