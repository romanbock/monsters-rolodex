import { Monster } from '../../App'

import './card.styles.css'

type CardProps = {
  monster: Monster,
}

const Card = ({ monster: { name, email, id } }: CardProps) => {
  // const { name, email, id } = monster
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card

// export class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }

// export default Card
