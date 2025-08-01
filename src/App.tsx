import { minions } from './data/minions';
import { MinionSimulator } from './services/minionSimulator';

// const HOUR_IN_SECONDS = 3600;
const DAY_IN_SECONDS = 86_400;

function App() {
  const zombieMinionResources = new MinionSimulator('ZOMBIE').calculateRates(
    DAY_IN_SECONDS
  );
  const boostedZombieMinionResources = new MinionSimulator(
    'ZOMBIE',
    'TASTY_CHEESE'
  ).calculateRates(DAY_IN_SECONDS);

  console.log(Object.keys(minions));
  return (
    <>
      <div>
        The Zombie Minion generates {' '}
        {zombieMinionResources
          .map((resource) => `${resource.name}: ${resource.amount}`)
          .join(', ')}{' '}
        per day
      </div>
      <div>
        The boosted Zombie Minion generates {' '} 
        {boostedZombieMinionResources
          .map((resource) => `${resource.name}: ${resource.amount}`)
          .join(', ')}{' '}
        per day
      </div>
    </>
  );
}

export default App;
