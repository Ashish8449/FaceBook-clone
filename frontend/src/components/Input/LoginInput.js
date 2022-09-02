import { ErrorMessage, useField } from 'formik'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
export default function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props)
  const desktopView = useMediaQuery({
    query: '(min-width: 767px)',
  })

  return (
    <div className='relative mb-5 text-center'>
      {!bottom && meta.touched && meta.error && (
        <div
          className={`  ${
            desktopView
              ? 'input_error input_error_desktop input_error_desktop '
              : 'input_error'
          }`}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          <div
            className={`${
              desktopView ? 'error_arrow_left' : 'error_arrow_top'
            }`}
          ></div>
        </div>
      )}

      <input
        className={`text-primary w-80 border h-12 rounded-xl outline-none bg-bg-primary pl-5  focus:border-blue-color ${
          meta.touched && meta.error ? 'border-error' : 'border-bg-secondary'
        }`}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <i
          className={`error_icon absolute scale-90 right-1 ${
            bottom ? 'top-3' : 'bottom-4'
          } `}
        ></i>
      )}

      {bottom && meta.touched && meta.error && (
        <div
          className={`  ${
            desktopView
              ? 'input_error input_error_desktop input_error_desktop '
              : 'input_error my-3'
          } `}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          <div
            className={` ${
              desktopView ? 'error_arrow_left' : 'error_arrow_bottom'
            }`}
          ></div>
        </div>
      )}
    </div>
  )
}
