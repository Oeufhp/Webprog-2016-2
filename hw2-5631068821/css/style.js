import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#header-container': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#fff',
    'borderTopLeftRadius': '6px',
    'borderTopRightRadius': '6px'
  },
  '#web-logo': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'screen&&<w420': {
      'width': [{ 'unit': '%H', 'value': 1 }]
    },
    'screen&&>w421&&<w768': {
      'width': [{ 'unit': '%H', 'value': 0.7 }],
      'marginTop': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  '#myNavbar': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'w3-dropdown-hover': {
    'fontFamily': ''Kanit',sans-serif'
  },
  'web-content-topic': {
    'fontFamily': ''Kanit', sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  '#myNavbar>ul': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }]
  },
  '#content-container': {
    'backgroundColor': '#fff',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-card-2': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'screen&&>w1023&&<w1360': {
      'marginRight': [{ 'unit': 'px', 'value': -5 }]
    }
  },
  'w3-card-2>p': {
    'textAlign': 'center',
    'screen&&<w420': {
      'fontSize': [{ 'unit': 'px', 'value': 10 }]
    }
  },
  'content-2card': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'content-3card': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'content-3card>div': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'backgroundColor': '#fff',
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'web-content-img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-btn': {
    'borderRadius': '2px',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#1a9085'
  },
  'w3-btn:hover': {
    'backgroundColor': '#fff',
    'color': '#1a9085',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#1a9085' }]
  },
  'content-2card>div': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }],
    'backgroundColor': '#fff'
  },
  'iframe': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 300 }]
  }
});
