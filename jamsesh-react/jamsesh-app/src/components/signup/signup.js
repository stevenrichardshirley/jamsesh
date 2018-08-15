import React from 'react';
import firebase from 'firebase'
import "./signup.css";

class Signup extends React.Component {

  constructor () {
    super()
    const user = JSON.parse(window.localStorage.getItem('jameshAppGoogleUser'))
    this.state = {
      user,
      music: 'rock',
      instrument: 'guitar'
    }

    this.handleTextInputChange = this.handleTextInputChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    // submit user data to firebase. user userId as unique key
    const uid = firebase.auth().currentUser.uid
    const { user: { name, email, photoUrl }, music, instrument } = this.state
    firebase.database()
      .ref(`users/${uid}`)
      .set({
        username: name,
        email,
        photoUrl,
        music,
        instrument
      }, (err) => {
        // You want to show some confirmation/notification message here
        if (err) {
          return console.log(`error occured while saving user data. err: ${err}`)
        }
        console.log('User saved successfully!')
      })
  }

  handleTextInputChange (e) {
    e.preventDefault()
    // we don't want this values to change since they're from Google auth
  }

  handleSelectChange (e) {
    this.setState({[e.target.id]: e.target.value })
  }

  render () {
    const { user: { name, email, photoUrl }, music, instrument } = this.state
    console.log('email: ', email)
    return (
      <div className="panel-body">
        <form role="form">
          <h3><strong>About You</strong></h3>
          <h3>Name (Required)</h3>
          <input type="text" name="" id="name" className="form-control" value={name} onChange={this.handleTextInputChange} required />
          <h3>Email(Required)</h3>
          <input type="email" name="" id="email" className="form-control" value={email} onChange={this.onTextInputChange} required ></input>

          <h3>Link to Photo Image (Required)</h3>
          <input type="text" name="" id="photo" className="form-control" value={photoUrl} onChange={this.onTextInputChange} required ></input>
          <hr></hr>

          <h3><strong>Profile Questions</strong></h3>
          <hr></hr>

          <h3>What instrument do you play?.</h3>
          <select data-placeholder="" value={instrument} className="chosen-select" id="instrument" onChange={this.handleSelectChange}>
            <option value="guitar">Guitar</option>
            <option value="drums">Drums</option>
            <option value="bass">Bass</option>
            <option value="vocals">Vocals</option>
            <option value="keyboard">Keyboard</option>
          </select>

          <h3>What genre of music do you like?</h3>
          <select data-placeholder="" className="chosen-select" value={music} id="music" onChange={this.handleSelectChange}>
            <option value="rock">Rock</option>
            <option value="hip-hop">Hip Hop</option>
            <option value="folk">Folk</option>
            <option value="electronic">Electronic</option>
            <option value="country">Country</option>
          </select>
          <br></br>

          <button onClick={this.onSubmit} id="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup
