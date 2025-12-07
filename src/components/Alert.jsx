import React from 'react'

const Alert = (props) => {
  return (
    <div>
        <div class="alert alert-danger" role="alert">
  {props.message} <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
    </div>
  )
}

export default Alert