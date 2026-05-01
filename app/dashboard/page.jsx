export default async function Dashboard() {
  const response = await fetch(`${process.env.SITE_URL}/api/ncompass/credentials`);
  if(response.status != 200){
    return <div>Something went wrong</div>
  }
  const credentials = await response.json();
  return <div>Welcome to Operations Dashboard</div>;
}