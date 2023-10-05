import { FontAwesome } from '@expo/vector-icons';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

export interface ServiceGroup {
  title: string;
  services: string[];
  image: ImageSourcePropType;
}

export interface ServiceGroupCardProps extends ServiceGroup {
  width: number;
}

export interface TeamMember {
  id: number;
  avatar: string;
  name: string;
  position: string;
}

export type TeamMemberCardProps = Pick<TeamMember, 'avatar' | 'name' | 'position'>;

export interface TeamMembersProps {
  data: TeamMember[];
  loading: boolean;
}

type FontawesomeIcon = keyof typeof FontAwesome.glyphMap;

export interface SocialMediaButtonProps {
  icon: FontawesomeIcon;
  url: string;
}

export interface ScrollDownButtonProps extends TouchableOpacityProps {
  text: string;
}
