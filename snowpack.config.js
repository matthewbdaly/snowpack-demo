{
  plugins: [
    '@snowpack/plugin-babel',
    {
      'input': ['.js', '.jsx', '.ts', '.tsx'],
    },
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-typescript'
  ]
}
