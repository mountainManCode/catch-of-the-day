import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className='store-selectore'>
        { /* this is a comment */ }
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='store name' />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;