import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export function LinkCard({ href, title, description, icon, external = false }: LinkCardProps) {
  const Component = external ? "a" : Link;
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component href={href} {...externalProps}>
      <Card className="group relative overflow-hidden border-[#3ED1FE]/30 bg-gradient-to-br from-[#3ED1FE]/5 to-transparent hover:border-[#3ED1FE]/60 hover:from-[#3ED1FE]/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#3ED1FE]/20">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              {icon && (
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3ED1FE]/10 group-hover:bg-[#3ED1FE]/20 flex items-center justify-center transition-colors">
                  {icon}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#3ED1FE] transition-colors">
                  {title}
                </h3>
                {description && (
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">{description}</p>
                )}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#3ED1FE] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
          </div>
        </div>
      </Card>
    </Component>
  );
}
