import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  MenuIconMessaging,
  MenuIconSocial,
  MenuIconMessagingDark,
  MenuIconSocialDark,
} from '@src/assets/icons';
import {
  ThemeKey,
  ThemeService,
} from '@src/core/themes';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Social',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconSocial(style),
        'Eva Dark': MenuIconSocialDark(style),
      }, theme);
    },
    route: 'Social',
  },
  {
    title: 'Messaging',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Eva Light': MenuIconMessaging(style),
        'Eva Dark': MenuIconMessagingDark(style),
      }, theme);
    },
    route: 'Messaging',
  },
];
