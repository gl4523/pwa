import React from 'react'
import styles from './index.scss'
import cs from 'classnames'
export interface CardComponentProp {
  id: string
  title: string
  resume: string
  type: 'image' | 'text' | 'hybrid'
  img?: string
}
function Card(props: CardComponentProp) {
  const { type, resume, title, img } = props
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        {
          type === 'image' && (
            <>
              <img src={img} className={styles.coverImg}></img>
              <div className={cs(styles.articleContainer, styles.inner, styles.diyScroll)}>
                <h2>{title}</h2>
                <article>
                  {resume}
                </article>
              </div>
            </>
          )
        }

        {
          type === 'text' && (
            <>
              <div className={cs(styles.articleContainer, styles.diyScroll)}>
                <h2>{title}</h2>
                <article>
                  {resume}
                </article>
              </div>
            </>
          )
        }

        {
          type === 'hybrid' && (
            <>
              <img src={img} className={styles.coverImg}></img>
              <div className={cs(styles.articleContainer, styles.diyScroll)}>
                <h2>{title}</h2>
                <article>
                  {resume}
                </article>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Card as React.FunctionComponent<CardComponentProp>