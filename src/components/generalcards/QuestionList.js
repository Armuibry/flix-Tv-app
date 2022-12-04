import React, {useState} from 'react'


import './QuestionList.css'

function QuestionList(props) {
const [para , setPara] = useState(false)

  return (
    <div className='question-list'>
        
        <h1 onClick={()=> setPara(!para)}>{props.ques}</h1>
        {para?(<p>{props.ans}</p>):('')}
    </div>
  )
}

export default QuestionList