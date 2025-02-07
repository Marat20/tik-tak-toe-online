import { GameId } from "@/kernel/ids";
import { left, right } from "@/shared/lib/either";
import { PlayerEntity } from "../domain";
import { gameRepository } from "../repositories/game";
import { gameEvents } from "./game-events";

export async function startGame(gameId: GameId, player: PlayerEntity) {
  const game = await gameRepository.getGame({ id: gameId });

  if (!game) {
    return left("game-not-found");
  }

  if (game.status !== "idle") {
    return left("game-status-not-idle");
  }

  if (game.creator.id === player.id) {
    return left("creator-cannot-start-game");
  }

  const newGame = await gameRepository.startGame(gameId, player);

  await gameEvents.emit({
    type: "game-changed",
    data: newGame,
  });

  return right(newGame);
}
