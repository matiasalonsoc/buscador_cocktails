import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";

export const Layout = () => {
  const { loadFromStorage } = useAppStore();

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      {/* Contenido que aparece en TODAS las paginas */}
      <Header />

      <main className=' container mx-auto py-16'>
        {/* Contenido del componente ACTUAL */}
        <Outlet />
      </main>

      <Modal />
      <ToastContainer />
    </>
  );
};
