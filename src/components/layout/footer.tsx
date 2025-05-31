
export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Shiraz Ali. All rights reserved.</p>
        <p className="mt-1">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
