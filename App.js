/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import Main from './src/Main';
import {Provider} from 'react-redux';
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style = {styles.container}>
                    <Main/>
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

