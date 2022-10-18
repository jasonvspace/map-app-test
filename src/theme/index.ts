import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: { baseStyle: {  _focus: { boxShadow: 'none' } } },
  },
  styles: {
    global: (props: any) => ({
      body: {
          fontFamily: 'Arial',
      }
    })
  },
})

export default theme
