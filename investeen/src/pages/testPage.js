import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './styles/testPage.css';
import { Link } from 'react-router-dom';
class testPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }
  setUserAnswer(answer) 
  {
    var AnswerID=""
    console.log()
    for( var i=0;i<= answer.length-1;i++)
    {
      //console.log(answer[i])
      switch( answer[i] )
        {
          case '1':
            AnswerID="Shoppers";
            break;
          case '2':
            AnswerID="Savers";
            break;
          case '3':
            AnswerID="Big Spenders";
            break;
          case '4':
            AnswerID="Investors";
            break;
        }
      TotalPers++;
      // console.log(TotalPers)
      
      this.setState((state) => ({
        answersCount: {
                ...state.answersCount,
                [ AnswerID ]: (state.answersCount[ AnswerID ] || 0) + 1,
        },
        answer: answer

      }));
    }
    console.log("");
  }
  
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const arrayAnswers = Object.entries(answersCount);
    return arrayAnswers;
  }

  setResults(result) {
      this.setState({ result: result });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    const Data = [].concat(this.state.result);
    Data.sort((a, b) => a[1] < b[1] ? 1 : -1);
    console.log(Data);
    return <Result quizResult={Data} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src="https://i.imgur.com/pEds07b.png" className="App-logo" alt="logo" /> */}
          <h2>Test</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}
export default testPage;
