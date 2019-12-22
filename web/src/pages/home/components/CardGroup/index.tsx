import React, { useEffect, useCallback, useRef, useMemo, createRef, useState } from 'react'
import styles from './index.scss'
import cs from 'classnames'
import Ctx from './context'
interface CardGroupProps extends React.Props<{}> {
  top?: number
  bottom?: number
  left?: number
  right?: number
}
function CardGroup(props: CardGroupProps) {
  const [init, setInit] = useState(false)
  const groupRef = useRef<HTMLDivElement>()
  const { top = 0, right = 0, bottom = 0, left = 0 } = props
  const trigger = useShake()

  const resizeChildren = useCallback(() => {
    const containerRect = (groupRef.current as HTMLDivElement).getBoundingClientRect()
    const collection = groupRef.current?.childNodes || []
    if (!collection.length) return
    const reference = (collection[0] as HTMLDivElement).getBoundingClientRect()
    // 最大列数
    const maxCol = ~~((containerRect.width - left - right) / reference.width)
    // 偏移量
    const offset = reference.width
    // 初始化排序数组
    const TopArr = createArray(maxCol, top)

    for (let i = 0, len = collection.length; i < len; i++) {
      const child = collection[i] as HTMLDivElement
      const childRect = child.getBoundingClientRect()
      const { index, value } = getMinItemIndexInArray(TopArr)
      child.style.setProperty('top', `${value}px`)
      child.style.setProperty('left', `${index * offset}px`)
      child.style.setProperty('position', 'absolute')

      TopArr[index] += childRect.height
    }

  }, [top, right, bottom, left])

  const handleWindowResize = useCallback(() => {
    trigger(resizeChildren, 200)
  }, [trigger])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    resizeChildren()
    setInit(true)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Ctx.Provider value={[]}>
      <div className={cs(styles.cardGroup, { [styles.show]: init })} ref={groupRef as any}>
        {props.children}
      </div>
    </Ctx.Provider>
  )
}

/**
 * 创建数组
 * @param len 数组长度 
 * @param initValue 初始化数值
 */
function createArray<T>(len: number, initValue: T): Array<T> {
  const arr: T[] = []
  while (len--) {
    arr.push(initValue)
  }
  return arr
}

/**
 * 获取数组中最小的数
 * @param arr 
 */
function getMinItemIndexInArray(arr: number[]): { index: number, value: number } {
  return arr.reduce((previous, value, index) => {
    if (value < previous.value) {
      previous.value = value
      previous.index = index
    }
    return previous
  }, { index: -1, value: Number.MAX_SAFE_INTEGER })
}

// 防抖钩子
function useShake() {
  const ref = useRef<Function>()
  const timer = useMemo<{ id: number }>(() => ({ id: -1 }), [])

  const trigger = useCallback((callFunc: Function, duration: number) => {
    ref.current = callFunc
    clearTimeout(timer.id)
    timer.id = setTimeout(() => {
      ref.current && ref.current()
    }, duration) as any;
  }, [])

  useEffect(() => () => {
    clearTimeout(timer.id)
  }, [])
  return trigger
}


export default CardGroup as React.FunctionComponent<CardGroupProps>