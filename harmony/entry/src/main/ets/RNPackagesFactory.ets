import { RNPackageContext, RNPackage } from '@rnoh/react-native-openharmony/ts';
import { GestureHandlerPackage } from '@react-native-oh-tpl/react-native-gesture-handler/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';
import {LottieAnimationViewPackage} from '@react-native-oh-tpl/lottie-react-native/ts';
import { ViewPagerPackage } from '@react-native-oh-tpl/react-native-pager-view/ts';
import { ReanimatedPackage } from '@react-native-oh-tpl/react-native-reanimated/ts';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new GestureHandlerPackage(ctx),
    new SafeAreaViewPackage(ctx),
    new LottieAnimationViewPackage(ctx),
    new ViewPagerPackage(ctx),
    new ReanimatedPackage(ctx),
  ];
}