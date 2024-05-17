import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import Favorites from "./views/Favorites";
import { IndexPage } from "./views/IndexPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<IndexPage />} index />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
