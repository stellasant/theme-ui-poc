/*
Theme based on theme-ui.
More info:
https://theme-ui.com/getting-started
https://theme-ui.com/theming
* */

import { Theme } from 'theme-ui'

// Replace them with

const colors = {
  primary: '#3A8DF4',
  secondary: '#f5f5f5',
  tertiary: '#fff',
  text: '#000',
  background: '#fff',
  muted: '#a1a1a1'
} as const

const fonts = {
  body: 'system-ui, sans-serif',
  heading: '"Avenir Next", sans-serif',
  monospace: 'Menlo, monospace',
} as const

const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64
]

const fontWeights = {
  body: 400,
    heading: 700,
    bold: 700
} as const

const lineHeights = {
  body: 1.5,
    heading: 1.125
} as const

// Global styles
const styles =  {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body"
  },
  h1: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 5
  },
  h2: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 4
  },
  h3: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 3
  },
  h4: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 2
  },
  h5: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 1
  },
  h6: {
    color: "text",
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    fontSize: 0
  },
  p: {
    color: "text",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body"
  },
  a: {
    color: "primary"
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid"
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid"
  },
  img: {
    maxWidth: "100%"
  }
} as const

export const defaultTheme: Theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  styles
}
