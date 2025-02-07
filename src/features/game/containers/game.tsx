import { getGameById, startGame } from "@/entities/game/server";
import { getCurrentUser } from "@/entities/user/server";
import { GameId } from "@/kernel/ids";
import { routes } from "@/kernel/routes";
import { redirect } from "next/navigation";
import { GameClient } from "./game-client";

export async function Game({ gameId }: { gameId: GameId }) {
  const user = await getCurrentUser();

  let game = await getGameById(gameId);

  if (!game || !user) {
    redirect(routes.main());
  }

  if (user) {
    const startGameResult = await startGame(gameId, user);

    if (startGameResult.type === "right") {
      game = startGameResult.value;
    }
  }

  return <GameClient defaultGame={game} player={user} />;
}
