import PropTypes from 'prop-types';
export default function FrendList({ name, avatar, isOnline }) {
  return (
    <ul className="friend-list">
      <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
}

FrendList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
