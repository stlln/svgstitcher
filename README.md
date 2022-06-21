# SVG Stitcher

Merge SVG files into by layering them on top of each other

## What is SVG Stitcher?

Given an input object like:

```json
{
  "width": 100,
  "height": 100,
  "background": {
    "type": "shape",
    "params": {
      "shape": "rect",
      "svgAttrs": {
        "fill": "#FF9921",
        "width": "100%",
        "height": "100%"
      }
    }
  },
  "elements": [
    {
      "type": "glyph",
      "params": {
        "filePath": "glyphs/glyph-dollar-light.svg",
        "scale": 0.47,
        "position": {
          "x": "center",
          "y": "center"
        }
      }
    }
  ]
}
```

It will return the merged SVG:

```svg

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:svgjs="http://svgjs.dev/svgjs" width="100" height="100">
  <rect fill="#ff9921" width="100%" height="100%"></rect>
  <g xmlns:xlink="http://www.w3.org/1999/xlink" width="88" height="159" viewBox="0 0 88 159"
     id="03930b38-59e3-47ff-b530-126e3fd245d8" transform="matrix(0.47,0,0,0.47,38.33318,20.781630000000007)">
    <defs>
      <clipPath id="b">
        <rect width="88" height="159"></rect>
      </clipPath>
    </defs>
    <g id="a" clip-path="url(#b)">
      <g transform="translate(17.006 15.371)">
        <path d="M282.617,259c25.485.167,25.818,25.485,25.818,25.485s2,25.652-25.818,25.818l-27.817.167"
              transform="translate(-254.8 -197.203)" fill="none" stroke="#fff" stroke-linecap="round"
              stroke-miterlimit="10" stroke-width="28"></path>
        <path
          d="M281.831,278.322c-25.485-.167-25.818-23.819-25.818-23.819s-2-23.986,25.818-24.319,26.151-.167,26.151-.167"
          transform="translate(-254.014 -216.525)" fill="none" stroke="#fff" stroke-linecap="round"
          stroke-miterlimit="10" stroke-width="28"></path>
        <line x2="0.999" y2="8.995" transform="translate(26.818 0)" fill="none" stroke="#fff" stroke-linecap="round"
              stroke-miterlimit="10" stroke-width="28"></line>
        <line x2="0.999" y2="8.828" transform="translate(26.318 118.43)" fill="none" stroke="#fff"
              stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"></line>
      </g>
    </g>
  </g>
</svg>
```

## Usage

### Install

```shell
$ npm install svgstitcher
```

### Usage

See `tests/element-tests.ts` for usage example.

## Building

```shell
$ yarn install
$ yarn run build
```

## Known Limitations

- Currently, only accepts files as element inputs. This should ideally be a buffer.
- Build is optimized and minified. Should be readable.

## License

This work is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
