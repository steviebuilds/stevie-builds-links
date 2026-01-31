export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Stevie Builds. Software Engineer & Automation Specialist.
        </div>
      </div>
    </footer>
  );
}
