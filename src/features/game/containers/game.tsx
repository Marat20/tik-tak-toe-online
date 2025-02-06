"use client";

import { GameId } from "@/kernel/ids";
import { useGame } from "../model/use-game";
import { GameField } from "../ui/field";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";

export function Game({ gameId }: { gameId: GameId }) {
  const { game, isPending } = useGame(gameId);

  if (!game || isPending) {
    return <GameLayout status={"Загрузка"} />;
  }

  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}
