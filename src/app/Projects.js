import Link from 'next/link'


export default async function Projects() {
    const projects = {
        rows: [
            { project_id: 1, name: 'Project One', link: 'project-one' },
            { project_id: 2, name: 'Project Two', link: 'project-two' },
            { project_id: 4, name: 'Project Four', link: 'project-four' },
            { project_id: 5, name: 'Project Five', link: 'project-five' },
            { project_id: 6, name: 'Project Six', link: 'project-six' },
            { project_id: 7, name: 'Project Seven', link: 'project-seven' },
            { project_id: 8, name: 'Project Eight', link: 'project-eight' },
        ]
    };
  
    return (
      <section className="pt-0 lg:pl-[60px] lg:pr-[60px] lg:pb-[60px] px-[30px] lg:px-0 flex items-center justify-center">
        <div className="no-scrollbar overflow-hidden pb-[80px] w-full overflow-x-hidden">
          <div className="flex items-center gap-[10px] mt-[100px]">
            <h2 className="uppercase selected-projects font-light text-[16px] lg:text-[20px] whitespace-nowrap tracking-widest">Projects</h2>
          </div>
          <div className="flex flex-col lg:mx-0 mt-10 lg:mt-16">
            {projects.rows.map((project) => (
              <div key={project.project_id}>
                <Link href={`/projects/${project.link}`} className="project-item group flex items-center justify-between">
                  <h3 className="uppercase text-[24px] tracking-widest lg:text-[60px] group-hover:translate-x-5 duration-500 transition">{project.name}</h3>
                </Link>
                <hr className="project-line opacity-20 w-100% lg:w-3/4 my-5" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
