import { Linking, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { COLORS, SPACING } from '../constants/theme';
import type { SocialMediaButtonProps } from '../constants/types';
import { verticalScale } from 'react-native-size-matters';

export function SocialMediaButton({ icon, url }: SocialMediaButtonProps) {
  const handlePress = () => {
    Linking.openURL(url);
  };
  return (
    <TouchableOpacity onPress={handlePress} hitSlop={SPACING.small}>
      <Icon size={verticalScale(24)} name={icon} color={COLORS.white} />
    </TouchableOpacity>
  );
}
