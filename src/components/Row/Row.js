import './Row.scss'

function Row( {name, date_utc, details, links} ){


   const { patch} = links;
   const dateNumber = date_utc.slice(0,4);

   return (
      <tr className='row'>
         <td>{name}</td>
         <td>{dateNumber}</td>
         <td>{details}</td>
         <td><img className='img' src={patch.small} alt='картинка ракеты'/></td>
      </tr>
   )
}

export default Row;