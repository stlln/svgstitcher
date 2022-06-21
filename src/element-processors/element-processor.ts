import {AssetElement} from '../types/asset-element';
import * as SVG from '@svgdotjs/svg.js';
import logger from '../lib/logger';
import getValueFromSvgNumber from '../lib/get-value-from-svg-number';

export default abstract class ElementProcessor {
  constructor(protected element: AssetElement, protected container: SVG.Container) {
  }

  abstract process(): Promise<void>;

  static calculateCenter(containerSize: number, elementSize: number): number {
    logger.trace(`Calculating center elementSize: ${elementSize} in containerSize: ${containerSize}`);
    return (containerSize - elementSize) / 2;
  }

  protected calculateX(elementWidth: number): number {
    return (this.element.params.position.x === 'center')
      ? ElementProcessor.calculateCenter(getValueFromSvgNumber(this.container.width()), elementWidth)
      : this.element.params.position.x;
  }

  protected calculateY(elementHeight: number): number {
    return (this.element.params.position.y === 'center')
      ? ElementProcessor.calculateCenter(getValueFromSvgNumber(this.container.height()), elementHeight)
      : this.element.params.position.y;
  }
}
