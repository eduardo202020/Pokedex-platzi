import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails } from "../hooks/getPokemons";
import { setLoading } from "./uiSlice";
import { IPokemon } from "../types";

export interface IInitialState {
  pokemons: IPokemon[];
  pokemonsSearched: IPokemon[];
  searchPokemon: string;
}

const initialState: IInitialState = {
  pokemons: [],
  pokemonsSearched: [],
  searchPokemon: "",
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsDetailed = await getPokemonDetails();
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);


export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    setSearch: (state, action) => {
      const pokemonSearch: string = action.payload.toLowerCase();
      if (pokemonSearch.length > 0) {
        const searchMatch = state.pokemons.filter((pokemon) => {
          return pokemon.name.includes(pokemonSearch);
        });
        state.pokemonsSearched = searchMatch;
        console.log(state.pokemonsSearched);
      } else {
        state.pokemonsSearched = [];
      }
    },
    setSearchValue: (state, action) => {
      state.searchPokemon = action.payload;
    },
  },
});

export const {
  setFavorite,
  setPokemons,
  setSearch,
  setSearchValue,
} = dataSlice.actions;

export default dataSlice.reducer;
