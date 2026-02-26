import AboutWidget from "@/components/AboutWidget";
import FollowWidget from "@/components/FollowWidget";
import SubscribeWidget from "@/components/SubscribeWidget";

type BlogWidgetsProps = {
  className?: string;
  includeFollow?: boolean;
};

export default function BlogWidgets({
  className,
  includeFollow = true,
}: BlogWidgetsProps) {
  return (
    <aside className={["space-y-8", className].filter(Boolean).join(" ")}>
      <AboutWidget />
      <SubscribeWidget />
      {includeFollow ? <FollowWidget /> : null}
    </aside>
  );
}
