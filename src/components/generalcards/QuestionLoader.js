import React from 'react'
import QuestionList from './QuestionList'

import data from './data'
import './QuestionLoader.css'
import Form from './Form'

function QuestionLoader() {

  return (
    <div className='question-loader'>
    <h1>Frequently Asked Questions</h1>
    {
        data.map(item => <QuestionList ques={item.ques} ans={item.ans}/>)
    }
    
    <div className="from-input">
          <Form />
    </div>
    
    

    </div>
  )
}

export default QuestionLoader