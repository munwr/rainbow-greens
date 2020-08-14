import config from "../../config.json"

export default {
  ...config.theme,
  breakpoints: [
    '40em', '56em', '64em', '90em'
  ],
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  styles: {
    root: {
      fontFamily: 'body',
      'img': {
        maxWidth: '100%'
      }
    }
  },
  variants: {
    container: {
      maxWidth: "1280px",
      m: "0 auto",
      pt: [3, 4, 4, 5],
      px: [3, 4, 4, 5]
    }
  }
}