module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
  
    'react-native-reanimated/plugin'],

  plugins: [
      ["module:react-native-dotenv", 
      {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
      
      }]
    ],
    presets: ["module:metro-react-native-babel-preset"],
 
};
