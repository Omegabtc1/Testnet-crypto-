// Load environment variables from .env
require('dotenv').config();

// Import required modules
const { StxCitySDK } = require('stxcity-sdk');
const { StacksNetwork } = require('@stacks/network');

// Configuration for the StxCity SDK
const stxcityConfig = {
  HIRO_API_KEY: process.env.HIRO_API_KEY, // API key from .env
  STXCITY_API_HOST: process.env.STXCITY_API_HOST, // StxCity API host from .env
  STACKS_NETWORK_API_HOST: process.env.STACKS_NETWORK_API_HOST // Stacks network API host from .env
};

// Initialize the StacksNetwork instance with the URL from your .env file
const stacksNetwork = new StacksNetwork({ url: stxcityConfig.STACKS_NETWORK_API_HOST });

// Initialize the StxCity SDK
const stxcitySDK = new StxCitySDK(stacksNetwork, stxcityConfig);

// Test to see if SDK is initialized successfully
console.log("StxCity SDK Initialized Successfully!");

// Now you can start using stxcitySDK in your application.

