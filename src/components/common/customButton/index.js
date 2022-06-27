import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../theme/colors';

const CustomButton = ({ title, disabled, loading, secondary, primary, danger, onPress, style }) => { 

  const getBgColor = () => {

      if (disabled) {
        return colors.grey;
      }
      if (primary) {
         return colors.primary;
       }
         if (danger) {
            return colors.danger;
       }
         if (secondary) {
            return colors.secondary;
       }};

  return (
    <TouchableOpacity 
    disabled={disabled}
    onPress={onPress}
    style={[styles.wrapper, {backgroundColor: getBgColor()}, style ]}>
    <View style={[styles.loadingSection]}>
     {loading && (
     <ActivityIndicator
      color={primary? colors.secondary : colors.primary}
       />
        )}
    {title && (<Text style={{ color: disabled ? 'black'  : colors.white, paddingLeft: loading ? 5 : 0,}}>
      {loading ? 'Please wait...' : title}
     </Text>
     )}
      </View>
    </TouchableOpacity>
  );
};
export default CustomButton;

       