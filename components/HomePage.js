import React, { Component } from 'react';
import { Container, Header, Tabs, Tab, Text, TabHeading, Icon } from 'native-base';
import DecksPage from './DecksPage';
import AddDeck from './AddDeck';
import DeckList from './DeckList';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { getData} from '../utils/api'
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';

class HomePage extends Component {

    state = {
        loading: true
    }

    async componentDidMount() {
        const decks = await getData()
        await this.props.dispatch(receiveDecks(decks))
        this.setState({loading : false})
    }
    render() {
        if(this.state.loading === true){
            return <Text>loading</Text>
        }
        const { navigation } = this.props
        return (
            <Container>
                <Tabs>
                    <Tab heading={<TabHeading ><FontAwesome5 name="clipboard-list" size={30} color="white" /><Text>Decks</Text></TabHeading>}>
                        <DeckList navigation = {navigation} />
                    </Tab>
                    <Tab heading={<TabHeading><MaterialIcons name="add-box" size={30} color="white" /><Text>Add Deck</Text></TabHeading>}>
                        <AddDeck />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
export default connect()(HomePage);