import {AssetBackground} from '../types/asset-background';
import * as SVG from '@svgdotjs/svg.js';

export default abstract class BackgroundProcessor {
  constructor(protected assetBackground: AssetBackground, protected container: SVG.Container) {
  }

  abstract process(): Promise<void>;
}
