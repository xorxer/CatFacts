import { Dimensions, StyleSheet } from "react-native";

export const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // CONTAINER STYLING
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#B6C5F9',
    },

    // HEADER STYLING
    header: {
      marginTop: height * 0.015,
      marginBottom: height * 0.015,
      backgroundColor: '#B6C5F9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header_text: {
      fontFamily: 'nnt-sans-bold',
      paddingTop: width * 0.02,
      fontSize: width * 0.07
    },

    // TAB STYLING
    tab: {
      tabBarAndroidRipple: { borderless: false},
      tabBarActiveTintColor: '#000000',
      tabBarLabelStyle: { 
        fontSize: width * 0.03,
        fontFamily: 'ppn-bold'
      },
      tabBarStyle: {
        width: width * 0.95,
        marginLeft: width * 0.03,
        backgroundColor: '#D3DAE7',
        borderWidth: width * 0.01,
        borderRadius: height * 0.025,
        borderColor: 'transparent',
        overflow: 'hidden',
       },
      tabBarIndicatorStyle: {
        backgroundColor: '#FFFFFF',
        height: width * 0.12,
        width: width * 0.47,
        borderRadius: height * 0.025,
      },
    },

    // FACT SCREEN STYLING
    card_container: {
      alignItems: 'center',
      marginTop: height * 0.02,
      marginLeft: width * 0.03,
      height: height * 0.8,
      width: width * 0.95,
      backgroundColor: '#FFFFFF',
      borderRadius: height * 0.03
    },
    screen_container: {
      flex: 1,
      backgroundColor: '#B6C5F9'
    },
    fact_container: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    fact_image: {
      marginTop: height * 0.02,
      width: width * 0.90,
      height: height * 0.4,
      overflow: 'hidden',
      borderRadius: height * 0.04,
      overlayColor: 'white',
    },
    fact_text: {
      fontFamily: 'nnt-sans-xbold',
      color: '#000000',
      textAlign: 'center'
    },

    // USED BY BOTH SCREENS
    btn_text: {
      marginTop: height * 0.02,
      marginBottom: height * 0.02,
      fontSize: height * 0.04,
      borderRadius: height * 0.025,
      width: width * 0.9,
      height: height * 0.1,
      fontFamily: 'tk-med',
      backgroundColor: '#656565',
      textAlign: 'center',
      textAlignVertical: 'center'
    },

    // HISTORY SCREEN STYLING
    fact_cache: {
      marginBottom: height * 0.02,
      fontSize: height * 0.02,
      borderRadius: height * 0.025,
      width: width * 0.9,
      height: height * 0.1,
      color: '#000000',
      fontFamily: 'tk-med',
      backgroundColor: '#D1D1D1',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    list_style: {
      marginTop: height * 0.01
    }

  });
  