import React, { Component } from 'react';
import { Container, Body, Header, Title, Left, Content, Text, Right, Form, Textarea, Item, Input, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import { lightPurp } from '../utils/colors';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class AddCard extends Component {

    state = {
        loading: false,
        question: "",
        answer: "",
        submitted : false
    }

    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        })
        this.setState({ loading: true })
    }

    onButtonPressed = (e,value) => {
        this.setState({
            answer : value,
            submitted : true
        })
    }

    onSubmitHandler = e => {
        const { route, dispatch ,navigation} = this.props
        const id = route.params
        const {question , answer} = this.state
        dispatch(addCard({id,question , answer}))
        alert("New card Added")
        this.setState({
            question : "",
            answer : ""
        })

        console.log(navigation)
        navigation.goBack()
    }
    render() {

        const { question, answer,submitted } = this.state
        return (
            this.state.loading ? <Container>
                <Content padder>
                    <Form>
                        <Textarea
                            value={question}
                            onChangeText={val => this.setState({ question: val })}
                            style={styles.textInput} rowSpan={5}
                            placeholderTextColor="#6E0000"
                            bordered placeholder="Question" />
                        <Text>Please select the answer for this question : </Text>
                        <Button success
                            onPress={(e,value) => this.onButtonPressed(e,"correct")}
                            disabled={submitted === true}
                            style={{ justifyContent: "center", marginBottom: 20, marginTop: 20 }}
                        ><Text >Correct</Text></Button>
                        <Button danger
                            disabled={submitted === true}
                            onPress={(e,value) => this.onButtonPressed(e, "incorrect")}
                            style={{ justifyContent: "center", marginBottom: 20 }}
                        ><Text>Incorrect</Text></Button>
                        {submitted === true && <Text>Answer selected , please press submit to add the card</Text>}
                        <Button
                            onPress={this.onSubmitHandler}
                            disabled={typeof question === 'undefined' || question === ""
                                || typeof answer === 'undefined' || answer === ""}
                            style={styles.btnText} success>
                            <Text style={{ fontSize: 16 }}> Submit </Text></Button>
                    </Form>
                </Content>
            </Container> : <Text>Loading...</Text>
        );
    }
}


const styles = StyleSheet.create({
    textInput: {
        borderColor: "#000",
        borderWidth: 2,
        padding: 10,
        fontSize: 18,
        marginTop: 30,
        marginBottom: 20,
    },
    btnText: {
        alignSelf: "center",
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 8
    }
})


export default connect()(AddCard);