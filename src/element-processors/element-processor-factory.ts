import ElementProcessor from './element-processor';
import {AssetElement} from '../types/asset-element';
import FlattenedTextElementProcessor from './flattened-text-element-processor';
import NullElementProcessor from './null-element-processor';
import * as SVG from '@svgdotjs/svg.js';
import GlyphElementProcessor from './glyph-element-processor';

export default function elementProcessorFactory(element: AssetElement, container: SVG.Container): ElementProcessor {
  let elementProcessor: ElementProcessor = new NullElementProcessor(element, container);

  if (element.type === 'flattenedText') {
    elementProcessor = new FlattenedTextElementProcessor(element, container);
  }

  if (element.type === 'glyph') {
    elementProcessor = new GlyphElementProcessor(element, container);
  }

  return elementProcessor;
}
