import Unocss from 'unocss/vite'
import { presetIcons, presetWind } from 'unocss'

export default {
  plugins: [
    Unocss({
      presets: [
        presetIcons({
          cdn: 'https://esm.sh/',
        }),
        presetWind({
          darkMode: 'class'
        }),
      ],
    }),
  ],
}
