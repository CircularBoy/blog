import React from 'react'
import { Field, Form, Formik } from 'formik'
import { PostData } from '../../store/postsReducer'

type IProps = {
  initialValues?: PostData
  // need @type
  onSubmit: (postPayload: PostData) => void
  submitText: string
}
const Post: React.FC<IProps> = ({ initialValues = { title: '', body: '' }, onSubmit, submitText }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={'form'}>
        <Field id="title" name="title" placeholder="Enter title" component={'input'} />
        <Field id="body" name="body" placeholder="Enter body" component={'textarea'} />
        <button>{submitText}</button>
      </Form>
    </Formik>
  )
}

export default Post
