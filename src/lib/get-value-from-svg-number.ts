import * as SVG from '@svgdotjs/svg.js';
import logger from './logger';

export default function getValueFromSvgNumber(number: SVG.NumberAlias): number {
  const num = (number as SVG.Number).toString();
  logger.trace(`Got number ${num} from SVG.Number: ${number}`);
  return parseFloat(num);
}
