import React from "react"
const moment = require("moment")

const TimeDisplay = () => {
  return <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
}

export default TimeDisplay
