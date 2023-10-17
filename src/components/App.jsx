// Profile of social media
import { Profile } from './Profile/Profile.jsx';
import user from './Profile/user.json';

// Statistics section
import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';

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
    </>
  );
};
