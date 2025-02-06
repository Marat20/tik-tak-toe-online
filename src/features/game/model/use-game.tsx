import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { routes } from "@/kernel/routes";
import { useEventSource } from "@/shared/lib/sse/client";

export function useGame(gameId: GameId) {
  const { dataStream, isPending } = useEventSource<GameDomain.GameEntity>(
    routes.gameStream(gameId),
  );

  return {
    game: dataStream,
    isPending,
  };
}
