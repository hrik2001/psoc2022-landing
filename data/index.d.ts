interface statsProps {
  val: number;
  title: string;
}

interface ProjectsProps {
  src: string;
  name: string;
  img: string;
  descr: string;
}

interface WorksProps {
  id: number;
  title: string;
  desc: string;
  photo: string;
}

interface TestamonialProps {
  content: string;
  name: strnig;
  title: string;
}

interface ContactProps{
  name: string;
  src: string;
  img: string;
}

interface TeamMember {
  pic: string;
  name: string;
  designation: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TimelineProps {
  startDate: Date;
  endDate?: Date;
  description: string;
}

interface InfoProps {
  id: number;
  title: string;
  desc: string;
}
