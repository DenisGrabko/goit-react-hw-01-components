import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transaction from './transaction.json';
import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transaction from './TransactionHistory/TransactionHistory'


export const App = () => {
    return (
        <div>   
            <Profile 
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}
            />
            <Statistics 
               stats={data} 
            />
            <FriendList
               friends={friends}
            />
            <Transaction
               items={transaction}
            />
        </div>
    );
}