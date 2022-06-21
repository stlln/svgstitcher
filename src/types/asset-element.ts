import {FontParam, Position, SvgAttrsParam} from './asset-element-params';

export type AssetElement = GlyphAssetElement | FlattenedTextAssetElement

type AssetElementType<typeName, typeParams> = {
  type: typeName;
  params: typeParams;
}

type StandardAssetElementParam = {
  position: Position;
  svgAttrs?: SvgAttrsParam;
}

export type GlyphAssetElementParam = StandardAssetElementParam & {
  filePath: string;
  scale?: number;
}

export type GlyphAssetElement = AssetElementType<'glyph', GlyphAssetElementParam>;

export type FlattenedTextAssetElementParam = StandardAssetElementParam & {
  text: string;
  font?: FontParam;
}

export type FlattenedTextAssetElement = AssetElementType<'flattenedText', FlattenedTextAssetElementParam>;
