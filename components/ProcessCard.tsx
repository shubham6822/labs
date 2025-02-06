import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

const ProcessCard = ({
  number,
  title,
  description,
  Icon,
  className,
}: ProcessCardProps) => {
  return (
    <div className={cn("process-card group", className)}>
      <span className="process-number">{number}</span>
      <div className="process-icon">
        <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="process-title">{title}</h3>
      <p className="process-description">{description}</p>
    </div>
  );
};

export default ProcessCard;
