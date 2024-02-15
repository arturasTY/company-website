export default function SectionIntro({ text }) {
  return (
    <div className="border-b dark:border-zinc-800 border-zinc-200 mb-8">
      <div className="pb-4">
        <p className="text-xl dark:text-zinc-400 text-zinc-600">{text}</p>
      </div>
    </div>
  );
}
