import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemon } from "../hooks/getPokemons";
import { setLoading } from "./uiSlice";
import { IPokemon } from "../types";

export interface IInitialState {
  pokemons: IPokemon[];
  pokemonDetail: IPokemon;
  pokemonsSearched: IPokemon[];
  searchPokemon: string;
}

const initialState: IInitialState = {
  pokemons: [],
  pokemonDetail: {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    past_types: [],
    species: {
      name: "",
      url: "",
    },
    sprites: {
      back_default: "",
      back_female: null,
      back_shiny: "",
      back_shiny_female: null,
      front_default: "",
      front_female: null,
      front_shiny: "",
      front_shiny_female: null,
    },
    stats: [],
    types: [],
    weight: 0,
    favorite: false,
  },
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

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonWithDetails",
  async (pokemon, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonDetail = await getPokemon(pokemon);
    dispatch(setPokemon(pokemonDetail));
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
    setPokemon: (state, action) => {
      state.pokemonDetail = action.payload;
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
  setPokemon,
  setSearch,
  setSearchValue,
} = dataSlice.actions;

export default dataSlice.reducer;
