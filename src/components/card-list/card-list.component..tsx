import { Monster } from '../../App'
import Card from '../card/card.component'
import './card-list.styles.css'

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />
    })}
  </div>
)

export default CardList

// export class CardList extends Component {
//   render() {
//     const { monsters } = this.props

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />
//         })}
//       </div>
//     )
//   }
// }

// export default CardList
