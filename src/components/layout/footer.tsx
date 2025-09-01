export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold">Sharmake Hassan</h3>
        <p className="mt-2 text-primary-foreground/80">
          💎Together, we can harness the power of data for your success.💎
        </p>
        <p className="mt-4 text-xs text-primary-foreground/60">
          &copy; {new Date().getFullYear()} Sharmake Hassan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
