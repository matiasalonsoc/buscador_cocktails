import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppStore } from "../stores/useAppStore";

export const Header = () => {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  const { pathname } = useLocation();
  const { categories, fetchCategories, searchRecipes } = useAppStore();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(searchFilters).includes("")) {
      toast.warn("Debes rellenar ambos campos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    searchRecipes(searchFilters);
  };

  return (
    <header
      className={` ${
        isHome ? "bg-header bg-center bg-cover" : "bg-slate-900"
      } `}
    >
      <div className=' mx-auto container px-5 py-16'>
        <div className=' flex justify-between items-center'>
          <div>
            <img className=' w-32' src='/logo.svg' alt='logotipo' />
          </div>

          <nav className=' flex gap-3'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              inicio
            </NavLink>
            <NavLink
              to='/favorites'
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            onSubmit={handleSubmit}
            className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
          >
            <div className='space-y-4'>
              <label
                htmlFor='ingredient'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Nombre o Ingredientes
              </label>

              <input
                onChange={handleChange}
                value={searchFilters.ingredient}
                id='ingredient'
                type='text'
                name='ingredient'
                className='p-3 w-full rounded-lg focus:outline-none'
                placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'
              />
            </div>
            <div className='space-y-4'>
              <label
                htmlFor='category'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Categoría
              </label>

              <select
                onChange={handleChange}
                value={searchFilters.category}
                id='category'
                name='category'
                className='p-3 w-full rounded-lg focus:outline-none'
              >
                <option value=''>-- Seleccione --</option>
                {categories.drinks.map((category) => (
                  <option
                    value={category.strCategory}
                    key={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type='submit'
              value='Buscar Recetas'
              className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
            />
          </form>
        )}
      </div>
    </header>
  );
};
