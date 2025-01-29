export type GameEntity =
  | GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrawEntity;

export type GameIdleEntity = {
  id: string;
  player: PlayerEntity[];
  status: "idle";
};

export type GameInProgressEntity = {
  id: string;
  player: PlayerEntity[];
  field: Field[];
  status: "inProgress";
};

export type GameOverEntity = {
  id: string;
  player: PlayerEntity[];
  field: Field[];
  status: "gameOver";
  winner: PlayerEntity;
};

export type GameOverDrawEntity = {
  id: string;
  player: PlayerEntity[];
  field: Field[];
  status: "gameOverDraw";
};

export type PlayerEntity = {
  id: string;
  login: string;
  rating: number;
};

export type Field = Cell[];
export type Cell = GameSymbol | null;
export type GameSymbol = string;
