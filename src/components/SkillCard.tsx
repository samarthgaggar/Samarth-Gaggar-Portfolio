import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon: Icon, title, skills }: SkillCardProps) => {
  return (
    <Card className="p-6 shadow-material-md hover:shadow-material-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
