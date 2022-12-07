import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import quizQuestions from '../api/quizQuestions';
function Result(props) {
  return (
    <CSSTransition
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
       <h1> Result</h1>
       <table style={{border: '1px solid', width:'100%'}}>
        <tbody>
      {props.quizResult.map((items, index) => {
      return (   
    <tr key={index}>
    {items.map((subItems, sIndex) => {

      if(sIndex===0)
      {
        return <td style={{border: '1px solid'}} key={sIndex}> {subItems} </td>;
      }
      else
      {
        return <td style={{border: '1px solid'}} key={sIndex}> {(subItems/quizQuestions.length)*100}%</td>
      }
    })}
    </tr> 
);
})}  
      </tbody>
      </table>
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.arrayOf(String).isRequired
};

export default Result;
