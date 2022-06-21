import ElementProcessor from './element-processor';
import {FlattenedTextAssetElementParam} from '../types/asset-element';
import * as SVG from '@svgdotjs/svg.js';
import logger from '../lib/logger';
import {SvgFlattenedText, SvgFlattenedTextParams} from '../lib/svg-flattened-text';

export default class FlattenedTextElementProcessor extends ElementProcessor {
  async process(): Promise<void> {
    const elementParams = this.element.params as FlattenedTextAssetElementParam;

    const svgFlattenedTextParams: SvgFlattenedTextParams = {
      font: elementParams.font,
      svgAttrs: elementParams.svgAttrs
    };

    const flattenedText = new SvgFlattenedText(elementParams.text, svgFlattenedTextParams);

    logger.debug(`Adding flattened text with dimensions: ${flattenedText.width}*${flattenedText.height}`);

    const svgPath = new SVG.Path(flattenedText.path).attr({...elementParams.svgAttrs});

    const positionX = this.calculateX(flattenedText.width),
      positionY = this.calculateY(flattenedText.height);

    svgPath.move(positionX, positionY);

    svgPath.addTo(this.container);
  }
}
