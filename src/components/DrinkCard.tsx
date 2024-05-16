import { InfoFilter } from "../types";

type DrinkCardProps = {
  drink: InfoFilter;
};

export const DrinkCard = ({ drink }: DrinkCardProps) => {
  return (
    <div className='  rounded-lg border shadow-2xl'>
      <div className='overflow-hidden'>
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className='hover:scale-125 transition-all hover:rounded-t-lg hover:rotate-2 rounded-t-lg'
        />
      </div>

      <div className='p-5'>
        <h2 className='text-2xl truncate font-black'>{drink.strDrink}</h2>
        <button
          type='button'
          className='bg-orange-400 transition-colors rounded-xl hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg'
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
};
