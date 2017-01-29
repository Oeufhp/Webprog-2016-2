import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'web-header': {
    'width': [{ 'unit': 'px', 'value': 640 }],
    'display': 'table',
    'verticalAlign': 'middle',
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'web-header> div': {
    'position': 'relative'
  },
  '#web-logo': {
    'fontFamily': ''Kanit', sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 55 }],
    'fontWeight': '700',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': -30 }]
  },
  '#web-quote': {
    'fontFamily': ''Pacifico'',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'input': {
    'width': [{ 'unit': 'px', 'value': 180 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#616161' }],
    'borderRadius': '3px',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'button': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#616161' }],
    'borderRadius': '3px',
    'backgroundColor': '#fff'
  },
  'div>a': {
    'textDecoration': 'none',
    'fontFamily': ''Mitr', sans-serif',
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'color': '#000'
  },
  'div>a:hover': {
    'textDecoration': 'underline'
  },
  '#div-cover': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'textAlign': 'center',
    'backgroundColor': '#000'
  },
  '#web-cover': {
    'width': [{ 'unit': 'px', 'value': 640 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'objectFit': 'cover'
  },
  // ---------- for eater ----------
  'pacman': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'zIndex': '5',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'paddingTop': [{ 'unit': 'px', 'value': 70 }],
    'position': 'absolute'
  },
  'pacman > div': {
    'backgroundColor': '#ff0',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    // position: absolute;
  },
  'pacman-top': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '100px 100px 0 0',
    'animation': 'spinTop .5s infinite linear'
  },
  'pacman-bottom': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0 0 100px 100px',
    'animation': 'spinBottom .5s infinite linear'
  },
  // ---------- for eater ----------
  '#grad1': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'left': [{ 'unit': 'px', 'value': 390 }],
    'position': 'absolute',
    'zIndex': '10',
    'background': 'linear-gradient(to right, #000000 ,transparent)',
    'opacity': '0.9'
  },
  '#grad2': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'position': 'absolute',
    // float: right;
    'bottom': [{ 'unit': 'px', 'value': 303 }],
    'right': [{ 'unit': 'px', 'value': 390 }],
    'zIndex': '15',
    'background': 'linear-gradient(to left, #000000 ,transparent)',
    'opacity': '0.9'
  },
  'grid': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    'width': [{ 'unit': 'px', 'value': 650 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'cell>p': {
    'fontFamily': ''Mitr'',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'cell': {
    'flex': '0 0 32%',
    'height': [{ 'unit': 'px', 'value': 205 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000' }],
    'width': [{ 'unit': 'px', 'value': 213.3 }],
    'textAlign': 'center',
    'position': 'relative'
  },
  'cell>img': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'verticalAlign': 'middle',
    'maxHeight': [{ 'unit': 'px', 'value': 180 }],
    'maxWidth': [{ 'unit': 'px', 'value': 180 }]
  },
  'helper': {
    'display': 'inline-block',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'verticalAlign': 'middle'
  },
  'i': {
    'paddingLeft': [{ 'unit': 'px', 'value': 50 }],
    'color': 'gray'
  },
  'div-footer': {
    'width': [{ 'unit': 'px', 'value': 640 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 100 }],
    'marginBottom': [{ 'unit': 'px', 'value': 150 }]
  },
  'div-footer>p': {
    'fontFamily': ''Montserrat'',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': 'gray'
  },
  'div-hover': {
    'textAlign': 'center',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''Montserrat' ,serif',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 210 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'backgroundColor': 'black',
    'color': 'white',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'zIndex': '5',
    'opacity': '0'
  },
  'cell:hover div-hover': {
    'opacity': '1'
  }
});
