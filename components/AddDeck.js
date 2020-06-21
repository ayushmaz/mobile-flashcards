import React, { Component } from 'react';
import { Content, Header, Body, Left, Right, Title, Container, H1, Form, Item, Input, Button, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';


class AddDeck extends Component {

    state={
        loading : false
    }

    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        })
        this.setState({loading:true})
    }

    render() {
        return (
            this.state.loading?<Container>
                <Content style={styles.body}>
                    <Form>
                        <H1>what is the title of your new deck?</H1>
                        <View style={{ height: 30 }}></View>
                        <Item bordered regular>
                            <Input style={{ borderWidth: 1, borderColor: '#000' }} placeholderTextColor="#6E0000" placeholder='Name of the deck' />
                        </Item>
                        <Button style={styles.btnText} success><Text style={{ fontSize: 16 }}> Submit </Text></Button>
                    </Form>
                </Content>
            </Container> : <Text>Loading...</Text>
        );
    }
}
const styles = StyleSheet.create({

    body: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50
    },
    btnText: {
        alignSelf: "center",
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 30,
        borderRadius: 8
    }

})
export default AddDeck;