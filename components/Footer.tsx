export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-[96px] text-sm text-[color:var(--muted)]">
        © {new Date().getFullYear()} Sloane Holtby. All rights reserved.
      </div>
    </footer>
  );
}
