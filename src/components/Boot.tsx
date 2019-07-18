import React from "react"
import { RosesTheme, defaultTheme } from "roses"
export const Boot: React.FC<any> = ({ element }) => (
  <RosesTheme theme={defaultTheme}>{element}</RosesTheme>
)
