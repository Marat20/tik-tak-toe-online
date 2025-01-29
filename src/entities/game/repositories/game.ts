import { prisma } from "@/shared/lib/db";
import { Game, User } from "@prisma/client";
import { GameEntity } from "../domain";

async function gamesList(): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    include: {
      winner: true,
      players: true,
    },
  });

  return games.map(dbGameToGameEntity);
}

function dbGameToGameEntity(game: Game & { players: User[] }): GameEntity {}

export const gameRepository = { gamesList };
