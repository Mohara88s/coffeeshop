import React from 'react';
import { Image } from 'react-native';
import { styles } from './Hero.styles';
const imageUrl =
  'https://www.diegocoquillat.com/wp-content/uploads/2021/12/Hosteleria-Burnout-.jpg';

const Hero = () => <Image source={{ uri: imageUrl }} style={styles.image} />;

export default Hero;
