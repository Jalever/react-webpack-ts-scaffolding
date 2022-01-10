import * as React from 'react'
import styles from './index.less'
const { useState, useEffect, useReducer, useRef } = React

export interface iProps {
  childStyle?: string
}

const HalfLine: React.FC<iProps> = (props: any) => {
  let [childClass, setChildClass] = useState<string>('');
  const { childStyle } = props;
  useEffect(() => {
    setChildClass(childStyle);
  }, [childStyle]);
  return (
    <div className={`${styles.wrapper} ${childClass}`}>
    </div>
  )
}


export default HalfLine
