import React from 'react'
import NoticeItem from '../components/common/page/NoticeItem'
import { NoticeDate } from '../data/NoticeData'

export default function Notice() {
  return (
    <>
    {NoticeDate.map((item) => (
      <NoticeItem
        key={item.id}
        name={item.name}
        intro={item.intro}
        list={item.list}
      />
    ))}
    </>
  )
}
