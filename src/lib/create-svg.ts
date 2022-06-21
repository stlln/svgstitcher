// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {createSVGWindow} from 'svgdom';
import {Container, registerWindow, SVG} from '@svgdotjs/svg.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createSvg(): Container {
  const window = createSVGWindow();

  const {document} = window;

  registerWindow(window, document);

  return SVG(document.documentElement) as Container;
}
