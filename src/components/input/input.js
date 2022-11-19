import data from '../../api/list.json'

export const Input = (itemList) => {
   const newProduct = {};

   const onFormChangeHandler = (event) =>{
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      newProduct[fieldName] = +fieldValue || fieldValue;
   }

   const onSubmitHandler = (event) =>{
      event.preventDefault();
      if (Object.keys(newProduct).length === 3) {
         const existingField = data.find(product => product.name === newProduct.name);
         if (existingField) {
            existingField.quantity += +newProduct.quantity;
         } else {
            data = [...data, newProduct]
         }
      }
      console.log(data);
   }
   return (
      <form onSubmit={onSubmitHandler}>
         <input type="text" name="name" placeholder='Product' onChange={onFormChangeHandler}></input>
         <input type="number" name="quantity" onChange={onFormChangeHandler}></input>
         <input type="number" name="price" placeholder='Price' onChange={onFormChangeHandler}></input>
         <button type='submit'>Add to cart</button>
      </form>
   )
}