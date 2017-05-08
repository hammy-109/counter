import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  app: {
    textAlign: 'center'
  },
  clock: {
    display: 'inline-flex',
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }]
  },
  'clock div': {
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }],
    fontSize: [{ unit: 'px', value: 16 }]
  },
  btn: {
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }]
  },
  'form-control': {
    width: [{ unit: '%H', value: 0.5 }]
  }
});
