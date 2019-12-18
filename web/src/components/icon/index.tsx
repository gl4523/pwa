import React from 'react'

import cs from 'classnames'
export interface IconComponentProps {
  type: string
  className?: string
  style?: Object
  [propName: string]: any
}
function Icon(props: IconComponentProps) {
  const {type, className, style, ...other} = props;
  return <i className={cs(className, 'iconfont', type)} style={style}  {...other}></i>
}

export default Icon as React.FunctionComponent<IconComponentProps>