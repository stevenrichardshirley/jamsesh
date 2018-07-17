import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Checkbox from 'muicss/lib/react/checkbox';
import Radio from 'muicss/lib/react/radio';

class Example extends React.Component {
  render() {
    return (
      <Form>

        <Checkbox name="Vocals" label="Vocals" defaultChecked={true} />
        <Checkbox name="Drums" label="Drums" />
        <Checkbox name="Guitar" label="Guitar"  />
        <Checkbox name="Bass" label="Bass"  />
        <Checkbox name="Keyboard" label="Keyboard"  />
      </Form>
    );
  }
}

export default Example
