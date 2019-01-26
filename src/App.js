import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MainUI from './main'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MainUI/>
      </MuiThemeProvider>
    );
  }
}

export default App;
