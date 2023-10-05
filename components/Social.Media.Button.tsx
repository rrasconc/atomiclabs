import Icon from '@expo/vector-icons/FontAwesome';
import { Linking, TouchableOpacity } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

import { COLORS, SPACING } from '../constants/theme';
import type { SocialMediaButtonProps } from '../constants/types';

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
