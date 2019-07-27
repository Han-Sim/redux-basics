import React from "react"
import { Provider } from "react-redux"

import Post from "./components/post"
import PostForm from "./components/post-form"
import AppTemplate from "./AppTemplate"

import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <AppTemplate post={<Post />} postForm={<PostForm />} />
    </Provider>
  )
}

export default App
