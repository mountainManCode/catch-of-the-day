import React from 'react';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('you Changed the URL');
    //first grab te text from the box
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value);
    //second we're going to transition from / to / store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  
  render() {
    return (
      <form className='store-selectore' onSubmit={this.goToStore.bind(this)}>
        { /* this is a comment */ }
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='store name' ref={(input) => { this.storeInput = input }} />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;