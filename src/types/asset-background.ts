import {SvgAttrsParam} from './asset-element-params';

export type AssetBackground = TransparentBackground | SolidBackground | ShapeBackground

type AssetBackgroundType<typeName, typeParams> = {
  type: typeName;
  params: typeParams;
}

export type ShapeBackgroundParams = {
  shape: 'circle' | 'rect';
  svgAttrs: SvgAttrsParam
}

export type ShapeBackground = AssetBackgroundType<'shape', ShapeBackgroundParams>

export type TransparentBackground = AssetBackgroundType<'transparent', Record<string, never>>

export type SolidBackgroundParams = {
  fill: string;
}

export type SolidBackground = AssetBackgroundType<'solid', SolidBackgroundParams>
