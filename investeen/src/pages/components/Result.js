import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import quizQuestions from "../api/quizQuestions";
var TotalPers=0;
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
        <table style={{ width: "100%" }} className='table'>
          <tbody className="Tbody">
          {props.quizResult.map((items, index) => 
            {
                  
                  {items.map((subItems, sIndex) => {
                      if (sIndex != 0) {
                        TotalPers+=subItems
                      }
                  })}
            })}
            {props.quizResult.map((items, index) => {
              
              return (
                <tr key={index}>
                  

                  {items.map((subItems, sIndex) => {
                    if (sIndex === 0) {
                      return (
                        <td className="returnBox1" key={sIndex}>
                          {" "}
                          {subItems}{" "}
                        </td>
                      );
                    } else {
                      return (
                        <td className="returnBox2" key={sIndex}>
                          {" "}
                          {Number( ( (subItems / (TotalPers/2 )*100).toFixed(1)))}%
                        </td>
                      );
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
  quizResult: PropTypes.arrayOf(String).isRequired,
};

export default Result;
