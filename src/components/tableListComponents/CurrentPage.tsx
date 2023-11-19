interface CurrentPageProps {
  page: number;
  setPage: (page: number) =>  void;
}

export const CurrentPage: React.FC<CurrentPageProps> = ({ page, setPage}) => {

    const handleClickPrevious = () => {
        if (page > 1 ) { 
          setPage(page - 1)
        }
    }

    const handleClickNext = () => { 
      setPage(page + 1) 
    }

  return (
    <div className="mt-2">
      <button onClick={handleClickPrevious} disabled={page === 1}>Previous</button>
      <span className="page-number mx-2">{page}</span>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}