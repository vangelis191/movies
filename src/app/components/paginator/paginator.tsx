
import { useEffect, useState } from 'react';
import styled from "styled-components";
import {IMovie} from "../../interfaces/Response"
interface MoviesProps {
  results:IMovie[] | undefined
  total_pages:number | any
  total_results:number | undefined
  onPageChange: (newPage: number) => void;
}

export const PaginatorStyle= styled.div`
  button{
    padding:10px;
    border-radius: 10px;
  }

  .paginator-wrapper{
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    position: relative;
    bottom: 30px;
  }


  @media only screen and (max-width: 1550px) {
  .paginator-wrapper{
    margin-right: 100px;
  }
}

@media only screen and (max-width: 1340px) {
  .paginator-wrapper{
    margin-right: 200px;
  }
}

@media only screen and (max-width: 1137px) {
  .paginator-wrapper{
    margin-right: 300px;
  }
}

@media only screen and (max-width: 938px) {
  .paginator-wrapper{
    margin-right: 400px;
  }
}
@media only screen and (max-width: 744px) {
  .paginator-wrapper{
    margin-right: 600px;
  }
}
`;


const Paginator: React.FC<MoviesProps> = ({ total_pages,results,onPageChange }: MoviesProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  if(results?.length){
    const startIndex = (currentPage - 1) * results?.length;
    const endIndex = Math.min(startIndex + results?.length, total_pages);
  }



  useEffect(() => {
    console.log(currentPage);
    
  }, [currentPage]);

  

  return (
    <PaginatorStyle>
      <div className='paginator-wrapper'>
        <button
          disabled={currentPage === 1}
          onClick={() => 
            {
            setCurrentPage(currentPage - 1)
            onPageChange(currentPage - 1)
            }
          }
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${total_pages}`}</span>
        <button
          disabled={currentPage === total_pages}
          onClick={() =>
          
            {
              setCurrentPage(currentPage + 1)
              onPageChange(currentPage + 1)
              }
          }
        >
          Next
        </button>
      </div>
    </PaginatorStyle>
  );
};

export default Paginator;
