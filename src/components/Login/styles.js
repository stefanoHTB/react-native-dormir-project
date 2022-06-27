import { StyleSheet } from "react-native";
import colors from "../../theme/colors";


export default StyleSheet.create({
    LogoImage: {

        alignSelf: 'center',
        marginTop: 50,
    },

    title: {

        fontSize: 25,
        textAlign: 'center',
        fontWeight: '900',
        paddingTop: 10
    },

    subtitle: {

        fontSize: 15,
        textAlign: 'center',
        fontWeight: '900',
        paddingVertical: 10
    },

    form: {

        padding: 10
    },

    createSection: {

        flexDirection: 'row',

    },

    linkBtn: {
        paddingLeft: 10,
        color: colors.primary,
        fontSize: 16
    },

    infoText: {
        fontSize: 17
    }
 
  });