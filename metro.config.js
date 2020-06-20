module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    /* resolver options */
   sourceExts: ['jsx','js', 'ts', 'tsx'] // add tsx if its not yet defined
  },
};
