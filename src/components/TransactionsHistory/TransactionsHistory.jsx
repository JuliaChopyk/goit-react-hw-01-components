import PropTypes from 'prop-types';
import css from './TransactionsStyles.module.css';

export const TransactionsHistory = ({ items }) => {
  return (
    <section className={css.transactions}>
      <table className={css.table}>
        <thead className={css.tableHeader}>
          <tr>
            <th className={css.tableHeading}>Type</th>
            <th className={css.tableHeading}>Amount</th>
            <th className={css.tableHeading}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tableBody}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css.tableRow}>
                <td className={css.tableCell}>{type}</td>
                <td className={css.tableCell}>{amount}</td>
                <td className={css.tableCell}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.array,
};
