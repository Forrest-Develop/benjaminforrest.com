import React from "react";
import { useEffect } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
const { Fragment } = require("react");

export default function App(){


return(
  <Fragment>
  <head>
    <title>Sheets API Quickstart</title>
    <h1>
      Homepage
    </h1>
<div class="topnav">
  <a class="active" href="./index.html">Home</a>
  <a href="./inventory-home.html">Inventory</a>
  <a href="./support.html">Support</a>
  <a href="./about.html">About</a>
  <a href="./termsofservice.html">Terms of Service</a>
  <a href="./privacypolicy.html">Privacy</a>
</div>
  </head>
  <body>
    <form action="./inventory-home.html">
      <input type="submit" value="Inventory Home" />
  </form>
    body
  </body>
  </Fragment>
);

}