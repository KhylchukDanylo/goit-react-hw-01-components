import PropTypes from 'prop-types';
export default function FrendList({ name, avatar, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FrendList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
