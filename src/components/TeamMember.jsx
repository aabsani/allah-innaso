function TeamMember({ teamList }) {
  return (
    <>
      {teamList.map((member) => (
        <div className="team-card">
          <img src={member.image} alt="profile picture" />
          <p className="name">{member.name}</p>
          <p className="job-title">{member.title}</p>
          <p className="member-bio">{member.description}</p>
        </div>
      ))}
    </>
  );
}

export default TeamMember;
