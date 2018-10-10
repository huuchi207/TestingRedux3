import React, {Component} from 'react';
import {Button} from 'react-native-elements';

const ButtonComp = ({title, onPress, bgColor, textColor}) =>(
        <Button
            title={title}
            onPress={onPress}
            backgroundColor={bgColor}
            color={textColor}
            style={{marginBottom: 10}}
        />
)
export default ButtonComp;