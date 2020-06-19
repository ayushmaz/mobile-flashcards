import { View, Text, StyleSheet, Image ,Dimensions} from 'react-native'
import { H2, H3, H1, Container, Left, Body, Title, Right, Header, Button, Content } from 'native-base'
import React, { Component } from 'react';
import { white } from '../utils/colors'

class DecksPage extends Component {
    render() {
        const windowWidth = Dimensions.get('screen').width;
        const windowHeight = Dimensions.get('window').height;
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Decks Page</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.body}>
                    <Image source={require('../utils/image1.png')} style={{ width: windowWidth, height: 300 }}></Image>
                    <H1>Deck Name</H1>
                    <H3>2 cards</H3>
                    <Button success style={styles.btn} ><Text style={styles.btnText}> Add Card </Text></Button>
                    <Button dark style={styles.btn}><Text style={styles.btnText}> Start Quiz </Text></Button>
                    <Button danger style={styles.btn}><Text style={styles.btnText}> Delete Card </Text></Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    

    },
    btnText: {
        color: white,
        fontSize: 18
    },
    btn: {
        padding: 50
    }
})

export default DecksPage;