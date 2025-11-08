import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import heroBg from "@/assets/background.jpg";
import profilePhoto from "@/assets/profile.png";
import {
  Code2,
  Palette,
  Users,
  Mail,
  Linkedin,
  Github,
  Download,
  Award,
  BookOpen,
  Trophy,
  Medal,
} from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Arts and Culture Discovery",
      description:
        "Built an intelligent chatbot using machine learning that can understand and respond to natural language queries. Implemented NLP algorithms and trained on diverse datasets.",
      role: "Lead Developer",
      outcome: "Integrated with local senior centers, aiding 300+ seniors",
      link: "https://github.com/samarthgaggar/Arts-and-Culture-Org-Finder",
    },
    {
      title: "Research Paper",
      description:
        "Created SALT: Steering Activations towards Leakage-free Thinking in Chain of Thought”: A study on using steering vectors to mitigate leaky thoughts with chain of thought prompting.",
      role: "Researcher",
      outcome: "Published on ArXiv, accepted to NeurIPS ResponsibleFM workshop",
      link: "https://example.com/research-paper-salt",
    },
    {
      title: "Github MCP Docker Server",
      description:
        "A containerized GitHub MCP server designed for deployment on GKE with SSE support for remote connections.",
      role: "Self-Directed Project",
      outcome: "Developed a novel MCP deployment technology",
      link: "https://github.com/samarthgaggar/github-remote-mcp-server",
    },
  ];

  const activities = [
    {
      icon: Trophy,
      title: "LLM Researcher",
      period: "2025 - Present",
      description: "Worked with a team of 4 under the guidance of a PhD mentor to create publish a research paper. Currently under review for publication of ArXiv and submitted to NeurIPS ResponsibleFM workshop. Publishing “SALT: Steering Activations towards Leakage-free Thinking in Chain of Thought”: A study on using steering vectors to mitigate leaky thoughts with chain of thought prompting.",
    },
    {
      icon: BookOpen,
      title: "Lincoln Douglas Debate Captain",
      period: "2022 - Present",
      description: "Competed in LD (Lincoln-Douglas) Debate, traveling to over 20 tournaments across the country such as the Stanford Invitational, Berkeley Invitational, and CA State Championships. Accumulated multiple 1st place finishes, Top Speaker, and peaked at #3 nationwide in the previous debate season.  Introduced LD debate to new students, hosting workshops and bootcamps, growing club members from 30 to 100+ in a span of two years. Led in-house tournaments and provided crucial feedback to students. ",
    },
    {
      icon: Award,
      title: "Robotics Lead Engineer",
      period: "2022 - Present",
      description: "Driver of team 5327V and lead builder and documenter. Leading a team of 12 to compete at the highest level of VEX robotics. Led execution of school tournament, attracting over 200+ people annually. Created a 300+ page Engineering Notebook, while learning and teaching important concepts such as build mechanics, PID (Proportional Integral Derivative) tracking, and Odometry. ",
    },
    {
      icon: Medal,
      title: "Taekwondo Athlete",
      period: "2015 - Present",
      description: "Dedicated over 2000+ hours to mastering Taekwondo concepts such as Demonstration, Board Breaking, and Poomsae. Achieved titles including 5x Regional Champion, 2x National Medalist, and peaked at #1 out of 1000+ of athletes in the nation. Performed demonstrations, reaching over 30,000+ people through performances such as GSW vs. LAL Halftime Show, SF Giants Pre-Game Show, Korean Heritage Festivals, etc. ",
    },
  ];

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Samarth Gaggar
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6 italic">
              HS Student | AI and ML Researcher | Aspiring AI Engineer "
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              High school student passionate about technology, leadership, and making a
              positive impact in my community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="shadow-material-lg hover:shadow-material-xl transition-all"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="shadow-material-md hover:shadow-material-lg transition-all bg-card/50 backdrop-blur-sm"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">About Me</h2>
            <Card className="p-8 shadow-material-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-lg text-foreground mb-4 leading-relaxed">
                    Hello! I'm Samarth Gaggar, a high school student with a strong passion for
                    technology and innovation. From a young age, I've been fascinated by how
                    technology can solve real-world problems and improve lives. This curiosity has
                    driven me to explore various fields within computer science, particularly
                    artificial intelligence and machine learning.
                  </p>
                  <p className="text-lg text-foreground mb-4 leading-relaxed">
                    My interests lie in artificial intelligence and machine learning, where I enjoy
                    exploring new concepts and applying them to real-world problems. I've had the
                    opportunity to lead projects that leverage AI to create meaningful solutions,
                    and I'm eager to continue expanding my knowledge in this exciting field.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Beyond academics, I am deeply committed to leadership and community involvement.
                    As the captain of my school's Debate team, national medalist in Taekwondo, and
                    Lead Engineer on my school's Robotics team, I strive to inspire and support my peers
                    while making a positive impact in our community.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={profilePhoto}
                    alt="Samarth Gaggar"
                    className="w-full h-auto rounded-lg shadow-material-xl"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Activities & Leadership
          </h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="p-6 shadow-material-md hover:shadow-material-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <activity.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{activity.title}</h3>
                      <span className="text-sm text-muted-foreground">{activity.period}</span>
                    </div>
                    <p className="text-foreground/80">{activity.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my technical projects and creative solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Skills</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technical and interpersonal skills I've developed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SkillCard
              icon={Code2}
              title="Technical Skills"
              skills={["Python", "JavaScript", "React", "Machine Learning", "Data Analysis", "Github", "NumPy", "TensorFlow", "PyTorch", "Pandas", "HTML", "CSS", "C++"]}
            />
            <SkillCard
              icon={Palette}
              title="Creative Skills"
              skills={[
                "UI/UX Design",
                "Public Speaking",
                "Content Creation",
                "Problem Solving",
              ]}
            />
            <SkillCard
              icon={Users}
              title="Leadership Skills"
              skills={[
                "Team Management",
                "Project Planning",
                "Mentoring",
                "Communication",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new opportunities, collaborations, and conversations. Feel
              free to reach out!
            </p>
            <Card className="p-8 shadow-material-lg">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  size="lg"
                  className="shadow-material-md hover:shadow-material-lg transition-all"
                  onClick={() => window.open("mailto:samarthgaggar2010@gmail.com")}
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="shadow-material-sm hover:shadow-material-md transition-all"
                  onClick={() => window.open("https://linkedin.com/in/samarth-gaggar", "_blank")}
                >
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="shadow-material-sm hover:shadow-material-md transition-all"
                  onClick={() => window.open("https://github.com/samarthgaggar", "_blank")}
                >
                  <Github className="mr-2 w-5 h-5" />
                  GitHub
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for internship and research opportunities in AI and ML. Let's build together!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Samarth Gaggar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
