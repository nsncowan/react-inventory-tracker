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

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} editItemV1 = {this.editItemOrigin} />;
      buttonText = 'Return to Item List';
    }
    
    else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail
                                item = {this.state.selectedItem}
                                handleEditClickV1 = {this.handleEditClickOrigin}
                                deleteItemV1 = {this.deleteItemOrigin}/>;
      buttonText = 'Return to Item List';
    }

    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm AddItemToListV1 = {this.AddItemToListOrigin}/>;
      buttonText = 'Return to Item List';
    }

    else {
      currentlyVisibleState = <ItemList itemList = {this.state.mainItemList} changeSelectedItemV1 = {this.changeSelectedItemOrigin}/>;
      buttonText = 'Add an Item';
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;