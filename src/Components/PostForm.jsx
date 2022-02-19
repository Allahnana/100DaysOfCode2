import React, { Component } from 'react'

export class PostForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userID : '',
       title : '',
       body : ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})

  }

  handleSubmit = e =>{
    e.prevetDefault()
    console.log(this.state)

  }
  render() {
    const {userID, title, body} = this.state
    return (
      <div>
          
          <form onSubmit={this.handleSubmit}>
              <div>
                <input type="text" id="fname" name="UserID" value={userID} onChange= {this.changeHandler}/>
              </div>

              <div>
                <input type="text" id="fname" name="Title" value={title} onChange= {this.changeHandler}/>
              </div>

              <div>
                <input type="text" id="fname" name="Body" value={body} onChange= {this.changeHandler}/>
              </div>
         </form>

         <button type='submit'>Submit</button>
        
      </div>
    )
  }
}

export default PostForm