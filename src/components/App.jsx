// Profile of social media
import { Profile } from './Profile/Profile.jsx';
import user from './Profile/user.json';

// Statistics section
import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';

// Friends list
import { FriendsList } from './Friends/FriendsList.jsx';
import friends from './Friends/friends.json';

// Transactions history
import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory.jsx';
import history from './TransactionsHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory items={history} />;
    </>
  );
};
