import React, { Component } from 'react';
import { Container, Header, Tabs, Tab, Text, TabHeading, Icon } from 'native-base';
import DecksPage from './DecksPage';
import AddDeck from './AddDeck';
import DeckList from './DeckList';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

class HomePage extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={<TabHeading ><FontAwesome5 name="clipboard-list" size={30} color="white" /><Text>Decks</Text></TabHeading>}>
                        <DeckList />
                    </Tab>
                    <Tab heading={<TabHeading><MaterialIcons name="add-box" size={30} color="white" /><Text>Add Deck</Text></TabHeading>}>
                        <AddDeck />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default HomePage;