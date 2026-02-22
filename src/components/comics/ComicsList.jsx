import ButtonLoadMore from '../buttons/ButtonLoadMore.jsx'
import Card from './Card.jsx'

const ComicsList = (props) => {
  return (
    <section id="comic-list" className="my-bg-black position-relative pb-4">
      <span id="title-series">
        <h4 className="text-white fw-bolder bg-primary d-inline-block px-3 py-2">
          {props.titolo}
        </h4>
      </span>
      <Card dati={props.dati} />
      <ButtonLoadMore />
    </section>
  )
}

export default ComicsList