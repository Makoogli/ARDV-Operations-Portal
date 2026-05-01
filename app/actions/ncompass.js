export async function getAdvertiserTotals(){
  const res = await fetch(`https://nctvapi.n-compass.online/api/advertiser/gettotal?dealerid=${process.env.DEALER_ID}`);
  const data = await res.json();
  return data;
}

export async function getHostTotals(){
  const res = await fetch(`https://nctvapi.n-compass.online/api/host/gettotal?dealerid=${process.env.DEALER_ID}`);
  const data = await res.json();
  return data;
}

export async function getLicenseTotals(){
  const res = await fetch(`https://nctvapi.n-compass.online/api/license/gettotal?dealerid=${process.env.DEALER_ID}`);
  const data = await res.json();
  return data;
}

export async function getHostList({nctvAuthToken}){
  const res = await fetch(`https://nctvapi.n-compass.online/api/host/getbydealerwithtotal?dealerid=${process.env.DEALER_ID}&page=1&search=&sortColumn=&sortOrder=&pageSize=15`,{
    headers:{
        Cookie:`nctvAuthToken=${nctvAuthToken}`
    }
  });
  const data = await res.json();
  return data;
}

export async function getHostContent({hostId,nctvAuthToken}){
  const res = await fetch(`https://nctvapi.n-compass.online/api/host/GetContents?hostId=${hostId}&page=1`,{
    headers:{
        Cookie:`nctvAuthToken=${nctvAuthToken}`
    }
  });
  const data = await res.json();
  return data;
}

export async function getCredentials(){
  const res = await fetch("https://nctvapi.n-compass.online/api/account/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Origin": "https://portal.n-compass.online",
      "Referer": "https://portal.n-compass.online/",
    },
    body: JSON.stringify({
      username: process.env.NCOMPASS_USERNAME,
      password: process.env.NCOMPASS_PASSWORD
    }),
  });
  const data = await res.json();
  const nctvAuthToken = data.token;
  const nctvRefToken = data.refreshToken;
  const nctvUserId = data.roleInfo.userId;
  const nctvDealerId = data.roleInfo.dealerId;
  const nctvRoleName = data.userRole.roleName;
  const nctvRoleId = data.userRole.roleId;
  return {
    nctvAuthToken,
    nctvRefToken,
    nctvUserId,
    nctvDealerId,
    nctvRoleName,
    nctvRoleId
  };
}