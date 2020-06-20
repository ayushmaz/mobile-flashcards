import React, { Component } from 'react';
import { View, ListItem, List } from 'native-base';
import { Container, Body, Header, Title, Left, Content, Text, Right, Form, Textarea, Item, Input, Button } from 'native-base';
class DeckList extends Component {
    state = {
        decks: ["deck1", "deck2", "deck3", "deck4", "deck5","deck1", "deck2", "deck3", "deck4", "deck5", "deck3", "deck4", "deck5"]
    }
    render() {
        let i = 1
        return (
            <Container>
                <Content>
                    <List >
                        {this.state.decks.map((deck) => (
                            <ListItem noBorder key={i++} >
                                <Body >
                                    <Text style={{alignSelf: "center" , fontSize:24 , fontWeight: "600"}}>{deck.toUpperCase()}</Text>
                                    <Text style={{alignSelf: "center"}} note>{i} cards</Text>
                                </Body>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default DeckList;