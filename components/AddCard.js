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
        answer: ""
    }

    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        })
        this.setState({ loading: true })
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

        const { question, answer } = this.state
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
                        <Item regular>
                            <Input
                                value={answer}
                                onChangeText={val => this.setState({ answer: val })}
                                style={{ borderWidth: 1, borderColor: '#000', marginBottom: 30 }}
                                placeholderTextColor="#6E0000"
                                placeholder='Answer' />
                        </Item>
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