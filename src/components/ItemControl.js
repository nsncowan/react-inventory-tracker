import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetail";




class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    }
    else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };
  
  handleEditClickOrigin = () => {
    this.setState({editing: true});
  }

  AddItemToListOrigin = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  };

  changeSelectedItemOrigin = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  deleteItemOrigin = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  editItemOrigin = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
          .filter(item => item.id !== this.state.selectedItem.id)
          .concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null
    });
  }



  render (){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addItemButton = null;

    switch(this.state.stateName){
      case 'itemDetails':
        currentlyVisibleState = <ItemDetail
              item = {this.state.selectedItem}
              handleEditClickV1 = {this.handleEditClickOrigin}/>;
        buttonText = 'Return to Item List';
        break;
      case 'form':
        currentlyVisibleState = <NewItemForm AddItemToListV1 = {this.AddItemToListOrigin}/>;
        buttonText = 'Return to Item List';
        break;
      case 'itemList':
        currentlyVisibleState = <ItemList itemList = {this.state.mainItemList} changeSelectedItemV1 = {this.changeSelectedItemOrigin}/>;
        buttonText = 'Add an Item';
        break;
      default:
        currentlyVisibleState = <ItemList itemList = {this.state.mainItemList} changeSelectedItemV1 = {this.changeSelectedItemOrigin}/>;
        buttonText = 'Add an Item';
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