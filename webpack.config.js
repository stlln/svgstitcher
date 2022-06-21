const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
  entry: {
    node: './src/node.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: 'stitch',
      type: 'commonjs2',
      export: ['stitch']
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/fontkit/src/opentype/shapers/data.trie',
          to: '.'
        },
        {
          from: 'node_modules/fontkit/src/opentype/shapers/indic.trie',
          to: '.'
        },
        {
          from: 'node_modules/fontkit/src/opentype/shapers/use.trie',
          to: '.'
        }
      ],
    })
  ],
  stats: {
    preset: 'errors-warnings',
    version: false,
    colors: true
  }
};
