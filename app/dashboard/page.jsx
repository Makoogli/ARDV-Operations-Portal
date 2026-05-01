export default async function Dashboard() {
  console.log("url",`${process.env.SITE_URL}/api/ncompass/credentials`);
  const response = await fetch(`${process.env.SITE_URL}/api/ncompass/credentials`);
  const credentials = await response.json();
  console.log("credentials",credentials);
  console.log(credentials);
  return <div>Welcome to Operations Dashboard</div>;
}