import { useState, useEffect } from "react";

export default function WeatherIcon({
  icon,
  width = 100,
  height = 100,
  styles = {},
}: {
  icon: string;
  width?: number;
  height?: number;
  styles?: any;
}) {
  const [importedIcon, setImportedIcon] = useState<any>(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`../assets/weather-icons/${icon}.svg?react`);
      const Icon = module.default;
      setImportedIcon(<Icon width={width} height={height} style={styles} />);
    };

    importComponent();
  }, [icon, width, height, styles]);

  if (importedIcon === null) {
    return null;
  }

  return <>{importedIcon}</>;
}
