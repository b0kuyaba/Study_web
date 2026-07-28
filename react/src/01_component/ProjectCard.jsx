const ProjectCard = ({ title, role, count, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>모집 역할: {role}</p>
      <p>모집 인원: {count}</p>
      <div>{children}</div>
    </section>
  );
};

export default ProjectCard;
