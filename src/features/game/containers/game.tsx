import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { GameField } from "../ui/field";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";

export function Game({ gameId }: { gameId: GameId }) {
  const game: GameDomain.GameEntity = {
    id: "1",
    creator: {
      id: "1",
      login: "test",
      rating: 1000,
    },
    status: "idle",
    field: Array(9).fill(null),
  };

  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}
