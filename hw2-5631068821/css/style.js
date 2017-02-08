import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#header-container': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 0.83 }],
    'backgroundColor': '#fff',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'borderTopLeftRadius': '6px',
    'borderTopRightRadius': '6px'
  },
  '#web-logo': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#web-quote': {
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'w3-input': {
    'display': 'inline'
  },
  '#myNavbar': {
    'width': [{ 'unit': '%H', 'value': 0.85 }],
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
    'width': [{ 'unit': '%H', 'value': 0.83 }]
  },
  'content-3card>div': {
    'width': [{ 'unit': '%H', 'value': 0.55 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginRight': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#fff'
  },
  'web-content-img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-btn': {
    'borderRadius': '2px',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }],
    'backgroundColor': '#1a9085',
    // box-shadow: 0 5px 7px 0 rgba(0,0,0,0.20),0 8px 25px 0 rgba(0,0,0,0.10);
  },
  'w3-btn:hover': {
    'backgroundColor': '#fff',
    'color': '#1a9085',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#1a9085' }]
  },
  'content-2card': {
    'display': 'flex'
  },
  'content-3card': {
    'display': 'flex'
  },
  'content-2card>div': {
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginRight': [{ 'unit': 'px', 'value': 30 }],
    'backgroundColor': '#fff'
  }
});
