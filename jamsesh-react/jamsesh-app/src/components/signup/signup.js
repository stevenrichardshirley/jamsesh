import React from 'react';
import "./signup.css";
const signup = () => (


          <div class="panel-body">
                       <form role="form">

            <h3><strong>About You</strong></h3>
            <h3>Name (Required)</h3>
           <input type="text" name="" id="name" class="form-control" required ></input>
           <h3>Email(Required)</h3>
           <input type="text" name="" id="name" class="form-control" required ></input>

                       <h3>Link to Photo Image (Required)</h3>
                       <input type="text" name="" id="photo" class="form-control" required ></input>
                       <hr></hr>

                       <h3><strong>Profile Questions</strong></h3>
                       <hr></hr>

                       <h3>What instrument do you play?.</h3>
                       <select data-placeholder="" class="chosen-select" id="q1">
                           <option selected="selected" value="1">1 Guitar</option>
                           <option value="2">Drums</option>
                           <option value="3">Bass</option>
                           <option value="4">Vocals</option>
                           <option value="5">Keyboard</option>
                       </select>


                       <h3>What genre of music do you like?</h3>
                       <select data-placeholder="" class="chosen-select" id="q2">
                           <option selected="selected" value="1">Rock</option>
                           <option value="2">Hip Hop</option>
                           <option value="3">Folk</option>
                           <option value="4">Electronic</option>
                           <option value="5">Country</option>
                       </select>


                       <br></br>           

                           <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                       </form>
                   </div>

);

export default signup