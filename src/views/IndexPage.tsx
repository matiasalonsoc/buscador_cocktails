import { useMemo } from "react";
import { DrinkCard } from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export const IndexPage = () => {
  const { recipes } = useAppStore();

  const hasDrinks = useMemo(() => recipes.drinks.length, [recipes]);

  return (
    <>
      <h1 className='text-6xl font-extrabold px-5'>Recetas</h1>

      {hasDrinks ? (
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 px-10 2xl:grid-cols-5 my-10 gap-10'>
          {recipes.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className='my-10 text-center text-2xl'>
          No hay resultados aún, utiliza el formulario para buscar recetas
        </p>
      )}
    </>
  );
};
