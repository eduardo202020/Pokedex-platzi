import { useDispatch } from "react-redux";
import { ReactComponent as StartIcon } from "../assets/star-icon.svg";
import { setFavorite } from "../slices/dataSlice";

interface IFavoriteBtn {
  isFavorite: boolean;
  id: number;
}

export const FavoriteBtn = ({ isFavorite, id }: IFavoriteBtn) => {
  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <button>
      <StartIcon
        className={`w-10 h-10 cursor-pointer hover:text-yellow-300 transition-colors ${
          isFavorite ? "text-yellow-300" : "text-slate-300"
        }`}
        onClick={handleOnFavorite}
      />
    </button>
  );
};
