import React from "react";



class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateName: 'list',
      mainItemList: [],
      selectedItem: null,
    };
  }

  handleClick = () => {
    let nextState = null;
    let nextSelectedItem = this.state.selectedItem;
    switch(this.state.stateName) {
      case 'itemDetail':
        nextState = 'list'
        nextSelectedItem = null;
        break;
      case 'form':
        nextState = 'list';
        break;
      default:
        nextState = 'list';
        break;
    }

    this.setState({
      stateName: nextState,
      selectedItem: nextSelectedItem
    })
  };

  handleAddingItemToList = (newItem) => 







}