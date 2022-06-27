import { View, Text,} from 'react-native'
import React from 'react'
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../theme/colors';

const Message = ({ message, info, success,  primary, danger }) => { 

  const getBgColor = () => {
      if (primary) {
         return colors.primary;
       }
         if (danger) {
            return colors.danger;
       }
       if (success) {
        return colors.success;
       }
         if (info) {
            return colors.secondary;
       }};

  return (
    <TouchableOpacity 
    style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
    <View style={[]}>
    
   =   <Text 
          style={{ 
            color: colors.white 
            }}>
        {message}
     </Text>
    
      </View>
    </TouchableOpacity>
  );
};
export default Message;