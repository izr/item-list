import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  error: {
    color: 'red',
  },
  label: {
    display: 'block',
    color: theme.palette.primary[400],
    fontWeight: 'bold',
  },
  form: {
    padding: '10px',
  },
})

const form = ({ onSubmit, classes }) => (
  <div className={classes.form}>
    <h4>Добавить новый объект</h4>
    <Formik
      initialValues={{ title: '', attributes: [''], description: '' }}
      validate={values => {
        if (!values.title) return { title: 'Заголовок обязателен' }
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm()
        onSubmit(values)
      }}
      render={({ values, errors, touched }) => (
        <Form>
          <label className={classes.label}>Заголовок *</label>
          <Field name="title" />
          {errors.title && touched.title ? (
            <div className={classes.error}>{errors.title}</div>
          ) : null}
          <label className={classes.label}>Пункты</label>
          <FieldArray
            name="attributes"
            render={arrayHelpers => (
              <div>
                {values.attributes.map((attribute, index) => (
                  <div key={index}>
                    <Field name={`attributes.${index}`} />
                    {values.attributes.length > 1 && (
                      <Button
                        size="small"
                        variant="text"
                        color="primary"
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={() =>
                    arrayHelpers.insert(values.attributes.length, '')
                  }
                >
                  +
                </Button>
              </div>
            )}
          />
          <label className={classes.label}>Описание</label>
          <Field name="description" />
          <div>
            <Button variant="contained" color="primary" type="submit">
              Добавить
            </Button>
          </div>
        </Form>
      )}
    />
  </div>
)

export default withStyles(styles)(form)
