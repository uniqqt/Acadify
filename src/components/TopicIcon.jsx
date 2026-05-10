import {
  Scale, BookOpen, Shield, Lock, Monitor, ShoppingCart,
  Stethoscope, Heart, Baby, Activity, Brain, Users,
  Calculator, Atom, Layers, Droplets, Thermometer, TrendingUp,
  Globe, Search, FileText, Briefcase, User, GraduationCap,
} from 'lucide-react';

const ICONS = {
  Scale, BookOpen, Shield, Lock, Monitor, ShoppingCart,
  Stethoscope, Heart, Baby, Activity, Brain, Users,
  Calculator, Atom, Layers, Droplets, Thermometer, TrendingUp,
  Globe, Search, FileText, Briefcase, User, GraduationCap,
};

export default function TopicIcon({ name, size = 20, color, style }) {
  const Icon = ICONS[name] || BookOpen;
  return <Icon size={size} color={color} style={style} />;
}
