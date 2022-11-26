import PropTypes, { element } from 'prop-types';
export default function Statistics({ title, stats }) {
  let isTitle = false;
  if (title !== '') {
    isTitle = true;
  } else {
    isTitle = false;
  }
  const titleOrg = <h2 className="title">{title}</h2>;

  return (
    <section className="statistics">
      {isTitle ? titleOrg : null}

      <ul className="stat-list">
        {stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
