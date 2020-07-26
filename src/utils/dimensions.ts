import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
export const screenWidth = Math.min(dimensions.width, dimensions.height);
export const screenHeight = Math.max(dimensions.width, dimensions.height);

export const vw = screenWidth / 100;
export const vh = screenHeight / 100;

export const rx = screenWidth / 414;
export const ry = screenHeight / 896;
