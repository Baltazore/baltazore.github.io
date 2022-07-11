import '@unocss/reset/tailwind.css'
import 'uno.css'

import WAVES from 'vanta/dist/vanta.waves.min'

document.addEventListener('DOMContentLoaded', () => {
  const runColorMode = (callback) => {
    if (!window.matchMedia) {
      return
    }

    const query = window.matchMedia('(prefers-color-scheme: dark)')

    callback(query.matches)

    query.addEventListener('change', (event) => callback(event.matches))
  }

  runColorMode((isDarkMode) => {
    const color = isDarkMode ? 0x1e20 : 0x8888

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    WAVES({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color,
      shininess: 3.0,
      waveHeight: 8.5,
      waveSpeed: 0.5,
      zoom: 0.65,
    })
  })
})
