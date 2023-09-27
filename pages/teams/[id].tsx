import { GetServerSideProps } from "next";

export default function IndividualTeamPage({ teamData }: any) {
  const { team, games } = teamData;
  console.log(games);
  return (
    <div>
      <h1>{team.schoolName}</h1>
      <h2>{team.mascot}</h2>
      <h3>
        {team.city}, {team.state}
      </h3>

      <div>
        {games.map((el) => {
          return <div>{el.homeTeamScore + " - " + el.awayTeamScore}</div>;
        })}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const response = await fetch(
    `${process.env.DATABASE_URL}/teams/${id}/season`
  );
  console.log(`${process.env.DATABASE_URL}/teams`);
  const teamData = await response.json();

  try {
    return {
      props: {
        teamData: teamData.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        teamData: null,
        // Your data here
      },
    };
  }
};
