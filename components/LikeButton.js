import PropTypes from "prop-types";

const LikeButton = ({ likeCount, onLike }) => (
  <>
    <button
      className="button is-primary is-rounded is-outlined"
      onClick={onLike}
    >
      <span className="icon">
        <i className="far fa-thumbs-up" />
      </span>
      <span>{likeCount}</span>
    </button>

    <style jsx>{`
      .button:hover,
      .button:focus,
      .button:active {
        background-color: #fff !important;
        color: #00d1b2 !important;
      }
    `}</style>
  </>
);
LikeButton.propTypes = {
  likeCount: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired
};

export default LikeButton;
