import React from 'react'

const BorderButton = (props) => {
  return (
    <div>
        <a className="btn btn-dark" href="#" role="button">{props.code}</a>
    </div>
  )
}

export default BorderButton