import React, { useEffect } from 'react'
import { CardGroup, Col, Row } from 'react-bootstrap'
import NewCardForm from '../Components/NewCardForm/NewCardForm'
import DiaryCard from '../Components/DiaryCard/DiaryCard'

import { useDispatch, useSelector } from 'react-redux'

import { startDiaryNotesFirestoreSync } from '../utils/actions/firestore'

function DiaryHome () {
  const diaryCardsList = useSelector(state => state.diaryCards)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startDiaryNotesFirestoreSync())
  })

  return (
      <Row className={'justify-content-center p-3 vh-100'}>
        <Col className={'col-12 overlay'}>
          <NewCardForm/>
          <CardGroup className={'justify-content-center m-3'}>
            {
              Array.isArray(diaryCardsList) && diaryCardsList.sort((a, b) => a.createdAt - b.createdAt).map(i => (
                  <DiaryCard
                      key={i.id}
                      id={i.id}
                      title={i.title}
                      description={i.description}
                      name={i.name}/>))
            }
          </CardGroup>
        </Col>
      </Row>
  )
}

export default DiaryHome
