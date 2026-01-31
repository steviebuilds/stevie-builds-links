import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  description: string;
  icon?: string;
  iconComponent?: LucideIcon;
  children: ReactNode;
}

export function ArticleLayout({
  title,
  description,
  icon,
  iconComponent: IconComponent,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-[#3ED1FE] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          {icon && (
            <Image
              src={icon}
              alt={title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg"
            />
          )}
          {IconComponent && !icon && (
            <div className="w-16 h-16 rounded-lg bg-[#3ED1FE]/10 flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-[#3ED1FE]" />
            </div>
          )}
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="article-content">
        {children}
      </div>
    </div>
  );
}
