import {Component} from 'react'
import './index.css'

class EditTextInput extends Component {
  state = {showInputBox: true, textInput: ''}

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({showInputBox: !prevState.showInputBox}))
  }

  onClickEdit = () => {
    this.setState(prevState => ({showInputBox: !prevState.showInputBox}))
  }

  render() {
    const {showInputBox, textInput} = this.state
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          {showInputBox ? (
            <div>
              <input
                type="text"
                className="input"
                onChange={this.onChangeTextInput}
                value={textInput}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickSave}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="paragraph-container">
              <p className="text">{textInput}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditTextInput
