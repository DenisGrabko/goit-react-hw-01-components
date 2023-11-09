import user from './components/user.json';
import data from './components/data.json';
import friends from './components/friends.json';
import transaction from './components/transaction.json';
import Profile from 'components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Transaction from './components/TransactionHistory/TransactionHistory'


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