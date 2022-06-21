export type Position = {
  x: PositionValue;
  y: PositionValue;
}

export type PositionValue = number | 'center';

export type SvgAttrsParam = {
  [key: string]: unknown
}

export type FontParam = {
  size?: number;
  filePath?: string;
};
