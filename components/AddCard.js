import React, { Component } from 'react';
import { Container, Body, Header, Title, Left, Content, Text, Right, Form, Textarea, Item, Input, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import { lightPurp } from '../utils/colors';

class AddCard extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Add Card</Title>

                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Form>
                        <Textarea style={styles.textInput} rowSpan={5} placeholderTextColor="#6E0000" bordered placeholder="Question" />
                        <Item regular>
                            <Input style={{ borderWidth: 1, borderColor: '#000', marginBottom: 30 }} placeholderTextColor="#6E0000" placeholder='Answer' />
                        </Item>
                        <Button style={styles.btnText} success><Text style={{fontSize:16}}> Submit </Text></Button>
                    </Form>
                </Content>
            </Container>
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
    btnText:{
        alignSelf:"center",
        paddingLeft: 30,
        paddingRight:30,
        borderRadius : 8
    }
})

export default AddCard;