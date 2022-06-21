import NullBackgroundProcessor from './null-background-processor';
import BackgroundProcessor from './background-processor';
import {AssetBackground} from '../types/asset-background';
import * as SVG from '@svgdotjs/svg.js';
import ShapeBackgroundProcessor from './shape-background-processor';

export default function backgroundProcessorFactory(assetBackground: AssetBackground, container: SVG.Container): BackgroundProcessor {
  let backgroundProcessor: BackgroundProcessor = new NullBackgroundProcessor(assetBackground, container);

  if (assetBackground.type === 'shape') {
    backgroundProcessor = new ShapeBackgroundProcessor(assetBackground, container);
  }

  return backgroundProcessor;
}
