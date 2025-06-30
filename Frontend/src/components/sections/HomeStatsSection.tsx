import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

const StatCard = ({ label, value, prefix = "", suffix = "" }: StatCardProps) => {
  return (
    <div className="card-base text-center">
      <div className="text-2xl lg:text-3xl font-londrina font-bold text-white mb-2">
        {prefix}{value}{suffix}
      </div>
      <div className="text-sm text-text-secondary font-londrina">
        {label}
      </div>
    </div>
  );
};

const HomeStatsSection = () => {
  const stats = [
    { label: "Total Value Locked", value: "$2.4M", prefix: "" },
    { label: "Active Members", value: "1,247", prefix: "" },
    { label: "Avg. Annual Return", value: "18.5", prefix: "", suffix: "%" },
    { label: "Governance Proposals", value: "89", prefix: "" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
        />
      ))}
    </motion.div>
  );
};

export default HomeStatsSection;
