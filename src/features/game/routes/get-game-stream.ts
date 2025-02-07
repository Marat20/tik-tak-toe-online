import { getGameById, surrenderGame } from "@/entities/game/server";
import { getCurrentUser } from "@/entities/user/server";
import { GameId } from "@/kernel/ids";
import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";
import { gameEvent } from "../services/game-events";

export async function getGameStream(
  req: NextRequest,
  { params }: { params: Promise<{ id: GameId }> },
) {
  const { id } = await params;

  const game = await getGameById(id);
  const user = await getCurrentUser();

  if (!game || !user) {
    return new Response(`Game not found`, {
      status: 404,
    });
  }

  const { addCloseListener, response, write } = sseStream(req);

  write(game);

  const unwatch = await gameEvent.addListener(game.id, async (event) => {
    write(event.data);

    const result = await surrenderGame(id, user);

    if (result.type === "right") {
      gameEvent.emit(result.value);
    }
  });

  addCloseListener(unwatch);

  return response;
}
