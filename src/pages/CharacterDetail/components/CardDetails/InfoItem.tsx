interface Props {
  label: string;
  value: string | number;
}
export const InfoItem = ({ label, value }: Props) => (
  <div className="bg-[#1E293B] p-4 rounded-2xl">
    <p className="text-gray-400 text-sm">{label}</p>
    <p className="text-white text-lg font-semibold">{value}</p>
  </div>
);
