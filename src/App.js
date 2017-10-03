import React, { Component } from 'react';
import './App.css';
import Selection from './components/Selection';
import { uniqueId, zip } from 'lodash';
import items from './items.json';
import ench from './ench.json';
import Level from './components/Level';
import AddButton from './components/AddButton';
import DeleteButton from './components/DeleteButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.addSelection = this.addSelection.bind(this);
    this.deleteSelection = this.deleteSelection.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    this.onEnchantmentChange = this.onEnchantmentChange.bind(this);
    this.onLevelChange = this.onLevelChange.bind(this);
    const selections = [ ench ];
    this.state = {
      enchs: selections,
      selItem: items[0].id,
      selEnchs: [ench[0].id],
      selLevels: ['1']
    }
  }

  addSelection(e) {
    e.preventDefault();
    const { enchs, selEnchs, selLevels } = this.state;
    enchs.push(ench);
    selEnchs[enchs.length - 1] = enchs[enchs.length - 1][0].id;
    selLevels[enchs.length - 1] = 1;
    this.setState({
      enchs, selEnchs
    });
  }

  deleteSelection(e) {
    e.preventDefault();
    const { enchs, selEnchs, selLevels } = this.state;
    enchs.splice(e.target.dataset.index, 1);
    selEnchs.splice(e.target.dataset.index, 1);
    selLevels.splice(e.target.dataset.index, 1);
    this.setState({
      enchs, selEnchs, selLevels
    });
  }

  onItemChange(e) {
    const { target } = e;
    const item = target.value;
    this.setState({
      selItem: item
    });
  }

  onEnchantmentChange(e) {
    const { target } = e;
    const { selEnchs } = this.state;
    const index = target.dataset.index;
    selEnchs[index] = target.value;
    this.setState({ selEnchs });
  }

  onLevelChange(e) {
    const { target } = e;
    const { selLevels } = this.state;
    const index = target.dataset.index;
    selLevels[index] = target.value;
    this.setState({ selLevels });
  }

  renderSelections(selections) {
    const selects = [];
    const { selEnchs, selLevels } = this.state;
    selections.forEach((selection, index)=> {
      const selectedItem = selEnchs[index];
      const selectedLevel = selLevels[index];
      selects.push(
        <div>
          <Selection currentValue={ selectedItem } onChange={ this.onEnchantmentChange } key={ uniqueId(`selection-${index}`) } index={ index } options={ selection } />{' '}
          <Level currentValue={ selectedLevel } onChange={ this.onLevelChange } index={ index }/>{' '}
          <DeleteButton onClick={ this.deleteSelection } index={ index }/>
        </div>);
    });
    return selects;
  }
  doOutput(ench, lvls) {
    const zipped = zip(ench, lvls);
    const result = zipped.map(en => {
      return `{id:${en[0]},lvl:${en[1]}}`
    });
    return result.join(',');
  }
  render() {
    const { enchs, selEnchs, selLevels, selItem } = this.state;

    return (
      <div className="App">
        <form>
          <Selection currentValue={ selItem } onChange={ this.onItemChange } options={items} />
          { this.renderSelections(enchs) }
          <AddButton onClick={ this.addSelection } />
        </form>
        <div id="output">{'/give @p'} { selItem } {' 1 0 {ench:['}
            {this.doOutput(selEnchs, selLevels)}
          {']}'}</div>
      </div>
    );
  }
}

export default App;
