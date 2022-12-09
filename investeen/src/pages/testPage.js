import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './styles/testPage.css';
import { Link } from 'react-router-dom';
var TotalPers=0;
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
    for( var i=0;i<= answer.length;i++)
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
          case '5':
            AnswerID="Debtors";
            break;
        }
      TotalPers++;
      console.log(TotalPers)
      
      this.setState((state) => ({
        answersCount: {
                ...state.answersCount,
                [ AnswerID ]: (state.answersCount[ AnswerID ] || 0) + 1,
        },
        answer: answer

      }));
    }
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
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-NavigationBar">
        <div className="App-Logo">
          <img className="Logo" src={require("../logo.png")}></img>
        </div>
        <nav className="item">
          <ul className="ul">
            <li>
              <Link to="/home">Trang chủ</Link>
            </li>
            <li>
              <Link to="/test">Kiểm tra</Link>
            </li>
            <li>
              <Link to="/financialplan">Kế hoạch chi tiêu</Link>
            </li>
            <li>
              <Link to="/investment">Đầu tư</Link>
            </li>
          </ul>
        </nav>
        <a className="App-UserLogo"><img className='User' src={require('../Assets/userAvatar.png')}></img></a>
      </div>
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
