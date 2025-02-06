import { GameId } from "./ids";

export const routes = {
  signIn: () => `/sign-in`,
  signOut: () => `/sign-out`,
  signUp: () => `/sign-up`,
  game: (gameId: GameId) => `/game/${gameId}`,
  gameStream: (gameId: GameId) => `/game/${gameId}/stream`,
};
