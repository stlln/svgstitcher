import BackgroundProcessor from './background-processor';
import {ShapeBackgroundParams} from '../types/asset-background';
import * as SVG from '@svgdotjs/svg.js';

function svgJsShapeFactory(shapeName: string): SVG.Shape {
  let svgJsShape: SVG.Shape = new SVG.Rect();

  if (shapeName === 'circle') {
    svgJsShape = new SVG.Circle();
  }

  if (shapeName === 'rect') {
    svgJsShape = new SVG.Rect();
  }

  return svgJsShape;
}

export default class ShapeBackgroundProcessor extends BackgroundProcessor {
  async process(): Promise<void> {
    const assetBackgroundParams = this.assetBackground.params as ShapeBackgroundParams;

    const bgShape = svgJsShapeFactory(assetBackgroundParams.shape);

    bgShape.attr(assetBackgroundParams.svgAttrs);

    bgShape.addTo(this.container);
  }

}
