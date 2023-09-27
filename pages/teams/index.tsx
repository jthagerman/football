import { TeamsPageProps } from "@/types/pages";

export default function TeamsPage({ teams }: TeamsPageProps) {
  return (
    <div>
      <h1>This is all the teams</h1>
      <div>
        {teams.map((team) => (
          <div key={team._id}>
            <a href={`/teams/${team.schoolName}`}>{team.schoolName}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.DATABASE_URL}/teams`);
    console.log(`${process.env.DATABASE_URL}/teams`);
    const teams = await response.json();

    console.log(teams);

    return {
      props: {
        teams: teams?.data ?? [],
      },
    };
  } catch (error) {
    console.error("Error Fetching Teams List");
    return {
      props: {
        teams: [],
      },
    };
  }
}
