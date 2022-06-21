import TextToSVG from 'text-to-svg';

export type SvgFlattenedTextParams = {
  font?: {
    size?: number;
    filePath?: string;
  },
  options?: Omit<TextToSVG.FontOptions, 'x,y,fontSize'>
  svgAttrs?: {
    [key: string]: unknown
  }
}

export class SvgFlattenedText {
  private textSvgMetrics: TextToSVG.Metrics = {
    x: 0,
    y: 0,
    ascender: 0,
    baseline: 0,
    descender: 0,
    height: 0,
    width: 0,
  };

  private readonly textPath;

  constructor(text: string, params: SvgFlattenedTextParams = {}) {
    const textToSVG = TextToSVG.loadSync(params.font?.filePath);

    const textToSvgFontOptions: TextToSVG.FontOptions = params.options ?? {};

    textToSvgFontOptions.fontSize = params.font?.size;
    textToSvgFontOptions.anchor = params.options?.anchor ?? 'left top';

    this.textSvgMetrics = textToSVG.getMetrics(text, textToSvgFontOptions);

    this.textPath = textToSVG.getPath(text, {...params.svgAttrs, ...textToSvgFontOptions});
  }

  get width(): number {
    return this.textSvgMetrics.width;
  }

  get height(): number {
    return this.textSvgMetrics.baseline;
  }

  get path(): string {
    return this.textPath;
  }
}
