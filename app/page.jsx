import css from './styles/main.css';

import {getCredentials,getHostTotals,getLicenseTotals,getHostList} from "./actions/ncompass";

export default async function Root() {
  try {
    const {nctvAuthToken} = await getCredentials();
    const data = await getLicenseTotals({nctvAuthToken});
    console.log(data)
    return <div>Welcome to Root</div>;
  } catch (err) {
    return <div>Something went wrong</div>;
  }
}