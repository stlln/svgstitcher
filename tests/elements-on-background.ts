import { stitch } from "../src/node";
import { AssetParams } from "../src/types/asset-params";


const inputParams: AssetParams = {
  width: 100,
  height: 100,
  background: {
    type: "shape",
    params: {
      shape: "rect",
      svgAttrs: {
        fill: "#FF9921",
        width: "100%",
        height: "100%"
      }
    }
  },
  elements: [
    {
      type: "glyph",
      params: {
        filePath: "glyphs/glyph-dollar-light.svg",
        scale: 0.47,
        position: {
          x: "center",
          y: "center"
        }
      }
    }
  ]
};

const processSvg = stitch(inputParams);

processSvg.then(console.log);
