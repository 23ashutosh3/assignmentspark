import React from 'react';
 import checkboxes from './checkboxes';
import checkboxesb from './checkboxesb'
import checkboxesc from './checkboxesc'
import '../App.css'

import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	  checkedItems: new Map(),
	  addItem:[]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
	this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
	
  }

  render() {
    return (
		<div className="Checkboxes">
      <React.Fragment>
	  <h2>Purtugal</h2>
        {
			
          checkboxes.map(item => (
            <label key={item.key}>
				<Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
              {item.name}
              
            </label>
          ))
        }
      </React.Fragment>
	  <React.Fragment>
		  <h2>Nicargua</h2>
        {
          checkboxesb.map(item => (
            <label key={item.key}>
				<Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
              {item.name}
              
            </label>
          ))
        }
      </React.Fragment>

	  <React.Fragment>
	  <h2>Marshall Island</h2>

        {
          checkboxesc.map(item => (
            <label key={item.key}>
				              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />

              {item.name}
            </label>
          ))
        }
      </React.Fragment>
	  </div>
    );
  }
}

export default CheckboxContainer;