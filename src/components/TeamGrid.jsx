import { teamMembers } from "../../data";
import TeamMember from "./TeamMember";

function TeamGrid() {
  const data = teamMembers;
  return (
    <div className="team-grid">
      <TeamMember teamList={data} />
    </div>
  );
}

export default TeamGrid;
