import React from "react";
import { v4 } from 'uuid';
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: startingInventory,
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

  reduceStockOrigin = (id) => {
    const editedMainItemList = this.state.mainItemList.map(item => {
      if (item.id === id) {
        const reducedStock = (item.stock === 0) ? 0 : item.stock - 1;
        return {...item, stock: reducedStock};
      }
      return item;
    });
    this.setState({
      mainItemList: editedMainItemList,
      // editing: false,
      // selectedItem: null
    });
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
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} editItemProp1 = {this.editItemOrigin} />
      buttonText = 'Return to Item List';
    }
    
    else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail
                                item = {this.state.selectedItem}
                                handleEditClickProp1 = {this.handleEditClickOrigin}
                                deleteItemProp1 = {this.deleteItemOrigin}/>
      buttonText = 'Return to Item List';
    }

    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm AddItemToListProp1 = {this.AddItemToListOrigin}/>
      buttonText = 'Return to Item List';
    }

    else {
      currentlyVisibleState = <ItemList 
                                itemList = {this.state.mainItemList} 
                                changeSelectedItemProp1 = {this.changeSelectedItemOrigin}
                                reduceStockProp1 = {this.reduceStockOrigin} />
      buttonText = 'Add Item';
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

let startingInventory = [
  {
    name: "Bistro Blend",
    origin: "Guatamala",
    price: 12,
    stock: 110,
    id: v4()
  },
  {
    name: "Gayo River",
    origin: "Sumatra",
    price: 14,
    stock: 96,
    id: v4()
  },
  {
    name: "Major Domo",
    origin: "Honduras",
    price: 11,
    stock: 84,
    id: v4()
  },
  {
    name: "Tropic Thunder",
    origin: "Costa Rica",
    price: 10,
    stock: 78,
    id: v4()
  },
]

export default ItemControl;