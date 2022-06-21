declare module "@svgstitcher/core" {
  export type Position = {
    x: PositionValue;
    y: PositionValue;
  };

  export type PositionValue = number | 'center';

  export type SvgAttrsParam = {
    [key: string]: unknown;
  };

  export type FontParam = {
    size?: number;
    filePath?: string;
  };

  export type AssetElement = GlyphAssetElement | FlattenedTextAssetElement;

  type AssetElementType<typeName, typeParams> = {
    type: typeName;
    params: typeParams;
  };

  type StandardAssetElementParam = {
    position: Position;
    svgAttrs?: SvgAttrsParam;
  };

  export type GlyphAssetElementParam = StandardAssetElementParam & {
    filePath: string;
    scale?: number;
  };

  export type GlyphAssetElement = AssetElementType<'glyph', GlyphAssetElementParam>;

  export type FlattenedTextAssetElementParam = StandardAssetElementParam & {
    text: string;
    font?: FontParam;
  };

  export type FlattenedTextAssetElement = AssetElementType<'flattenedText', FlattenedTextAssetElementParam>;
  export type AssetBackground = TransparentBackground | SolidBackground | ShapeBackground;

  type AssetBackgroundType<typeName, typeParams> = {
    type: typeName;
    params: typeParams;
  };

  export type ShapeBackgroundParams = {
    shape: 'circle' | 'rect';
    svgAttrs: SvgAttrsParam;
  };

  export type ShapeBackground = AssetBackgroundType<'shape', ShapeBackgroundParams>;

  export type TransparentBackground = AssetBackgroundType<'transparent', Record<string, never>>;

  export type SolidBackgroundParams = {
    fill: string;
  };

  export type SolidBackground = AssetBackgroundType<'solid', SolidBackgroundParams>;

  export type AssetParams = {
    label?: string;
    width: number;
    height: number;
    background?: AssetBackground;
    elements: AssetElement[];
  };

  export type AssetOutput = {
    params: AssetParams;
    result: string;
  };

  export function stitch(assetParams: AssetParams): Promise<AssetOutput>;
}
