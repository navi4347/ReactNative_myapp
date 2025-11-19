import * as Font from 'expo-font';
import Magnetob from '../assets/fonts/magneto.ttf';

export async function loadFonts() {
  await Font.loadAsync({
    MagnetobFont: Magnetob,
  });
}
