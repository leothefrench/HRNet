import {useState} from 'react'

export const CurrentPage = () => {

    const [page, setPage] = useState(1)

    const handleClickPrevious = () => {
        if (page > 1 ) { setPage(page - 1) }
    }

    const handleClickNext = () => { setPage(page + 1) }

  return (
    <div>
      <div>
        <button onClick={handleClickPrevious} disabled={page === 1}>Previous</button>
        <span className="page-number">{page}</span>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  )
}