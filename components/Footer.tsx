export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-[color:var(--muted)]">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
