import React, { Component } from 'react';
import { Container, Card, Text, Content, Button, CardItem, H1 } from 'native-base';
import { connect } from 'react-redux';

class Quiz extends Component {
    state = {
        submitted: false,
        i: 0,
        loading: false,
        score : 0
    }
    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        })
        this.setState({ loading: true })
    }

    onButtonPressed = (e,value) => {
        //console.log(value)
        const { route, decks } = this.props
        const deckID = route.params
        const answer = decks[deckID.deckID].questionAnswers[this.state.i].answer
        let point = 0
        if(answer === value){
            point = 1
        }
        const newScore = this.state.score + point
        this.setState({
            score : newScore,
            submitted : true
        })

    }

    onNextPressed = e =>{
        const newIndex = this.state.i + 1 
        this.setState({
            i : newIndex,
            submitted : false
        })
    }
    render() {

        const { submitted, i ,loading ,score} = this.state
        const { navigation, route, decks } = this.props
        const deckID = route.params
        //console.log(decks[deckID.deckID].questionAnswers)
        const questions = decks[deckID.deckID].questionAnswers
        const len = questions.length
        if(len === 0){
            return <H1 style={{alignSelf:"center", marginTop:150 , fontSize :24}}> Please! add cards first</H1>
        }
        if(i >= len){
            return <H1 style={{alignSelf:"center", marginTop:150 , fontSize :24}}>Your score is {score}</H1>
        }
        //console.log(questions)
        
        if(loading === false){
            return <Text>Loading...</Text>
        }
        return (
            <Container>
                <Content padder>
                    <Card >
                        <CardItem header>
                            <Text>Question {i+1}</Text>
                        </CardItem>
                        <CardItem >
                            <Text>{questions[i].question}</Text>
                        </CardItem>

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


                        {submitted ? <Text>The right answer is {questions[i].answer}</Text> : <Text></Text>}

                        <Button info
                            onPress={ this.onNextPressed}
                            style={{ justifyContent: "center", marginTop: 10 }}
                        ><Text>Next</Text></Button>
                    </Card>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps({ decks }, { navigation, route }) {
    return {
        decks,
        navigation,
        route
    }
}

export default connect(mapStateToProps)(Quiz);