import React, { Component } from 'react';
import { View, ListItem, List, Icon } from 'native-base';
import DecksPage from './DecksPage'
import { Container, Body, Header, Title, Left, Content, Text, Right, Form, Textarea, Item, Input, Button } from 'native-base';
import {setInitialData} from '../utils/api'
import {connect} from 'react-redux'
class DeckList extends Component {
    
    render() {
        const { navigation , decks} = this.props
        const deckList = Object.keys(decks)
        return (
            <Container>
                <Content>
                    <List >
                        {deckList.map((deck) => (
                            <ListItem noBorder key={decks[deck].id} >
                                <Left>
                                    <Body >
                                        <Text style={{  fontSize: 24, fontWeight: "600" }}>{decks[deck].deckTitle}</Text>
                                        <Text note>{decks[deck].questionAnswers.length} cards</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Icon onPress={()=>navigation.navigate('DecksPage' ,{ deckID :deck })} name="arrow-forward" />
                                </Right>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps({decks} , {navigation}){
    return{
        decks,
        navigation
    }
}

export default connect(mapStateToProps)(DeckList);