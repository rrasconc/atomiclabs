import { Platform, UIManager } from 'react-native';

import { Navigation } from './navigation';

export default function App() {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return <Navigation />;
}
