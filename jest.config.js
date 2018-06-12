module.exports = {
  moduleFileExtensions: [
    `js`,
    `jsx`,
    `json`,
    `vue`,
  ],
  transform: {
    '^.+\\.vue$': `vue-jest`,
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': `jest-transform-stub`,
    '^.+\\.jsx?$': `babel-jest`,
  },
  snapshotSerializers: [
    `jest-serializer-vue`,
  ],
};
