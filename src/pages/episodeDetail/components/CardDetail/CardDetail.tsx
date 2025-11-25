interface EpisodeDetailProps {
  name: string;
  episode: string;
  airDate: string;
  charactersTotal: number;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export const CardDetail = ({
  name,
  episode,
  airDate,
  charactersTotal,
  description = "Without official description.",
  className = "",
  children,
}: EpisodeDetailProps) => {
  return (
    <div
      className={`w-full mx-auto max-w-md  bg-gray-900 text-white rounded-2xl overflow-hidden shadow-xl border border-gray-700 ${className}`}
    >
      <div className="bg-purple-600 p-6">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm opacity-90 mt-1">{episode}</p>
      </div>

      <div className="p-6 space-y-5">
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
          <p className="text-gray-400 text-sm">Air date</p>
          <p className="text-lg font-semibold">{airDate}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
          <p className="text-gray-400 text-sm mb-1">Description</p>
          <p className="text-gray-200 leading-relaxed">{description}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
          <p className="text-gray-400 text-sm">Characters that appear</p>
          <p className="text-xl font-semibold">{charactersTotal}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
