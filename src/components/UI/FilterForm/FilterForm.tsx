import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { setTitleFilter } from '../../../store/slices/filterSlice/filterSlice'

const FilterForm: FC = () => {
  const { title } = useAppSelector((state) => state.filterReducer)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.target.value))
  }

  return (
    <Form>
      <Form.Control
        value={title}
        onChange={handleChange}
        type="search"
        placeholder="Поиск по блюдам..."
        className="me-2"
      />
    </Form>
  )
}

export default FilterForm
