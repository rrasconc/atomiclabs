import { ImageSourcePropType } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export interface ServiceGroup {
  title: string;
  services: string[];
  image: ImageSourcePropType;
}

export interface ServiceGroupCardProps extends ServiceGroup {
  width: number;
}

export interface TeamMember {
  image: ImageSourcePropType;
  name: string;
  position: string;
}

type FontawesomeIcon = keyof typeof FontAwesome.glyphMap;

export interface SocialMediaButtonProps {
  icon: FontawesomeIcon;
  url: string;
}
