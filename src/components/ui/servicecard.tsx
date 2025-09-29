import { KeyRound } from "lucide-react";

type Props = {
  icon?: React.ElementType;
  title: string;
  desc: string;
  bullets: string[];
};

export default function ServiceCard({
  icon: Icon = KeyRound,
  title,
  desc,
  bullets,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
      {/* ikonica u mekom kvadratu */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-500">{desc}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-neutral-600">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
