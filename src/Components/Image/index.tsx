import React from 'react';
import { Image } from 'react-native';

import { ImageProps } from '../../Interfaces';
import style from './style';

const ImageComponent: React.FC<ImageProps> = ({ source, customStyle }) => {
  return <Image source={source} style={[style.iconView, customStyle]} />;
};

export { ImageComponent };
