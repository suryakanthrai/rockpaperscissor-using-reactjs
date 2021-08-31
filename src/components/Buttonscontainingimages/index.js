import './index.css'

const Buttonscontainingimages = props => {
  const {buttonDetails, onGetId} = props
  const {id, image} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, image)
  }

  return (
    <li className="button-li">
      <button
        type="button"
        data-testid={`${lowerCaseId}Button`}
        className="button-image"
        onClick={onClickButton}
      >
        <img src={image} alt={id} className="image-style" />
      </button>
    </li>
  )
}

export default Buttonscontainingimages
