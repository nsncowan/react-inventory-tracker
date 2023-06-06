import React from "react";
import ItemList from "./ItemList";

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

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({
      selectedItem: selectedItem,
      stateName: 'itemDetails'
    });
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList
    });
    this.handleClick()
  };

  handleEditClick = () => {
    this.setState({stateName: 'editing'});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
          .filter(item => item.id !== this.state.selectedItem.id)
          .concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      stateName: 'list'
    });
  }



  render (){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addItemButton = null;

    switch(this.state.stateName){
      case 'itemDetail':
        currentlyVisibleState = <ItemDetail
              item = {this.state.selectedItem}
              onClickingEdit = {this.handleEditClick}/>;
        buttonText = 'Return to Item List';
        break;
      case 'form':
        currentlyVisibleState = <NewItemForm onNewItemCreation = {this.handleAddingNewItemToList}/>;
        buttonText = 'Return to Item List';
        break;
      case 'itemList':
        currentlyVisibleState = <ItemList itemList = {this.state.mainItemList} onItemSelection = {this.handleChangingSelectedItem}/>;
        buttonText = null;
        break;
      default:
        currentlyVisibleState = <ItemList itemList = {this.state.mainItemList} onItemSelection = {this.handleChangingSelectedItem}/>;
        buttonText = null;
        break;
    }

    return (
      <>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default ItemControl;