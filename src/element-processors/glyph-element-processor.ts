import ElementProcessor from './element-processor';
import {GlyphAssetElementParam} from '../types/asset-element';
import * as svgson from 'svgson';
import fs from 'fs';
import {v4 as uuidv4} from 'uuid';
import logger from '../lib/logger';
import elementId from '../lib/element-id';

export default class GlyphElementProcessor extends ElementProcessor {
  async process(): Promise<void> {
    const elementParams = this.element.params as GlyphAssetElementParam;

    svgson.parseSync(fs.readFileSync(elementParams.filePath, 'utf8'));

    const glyphSvg = svgson.parseSync(fs.readFileSync(elementParams.filePath, 'utf8'));

    delete glyphSvg.attributes.xmlns;

    glyphSvg.name = 'g';

    const glyphId = uuidv4();

    glyphSvg.attributes.id = glyphId;

    const glyphScale = elementParams.scale ?? 1,
      glyphWidthNew = parseFloat(glyphSvg.attributes.width) * glyphScale,
      glyphHeightNew = parseFloat(glyphSvg.attributes.height) * glyphScale,
      positionX = this.calculateX(glyphWidthNew),
      positionY = this.calculateY(glyphHeightNew);

    logger.debug(`Adding glyph with dimensions: ${glyphWidthNew}*${glyphHeightNew}`);

    this.container.svg(svgson.stringify(glyphSvg));

    const el = this.container.find(elementId(glyphId))[0];

    el.transform({
      translate: [positionX, positionY],
      origin: 'top left',
      scale: glyphScale
    });
  }
}
