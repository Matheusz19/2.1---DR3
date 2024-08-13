import { Avatar } from 'react-native-paper';
import Image from '../assets/images/Infnet.png';

export default function CustomImage() {
  return (
    <Avatar.Image size={96} source={Image} />
  );
}