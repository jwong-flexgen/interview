/*
  Summary: Show a list of products, add a category filter, and add a price sort.

  It is okay if you cannot accomplish all tasks!

  Tasks:
  - Show a list of products with their name, price, and category.
  - Handle loading and error states from the API.
  - Add a way for the user to filter shown products by category.
  - Add a way for the user to sort shown products by price (ascending and descending).
  - Display the image for each item.
  - Add a way for the user to search products by name.

  You will use the FakeStoreAPI to interact with.
  API Docs: https://fakestoreapi.com/docs

  Do not worry about styling, but feel free to add some if you want!

  You should not need any external libraries.

  Do not use AI to complete this task. We want to see how you think and solve problems.
  As such, please explain your thought processes and ask questions if you have them!
 */

import Header from "./Header"
import ProductsDisplay from "./ProductsDisplay"

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 m-4'>
      <h1 className='text-3xl font-bold'>Window Shopping</h1>
      <hr className='w-full' />

      <Header />

      <ProductsDisplay />
    </div>
  )
}

export default App
