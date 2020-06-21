import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { H2, H3, H1, Container, Left, Body, Title, Right, Header, Button, Content } from 'native-base'
import React, { Component } from 'react';
import { white } from '../utils/colors'
import { connect } from 'react-redux';

class DecksPage extends Component {
    render() {
        const { navigation, route, decks } = this.props
        const deckID = route.params
        console.log(decks[deckID.deckID])
        return (
            
            <Container>
                {console.log("this runs first")}
                <View style={styles.body}>
                    <H1>{decks[deckID.deckID].deckTitle}</H1>
                    <H3 style={{ marginBottom: 40 }}>{decks[deckID.deckID].questionAnswers.length} cards</H3>
                    <Button success style={styles.btn} onPress={() => navigation.navigate('AddCard')} ><Text style={styles.btnText} > Add Card </Text></Button>
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
        marginTop: 50

    },
    btnText: {
        color: white,
        fontSize: 18
    },
    btn: {
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        justifyContent: "center"
    }
})

function mapStateToProps({ decks } , {navigation , route}) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DecksPage);