import React from 'react'

const Pagination = () => {
  return (
    <div>
        <div className="pagination">
            <li className="page-item">
                <a href="#" className="page-link">-</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link active_page">-</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link">-</a>
            </li>
        </div>
    </div>
  )
}

export default Pagination