module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: true,
  plugins: [
    '@babel/transform-flow-strip-types',
    [
      'module-resolver',
      {
        root: ['./src/'],
        cwd: 'babelrc',
        extensions: ['.js', '.ios.js', '.android.js'],
        stripExtensions: ['.ios.js', '.android.js'],
        alias: { '@app': './src' },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-numeric-separator',
    'react-native-reanimated/plugin',
  ],
}
