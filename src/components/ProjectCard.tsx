import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  outcome?: string;
  link?: string;
}

const ProjectCard = ({ title, description, role, outcome, link }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-material-md hover:shadow-material-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative p-4 flex justify-end">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="text-sm font-medium">View Project</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-accent font-medium mb-3">{role}</p>
        <p className="text-muted-foreground mb-4">{description}</p>
        {outcome && (
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Outcome:</span> {outcome}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
