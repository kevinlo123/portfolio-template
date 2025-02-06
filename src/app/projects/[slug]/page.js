import Link from 'next/link';
import BlurImage from '../../components/BlurImage';
import AnimatedText from '../../components/AnimatedText';

export default function ProjectsTemplate({ params }) {
  const { slug } = params;  

  const projects = {
    rows: [
      {
        project_id: 1,
        name: 'Project One',
        link: 'project-one',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project One.',
        live_link: 'https://example.com/project-one'
      },
      {
        project_id: 2,
        name: 'Project Two',
        link: 'project-two',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project Two.',
        live_link: 'https://example.com/project-two'
      },
      {
        project_id: 3,
        name: 'Project Three',
        link: 'project-three',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project Three.',
        live_link: 'https://example.com/project-three'
      },
      {
        project_id: 4,
        name: 'Project Four',
        link: 'project-four',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project Three.',
        live_link: 'https://example.com/project-three'
      },
      {
        project_id: 5,
        name: 'Project Five',
        link: 'project-five',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project Three.',
        live_link: 'https://example.com/project-three'
      },
      {
        project_id: 6,
        name: 'Project Six',
        link: 'project-six',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project Three.',
        live_link: 'https://example.com/project-three'
      },
      {
        project_id: 7,
        name: 'Project Seven',
        link: 'project-seven',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project Three.',
        live_link: 'https://example.com/project-three'
      },
      {
        project_id: 8,
        name: 'Project Eight',
        link: 'project-eight',
        image: '/project-placeholder.jpg',
        languages_used: ['Label 1', 'Label 2', 'Label 3'],
        description: 'This is a brief description of Project Three.',
        live_link: 'https://example.com/project-three'
      },
    ]
  };

  const project = projects.rows.find((p) => p.link === slug);

  if (!project) {
    return <p className="text-center text-xl">Project not found</p>;
  }

  const imageURL = project.image; 

  const projectLinks = projects.rows.map((p) => p.link);
  const currentIndex = projectLinks.indexOf(slug);
  const previousProject = projectLinks[currentIndex - 1] || null;
  const nextProject = projectLinks[currentIndex + 1] || null;

  return (
    <main className="project-detail my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
      <section className="flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]">
        <div className="lg:w-1/3 flex flex-col gap-[20px]">
          <h1 className="project-name leading-[100%] font-medium text-[55px] lg:text-[80px]">
            <AnimatedText text={project.name} />
          </h1>
          <div className="flex items-center flex-wrap gap-[6px] group">
            {project.languages_used.map((lang) => (
              <span key={lang} className="tech-used tag-primary rounded-full border uppercase px-3">
                {lang}
              </span>
            ))}
          </div>
          <p className="project-desc">{project.description}</p>
          <a className="flex items-center gap-3 mt-6 md:mt-10 link-underline relative w-fit h-10" href={project.live_link} target="_blank">
            Go to website 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow / Arrow_Up_Right_LG">
                <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="flex flex-col gap-[30px] lg:w-1/2 h-full lg:ml-auto">
          <BlurImage className="object-contain rounded-xl" image={imageURL} />
        </div>
      </section>

      <div className="flex flex-row items-center justify-between lg:justify-center mt-20">
        {previousProject && (
          <Link className="flex gap-4 mr-5" href={`/projects/${previousProject}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
            Previous
          </Link>
        )}
        {nextProject && (
          <Link className="flex gap-4 flex-row-reverse ml-5" href={`/projects/${nextProject}`}>
            <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
            Next
          </Link>
        )}
      </div>

      <Link className="flex items-center justify-center gap-4 mt-[100px]" href="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
        Go back to home page
      </Link>
    </main>
  );
}
