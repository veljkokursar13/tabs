import { v4 as uuidv4 } from 'uuid';

import { FaAngleDoubleRight } from 'react-icons/fa';
export const Duties = ({duties}) => {
  const id = uuidv4();
  return (
    <div>
        {duties.map((duty) => {
              return <div key={id} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
            </div>
        })}
    </div>
  )
}