import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styledBtn from './styledBtn'

const StyledButton = (props) => {

  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;

  // Destructured props
  const { type, content, onPress } = props;
  
  const backgroundColor = type === 'primary' ? 'black' : 'white';
  const textColor = type === 'primary' ? 'white' : 'black';

  return (
    <View style={styledBtn.container}>
      <Pressable
        style={[styledBtn.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={styledBtn.text, {color: textColor}}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton