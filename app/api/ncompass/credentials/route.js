import {NextResponse} from "next/server";

export async function GET(){
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
  return NextResponse.json({
    nctvAuthToken,
    nctvRefToken,
    nctvUserId,
    nctvDealerId,
    nctvRoleName,
    nctvRoleId
  });
}