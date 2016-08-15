import {StyleSheet} from 'react-native';
import {getCommonStyles, vpHeight, vpWidth} from "../../lib/CommonStyles"
let style = StyleSheet.create({
  dateTouch: {
    width: 142
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateIcon: {

  },
  dateInput: {

  },
  dateText: {
    color: getCommonStyles().Colors.goldenrod,
    fontSize:50,
  },
  placeholderText: {
    color: getCommonStyles().Colors.goldenrod,
    fontSize:50,
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',

  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },

  btnText: {
    color:"white",
    textAlign:"center",
    justifyContent:"center",
    fontSize:16,
    fontFamily : "Montserrat-Regular",
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    position: "absolute",
    top: 0,
    height: getCommonStyles().signUp.blueWizardButtonHeight,
    backgroundColor: getCommonStyles().Colors.azure,
    width: vpWidth,
    justifyContent:"center",
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  }
});

export default style;
