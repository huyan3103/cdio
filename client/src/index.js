import React from "react"
import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import Debug from "./Debug"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading....</div>}>
      <React.StrictMode>
        <Debug />
        <App />
      </React.StrictMode>
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById("root"),
)
