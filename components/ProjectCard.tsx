import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Simple Card components for structure and style
const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "flex flex-col overflow-hidden rounded-xl border bg-white/90 dark:bg-zinc-900/80 shadow-sm",
      className
    )}
  >
    {children}
  </div>
);
const CardHeader = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={cn("p-4 pb-2", className)}>{children}</div>;
const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <h3 className={cn("font-semibold text-lg", className)}>{children}</h3>;
const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={cn("p-4 pt-2", className)}>{children}</div>;
const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <span
    className={cn(
      "inline-block rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 text-[10px] font-medium",
      className
    )}
  >
    {children}
  </span>
);

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  video?: string;
  image?: string;
  active?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  technologies,
  video,
  image,
  active,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 ease-out h-full",
        active
          ? "border-green-400 shadow-green-100/40 shadow-lg bg-green-50 dark:bg-green-900/30"
          : "hover:shadow-lg",
        className
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={600}
            height={160}
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top bg-gray-100 dark:bg-gray-800"
          />
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top bg-gray-100 dark:bg-gray-800"
          />
        ) : null}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base flex items-center gap-2">
            {title}
            {active && (
              <span className="ml-2 rounded bg-green-200 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-800 dark:text-green-100">
                Active
              </span>
            )}
          </CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
